import React, { useEffect } from "react";

import { Alert } from "react-native";
import { useSelector } from "react-redux";
import {
  LimitRow,
  LimitSetterContainer,
  LimitInput,
  ButtonContainer,
  ButtonText,
  LimitButton,
  InputContainer,
  WalletImage,
  ImageRow,
} from "./LimitSetter.styles";
import { BoldTitle, LargeTitle, Title } from "../../../styles/common.styles";
import useKeyboardIsOpen from "../../../hooks/useKeyboardIsOpen";

const wallet = require("../../../assets/wallet.png");

const LimitSetter = ({
  setLimit,
  setActiveTab,
  setInputValue,
  setLimitPageFocused,
  limit,
}) => {
  const keyboardShown = useKeyboardIsOpen();
  let value;
  const reduxLimit = useSelector((state) => state.cartReducer.limit);
  if (reduxLimit === 99999) {
    value = "";
  } else {
    value = reduxLimit;
  }

  useEffect(() => {
    setLimitPageFocused(true);
    return () => {
      setLimitPageFocused(false);
    };
  });

  function resetLimitValue() {
    setLimit(99999);
    setInputValue("");
  }

  function inputChangeHandler(text) {
    if (text === "") {
      setLimit("");
      return;
    }
    const parsedInput = parseInt(text, 10);
    if (Number.isNaN(parsedInput) || parsedInput <= 0) {
      Alert.alert("Número Invalido!");
    } else {
      setLimit(text.replace(/[^0-9]/g, ""));
    }
  }
  function confirmLimitHandler() {
    setActiveTab("list");
  }
  return (
    <LimitSetterContainer keyboardShown={keyboardShown}>
      {!keyboardShown && (
        <ImageRow>
          <WalletImage source={wallet} resizeMode="contain" />
          <BoldTitle
            style={{ width: "40%", textAlign: "left", lineHeight: 30 }}
          >
            Escolha aqui quanto quer gastar.
          </BoldTitle>
        </ImageRow>
      )}
      <LimitRow keyboardShown={keyboardShown}>
        <Title>Limite máximo de gastos:</Title>
        <InputContainer>
          <LargeTitle>R$</LargeTitle>
          <LimitInput
            value={value.toString()}
            keyboardType="number-pad"
            onChangeText={inputChangeHandler}
          />
        </InputContainer>
      </LimitRow>
      <ButtonContainer>
        <LimitButton>
          <ButtonText
            onPress={() =>
              limit === 99999 ? setActiveTab("list") : resetLimitValue()
            }
          >
            {limit === 99999 ? "Voltar" : "Zerar limite"}
          </ButtonText>
        </LimitButton>
        <LimitButton onPress={() => confirmLimitHandler()}>
          <ButtonText>Confirmar</ButtonText>
        </LimitButton>
      </ButtonContainer>
    </LimitSetterContainer>
  );
};

export default LimitSetter;
