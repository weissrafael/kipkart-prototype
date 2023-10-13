import React from "react";
import { Modal } from "react-native";
import {
  ModalContainer,
  Title,
  Content,
  ContentContainer,
  SubTitle,
} from "./ErrorModal.styles";
import MainButton from "../MainButton/MainButton";
import Colors from "../../../constants/Colors";

function ErrorModal({ isOpen, closeModal, title, text }) {
  return (
    <ModalContainer>
      <Modal animationType="fade" transparent visible={isOpen}>
        <ContentContainer>
          <Content>
            <Title>{title}</Title>
            <SubTitle>{text}</SubTitle>
            <MainButton
              textColor="white"
              color={Colors.fifth}
              onPress={closeModal}
            >
              OK
            </MainButton>
          </Content>
        </ContentContainer>
      </Modal>
    </ModalContainer>
  );
}
export default ErrorModal;
