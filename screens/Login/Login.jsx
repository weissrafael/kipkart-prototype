import React, { useState } from "react";
import { Platform, StatusBar } from "react-native";
import {
  Page,
  LogoImage,
  Ground,
  MarketImage,
  ForgotRow,
  ForgotButton,
  ForgotButtonText,
  Sky,
  WomanImage,
  ErrorMessageWrapper,
  ErrorSmallMessage,
} from "./Login.styles";
import { colors } from "../../styles/styleGuide";
import MovingClouds from "../../components/Common/MovingClouds/MovingClouds";
import useKeyboardIsOpen from "../../hooks/useKeyboardIsOpen";
import GradientButton from "../../components/Common/GradientButton/GradientButton";
import Input from "../../components/Common/Input/Input";
import TokenConfirmationModal from "../../components/Login/TokenConfirmationModal/TokenConfirmationModal";
import api from "../../api/api";
import GenericErrorModal from "../../components/Common/Modals/GenericErrorModal/GenericErrorModal";
import BackButton from "../../components/Common/BackButton/BackButton";
import { fireEvent } from "../../utils/analytics";

const logo = require("../../assets/logokip.png");
const market = require("../../assets/tutorial-market.png");
const women = require("../../assets/women-with-cart-transparent.png");

function Login({ navigation }) {
  const [phone, setPhone] = useState("");
  const [confirmToken, setConfirmToken] = useState(false);
  const [loading, setLoading] = useState(false);
  const [userNotFound, setUserNotFound] = useState(false);
  const [genericError, setGenericError] = useState(false);
  const keyboardShown = useKeyboardIsOpen();

  function submitCellphone() {
    setLoading(true);
    const reformattedPhone = phone.replace(/[^\d]/g, "");
    api
      .post("/api/v1/users/request-access-token", {
        phoneNumber: reformattedPhone,
      })
      .then(() => {
        setLoading(false);
        setConfirmToken(true);
        fireEvent(
          "cellphone_successfully_submitted",
          "Login",
          "success",
          "Login via Cellphone successfully submitted, confirmation token sent"
        );
      })
      .catch((err) => {
        if (err.response.data.result === "User Not Found") {
          setUserNotFound(true);
          fireEvent(
            "cellphone_login_failed_user_not_Found",
            "Login",
            "user error",
            "Login via Cellphone failed, user cellphone was not found"
          );
        } else {
          setGenericError(true);
          fireEvent(
            "cellphone_login_failed_API_error",
            "Login",
            "system error",
            "Login via Cellphone failed, API error"
          );
        }
        setLoading(false);
      });
  }

  function maskPhone(cellphone) {
    let newCellphone = cellphone.replace(/\D/g, "");
    newCellphone = newCellphone.replace(/^(\d{2})(\d)/g, "($1)$2");
    newCellphone = newCellphone.replace(/(\d)(\d{4})$/, "$1-$2");
    newCellphone = newCellphone.replace(/(\d)(\d{4})$/, "$1-$2");
    setPhone(newCellphone);
  }

  return (
    <Page>
      {!confirmToken && (
        <BackButton
          backIcon
          styles={{ top: 20, left: 20 }}
          onPress={() => navigation.pop()}
        />
      )}
      {!keyboardShown && (
        <Sky>
          <LogoImage source={logo} resizeMode="contain" />
          <MarketImage source={market} resizeMode="contain" />
          <WomanImage source={women} resizeMode="contain" />
          <MovingClouds />
        </Sky>
      )}
      <Ground
        behavior={Platform.OS === "ios" ? "padding" : "height"}
        keyboardShown={keyboardShown}
      >
        <Input
          value={phone}
          label="Digite o seu celular"
          onChangeText={(value) => maskPhone(value)}
          style={{ width: "100%" }}
          keyboardType="numeric"
        />
        <ErrorMessageWrapper>
          <ErrorSmallMessage show={userNotFound}>
            Celular nao cadastrado
          </ErrorSmallMessage>
        </ErrorMessageWrapper>
        <GradientButton
          onPress={submitCellphone}
          color1={colors.primary}
          color2={colors.blueGrotto}
          textColor={colors.secondary}
          style={{ marginBottom: 10 }}
          loading={loading}
        >
          Entrar
        </GradientButton>
        <ForgotRow keyboardShown={keyboardShown}>
          <ForgotButton onPress={() => navigation.navigate("Signup")}>
            <ForgotButtonText>Criar nova conta</ForgotButtonText>
          </ForgotButton>
        </ForgotRow>
      </Ground>
      <GenericErrorModal
        show={genericError}
        setGenericError={setGenericError}
      />
      <TokenConfirmationModal
        isOpen={confirmToken}
        setIsOpen={setConfirmToken}
        navigation={navigation}
        phone={phone}
      />
    </Page>
  );
}

export default Login;
