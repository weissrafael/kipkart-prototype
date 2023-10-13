import React from "react";
import { Modal, Text } from "react-native";
import {
  ModalContainer,
  ItemDetailsContainer,
  TransparentTop,
  Header,
  ItemImage,
  HeaderText,
  ItemName,
  ItemPrice,
} from "./ItemDetails.styles";

function ItemDetails({ isOpen, closeModal, item }) {
  const { name, price, imageUrl } = item;

  return (
    <ModalContainer>
      <Modal animationType="fade" transparent visible={isOpen}>
        <TransparentTop onPress={closeModal}>
          <Text />
        </TransparentTop>
        <ItemDetailsContainer>
          <Header>
            <ItemImage source={imageUrl} />
            <HeaderText>
              <ItemName>{name}</ItemName>
              <ItemPrice>
                {price && price.toFixed(2).replace(".", ",")}
              </ItemPrice>
            </HeaderText>
          </Header>
        </ItemDetailsContainer>
      </Modal>
    </ModalContainer>
  );
}
export default ItemDetails;
