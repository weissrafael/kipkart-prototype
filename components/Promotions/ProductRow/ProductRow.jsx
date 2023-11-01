import React from "react";
import {
  ImageContainer,
  ProductImage,
  ProductName,
  ProductPrice,
  Row,
} from "./ProductRow.styles";

function ProductRow({ product, bgColor }) {
  const { name, price, barcode } = product;
  return (
    <Row bgColor={bgColor}>
      <ProductName numberOfLines={2} ellipsizeMode="tail">{name}</ProductName>
      <ProductPrice>R$ {price.toFixed(2)}</ProductPrice>
      <ImageContainer>
        <ProductImage
          source={{
            uri: `https://kipkart-images-db.s3.sa-east-1.amazonaws.com/${barcode}.png`,
          }}
          resizeMode="contain"
        />
      </ImageContainer>
    </Row>
  );
}

export default ProductRow;
