import React from "react";
import { AntDesign } from "@expo/vector-icons";
import { TypeBarcodeContainer } from "./TypeBarcodeButton.styles";

const TypeBarcodeButton = ({ setModalVisible }) => (
  <TypeBarcodeContainer onPress={() => setModalVisible(true)}>
    <AntDesign name="barcode" size={24} color="white" />
  </TypeBarcodeContainer>
);

export default TypeBarcodeButton;
