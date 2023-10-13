import React from "react";
import {
  AddCartButton,
  ProductImage,
  ProductName,
  ProductPrice,
  Row,
} from "./ProductRow.styles";
import { Entypo } from "@expo/vector-icons";
import { colors } from "../../../styles/styleGuide";

function ProductRow({ product }) {
  const { name, price, imageUrl } = product;
  return (
    <Row>
      <ProductImage source={{ uri: imageUrl }} resizeMode={"contain"} />
      <ProductName>{name}</ProductName>
      <ProductPrice>R${price}</ProductPrice>
      {/*<AddCartButton>*/}
      {/*  <Entypo name="plus" size={32} color={colors.primary} />*/}
      {/*</AddCartButton>*/}
    </Row>
  );
}

export default ProductRow;
