import React, { useState } from "react";
import { Platform } from "react-native";
import {
  Page,
  LogoImage,
  Ground,
  MarketImage,
  Sky,
  Divider,
  DividerText, SocialRow,
} from "./Login.styles";
import { colors } from "../../styles/styleGuide";
import useKeyboardIsOpen from "../../hooks/useKeyboardIsOpen";
import GradientButton from "../../components/Common/GradientButton/GradientButton";
import Input from "../../components/Common/Input/Input";
import Button from "../../components/Common/Button/Button";
import { AntDesign } from '@expo/vector-icons';
import {Spacing} from "../../components/Common/Menu/Menu.styles";

const logo = require("../../assets/logokip.png");
const market = require("../../assets/undraw/logindraw.png");

function Login({ navigation }) {
  const [phone, setPhone] = useState("");
  const [loading, setLoading] = useState(false);
  const [loadingGoogle, setLoadingGoogle] = useState(false);
  const [loadingFacebook, setLoadingFacebook] = useState(false);
  const keyboardShown = useKeyboardIsOpen();

  function submitCellphone() {
    setLoading(true);
    setTimeout(() => {
      setLoading(false);
      navigation.navigate("Scanner");
    }, 2000);
  }

  function submitFacebook() {
    setLoadingFacebook(true);
    setTimeout(() => {
      setLoadingFacebook(false);
      navigation.navigate("Scanner");
    }, 2000);
  }

  function submitGoogle() {
    setLoadingGoogle(true);
    setTimeout(() => {
      setLoadingGoogle(false);
      navigation.navigate("Scanner");
    }, 2000);
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
      {!keyboardShown && (
        <Sky>
          <LogoImage source={logo} resizeMode="contain" />
          <MarketImage source={market} resizeMode="contain" />
        </Sky>
      )}
      <Ground
        behavior={Platform.OS === "ios" ? "padding" : "height"}
        keyboardShown={keyboardShown}
      >
        <Input
          value={phone}
          label="Digite o seu e-mail ou celular"
          onChangeText={(value) => maskPhone(value)}
          style={{ width: "100%" }}
          keyboardType="numeric"
        />
        <GradientButton
          onPress={submitCellphone}
          color1={colors.white}
          color2={colors.white}
          textColor={colors.forestBlues}
          style={{ marginTop: 20 }}
          loading={loading}
        >
          Entrar
        </GradientButton>
        <Divider>
          <DividerText>ou, entrar com</DividerText>
        </Divider>
        <SocialRow>
          <Button
            icon={<AntDesign name="facebook-square" size={24} color={colors.forestBlues} />}
            onPress={submitFacebook}
            loading={loadingFacebook}
          >
            Facebook
          </Button>
          <Spacing />
          <Button
            icon={<AntDesign name="chrome" size={24} color={colors.forestBlues} />}
            onPress={submitGoogle}
            loading={loadingGoogle}
            disable
          >
            Google
          </Button>
        </SocialRow>
      </Ground>
    </Page>
  );
}

export default Login;
