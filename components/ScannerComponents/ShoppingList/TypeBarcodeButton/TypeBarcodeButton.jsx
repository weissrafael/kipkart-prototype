import React from "react";
import { AntDesign } from "@expo/vector-icons";
import {TypeBarcodeContainer, TypeBarcodeFullContainer} from "./TypeBarcodeButton.styles";
import {IndicatorText, IndicatorTextSmall} from "../ShoppingList.styles";
import {Spacing} from "../../../Common/Menu/Menu.styles";

const TypeBarcodeButton = ({ setModalVisible, showFullButton }) => {
  if (showFullButton) {
    return (
      <TypeBarcodeFullContainer onPress={() => setModalVisible(true)}>
        <Spacing />
        <AntDesign name="barcode" size={34} color="white" />
        <Spacing />
        <Spacing />
        <IndicatorText>
          ou aperte aqui para digitar o cód. de barras
        </IndicatorText>
        <Spacing />
      </TypeBarcodeFullContainer>
    )
  }

  return (
    <TypeBarcodeContainer onPress={() => setModalVisible(true)}>
      <AntDesign name="barcode" size={32} color="white" />
      <Spacing />
      <IndicatorTextSmall>
        digitar cód. de barras
      </IndicatorTextSmall>
    </TypeBarcodeContainer>
  );
}

export default TypeBarcodeButton;
