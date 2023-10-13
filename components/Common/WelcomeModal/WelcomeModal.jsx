import React from "react";
import { Modal } from "react-native";
import {
  ModalContainer,
  Title,
  Content,
  ContentContainer,
  SubTitle,
} from "./WelcomeModal.styles";

function WelcomeModal({ isOpen, marketName, closeModal }) {
  return (
    <ModalContainer>
      <Modal animationType="fade" transparent visible={isOpen}>
        <ContentContainer>
          <Content>
            <Title>Liberado!</Title>
            <SubTitle>Bem vindo ao {marketName}!</SubTitle>
            {/*<MainButton textColor="white" color={Colors.fifth} onPress={closeModal}>OK</MainButton>*/}
          </Content>
        </ContentContainer>
      </Modal>
    </ModalContainer>
  );
}
export default WelcomeModal;
