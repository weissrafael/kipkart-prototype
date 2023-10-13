import { Modal, Platform } from "react-native";

import React from "react";

import { CenterContent, ModalContent } from "./FullScreenModal.styles";

const FullScreenModal = ({
  children,
  modalVisible,
  setModalVisible,
  backdrop,
  styles,
  height,
  overFooter,
}) => (
  <Modal
    animationType="fade"
    transparent
    visible={modalVisible}
    onRequestClose={() => {
      setModalVisible(false);
    }}
  >
    {/*  */}
    <CenterContent
      behavior={Platform.OS === "ios" ? "padding" : "none"}
      backdrop={backdrop}
    >
      <ModalContent height={height} overFooter={overFooter} style={styles}>
        {children}
      </ModalContent>
    </CenterContent>
  </Modal>
);

export default FullScreenModal;
