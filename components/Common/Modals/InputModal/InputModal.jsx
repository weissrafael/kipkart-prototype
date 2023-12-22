import React from "react";

import { Keyboard } from "react-native";
import FullScreenModal from "../../FullScreenModal/FullScreenModal";
import {
  ButtonsRow,
  Container,
  InputContainer,
  ModalContainer,
  ModalText,
} from "./InputModal.styles";
import Input from "../../Input/Input";
import { colors } from "../../../../styles/styleGuide";
import { ErrorSmallMessage } from "../../../../styles/common.styles";

function InputModal({
  isOpen,
  children,
  text,
  inputValue,
  setInputValue,
  barcodeError,
}) {
  return (
    <FullScreenModal height={`${246}px`} backdrop modalVisible={isOpen}>
      <ModalContainer onPress={() => Keyboard.dismiss()}>
        <Container>
          <ModalText>{text}</ModalText>
          <InputContainer>
            <Input
              textColor={colors.white}
              value={inputValue}
              label="Código de barras"
              inputBgColor={colors.forestBlues}
              labelColor={colors.white}
              onChangeText={(val) => setInputValue(val.replace(/[^0-9]/g, ""))}
              keyboardType="numeric"
              maxLength={20}
            />
            <ErrorSmallMessage>{barcodeError}</ErrorSmallMessage>
          </InputContainer>

          <ButtonsRow>{children}</ButtonsRow>
        </Container>
      </ModalContainer>
    </FullScreenModal>
  );
}

export default InputModal;
