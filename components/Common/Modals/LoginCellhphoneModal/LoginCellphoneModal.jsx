import React from "react";
import FullScreenModal from "../../FullScreenModal/FullScreenModal";
import {
  LoginModalContainer,
  LoginContainer,
  ImageContainer,
  ButtonsRow,
} from "./LoginCellphoneModal.styles";
import Input from "../../Input/Input";
import { colors } from "../../../../styles/styleGuide";

function LoginCellphoneModal({ isOpen, modalImage, textComponent, children }) {
  return (
    <FullScreenModal
      styles={{ maxHeight: 500 }}
      height="60%"
      backdrop
      modalVisible={isOpen}
    >
      <LoginModalContainer>
        <LoginContainer
          style={{
            backgroundColor: "white",
            padding: 16,
            justifyContent: "space-between",
          }}
        >
          {/* <ImageContainer>
            <ModalImage source={modalImage} resizeMode="contain" />
            {textComponent}
             <LogoutTitle>Tem certeza que deseja sair?</LogoutTitle>
          </ImageContainer> */}
          <Input
            value={cellphone}
            label="Celular"
            labelColor={colors.secondary}
            inputBgColor="white"
            textColor={colors.secondary}
            onChangeText={handleChange("firstName")}
            style={{ borderColor: colors.secondary }}
          />
          <ButtonsRow style={{ marginTop: 32 }}>{children}</ButtonsRow>
        </LoginContainer>
      </LoginModalContainer>
    </FullScreenModal>
  );
}

export default LoginCellphoneModal;
