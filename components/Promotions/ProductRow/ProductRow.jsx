import React from "react";
import {
  ProductImage,
  ProductName,
  ProductPrice,
  Row,
} from "./ProductRow.styles";

function ProductRow({ product }) {
  const { name, price, imageUrl } = product;
  return (
    <Row>
      <ProductImage source={{ uri: imageUrl }} resizeMode={"contain"} />
      <ProductName>{name}</ProductName>
      <ProductPrice>R${price}</ProductPrice>
    </Row>
  );
}

export default ProductRow;
