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
import useKeyboardIsOpen from "../../../../hooks/useKeyboardIsOpen";

function InputModal({
  isOpen,
  children,
  text,
  inputValue,
  setInputValue,
  barcodeError,
}) {
  return (
    <FullScreenModal height={`${300}px`} backdrop modalVisible={isOpen}>
      <ModalContainer onPress={() => Keyboard.dismiss()}>
        <Container>
          <ModalText>{text}</ModalText>
          <InputContainer>
            <Input
              textColor={colors.secondary}
              value={inputValue}
              label="Código de barras"
              inputBgColor="white"
              labelColor={colors.secondary}
              onChangeText={(val) => setInputValue(val.replace(/[^0-9]/g, ""))}
              style={{ marginTop: 16 }}
              keyboardType="numeric"
              maxLength={20}
            />
            <ErrorSmallMessage>{barcodeError}</ErrorSmallMessage>
          </InputContainer>

          <ButtonsRow style={{ marginTop: 32 }}>{children}</ButtonsRow>
        </Container>
      </ModalContainer>
    </FullScreenModal>
  );
}

export default InputModal;
