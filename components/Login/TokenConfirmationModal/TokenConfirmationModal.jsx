import React, { useState } from "react";
import { AntDesign } from "@expo/vector-icons";
import { useDispatch, useSelector } from "react-redux";
import { CloseButton } from "./TokenConfirmationModal.styles";
import Colors from "../../../constants/Colors";
import { BoldTitle } from "../../../styles/common.styles";
import GradientButton from "../../Common/GradientButton/GradientButton";
import FullScreenModal from "../../Common/FullScreenModal/FullScreenModal";
import { colors } from "../../../styles/styleGuide";
import TokenInput from "../../Common/TokenInput/TokenInput";
import Keyboard from "../../Common/Keyboard/Keyboard";
import api from "../../../api/api";
import {
  ErrorMessageWrapper,
  ErrorSmallMessage,
} from "../../../screens/Login/Login.styles";
import GenericErrorModal from "../../Common/Modals/GenericErrorModal/GenericErrorModal";
import { login } from "../../../store/actions/user";

function TokenConfirmationModal({ isOpen, setIsOpen, navigation, phone }) {
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(false);
  const [token, setToken] = useState([]);
  const [invalidToken, setInvalidToken] = useState(false);
  const dispatch = useDispatch();
  const marketSelected = useSelector((state) => state.cartReducer.market);

  function getUserInfo(accessToken) {
    api
      .get("/api/v1/me", {
        headers: {
          Authorization: `Bearer ${accessToken}`,
        },
      })
      .then(async (resp) => {
        dispatch(login(resp.data.result, accessToken));
        setLoading(false);
        setIsOpen(false);
        if (marketSelected) {
          navigation.navigate("Scanner");
        } else {
          navigation.navigate("SelectMarket");
        }
      });
  }

  function VerifyAndLogin() {
    setLoading(true);
    const reformattedPhone = phone.replace(/[^\d]/g, "");
    api
      .post("/api/v1/users/sign-in", {
        phoneNumber: reformattedPhone,
        token: token.join(""),
      })
      .then(async ({ data }) => {
        getUserInfo(data.result.access_token);
      })
      .catch((err) => {
        if (err.response.data.result === "Invalid Token") {
          setInvalidToken(true);
        } else {
          setError(true);
        }
        setLoading(false);
      });
  }

  function tokenKeyboardActions(backspace, num) {
    if (backspace) {
      setToken((tokenArr) => tokenArr.slice(0, -1));
      return;
    }

    if (token.length >= 4) {
      return;
    }

    setToken((tokenArr) => {
      const newTokenArr = [...tokenArr];
      return newTokenArr.concat(num.toString());
    });
  }

  function onNumberPress(index, num) {
    const blankButton = index === 9;
    const backspace = index === 11;

    if (blankButton) {
      return;
    }
    tokenKeyboardActions(backspace, num);
  }

  return (
    <FullScreenModal
      styles={{
        padding: 16,
        justifyContent: "space-evenly",
        alignItems: "center",
      }}
      height="90%"
      backdrop
      modalVisible={isOpen}
      setModalVisible={setIsOpen}
    >
      {!loading && (
        <CloseButton
          onPress={() => {
            setToken([]);
            setIsOpen(false);
            setError(false);
          }}
        >
          <AntDesign name="closecircleo" size={30} color={Colors.secondary} />
        </CloseButton>
      )}
      <>
        <BoldTitle color={Colors.secondary} style={{ width: "90%" }}>
          Digite o código de SMS enviado para seu telefone:
        </BoldTitle>
        <TokenInput tokenArr={token} />
        <ErrorMessageWrapper>
          <ErrorSmallMessage center show={invalidToken}>
            Código incorreto, por favor verifique e tente de novo
          </ErrorSmallMessage>
        </ErrorMessageWrapper>
        <GradientButton
          onPress={VerifyAndLogin}
          loading={loading}
          loadingColor={colors.secondary}
          style={{ width: 260 }}
        >
          Confirmar
        </GradientButton>
      </>
      <Keyboard onNumberPress={onNumberPress} />
      <GenericErrorModal show={error} setGenericError={setError} />
    </FullScreenModal>
  );
}

export default TokenConfirmationModal;
