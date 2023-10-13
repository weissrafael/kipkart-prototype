import React from "react";

import {
  ButtonsRow,
  Container,
  ImageContainer,
  LogoutContainer,
  LogoutTitle,
  ModalImage,
} from "./AlertModal.styles";
import FullScreenModal from "../../FullScreenModal/FullScreenModal";
import BackButton from "../../BackButton/BackButton";

function AlertModal({ isOpen, modalImage, textComponent, children, setModal }) {
  return (
    <FullScreenModal
      styles={{ maxHeight: 500 }}
      height="60%"
      backdrop
      modalVisible={isOpen}
    >
      <LogoutContainer>
        <Container>
          <BackButton
            styles={{ left: 20, top: 20 }}
            onPress={() => setModal(false)}
          />
          <ImageContainer>
            <ModalImage source={modalImage} resizeMode="contain" />
            {textComponent}
          </ImageContainer>
          {children && (
            <ButtonsRow style={{ marginTop: 32 }}>{children}</ButtonsRow>
          )}
        </Container>
      </LogoutContainer>
    </FullScreenModal>
  );
}

export default AlertModal;
