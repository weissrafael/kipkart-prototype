import React from "react";
import {
  ImageContainer,
  ItemIcon,
  ItemQuantity,
  ItemQuantityBox,
  ItemTotalValue,
  ListRowContainer,
  ReadOnlyItemName,
  ReadOnlyNameBox,
} from "./ItemRow.styles";

function ItemRow({
  item,
  barcode,
}) {
  if (item) {
    const total = item.price * item.quantity;
    return (
      <ListRowContainer>
        <ImageContainer>
          <ItemIcon
            resizeMode="contain"
            source={{
              uri: `https://kipkart-images-db.s3.sa-east-1.amazonaws.com/${barcode}.png`,
            }}
          />
        </ImageContainer>
        <ItemQuantityBox>
          <ItemQuantity>{item.quantity}</ItemQuantity>
        </ItemQuantityBox>
        <ReadOnlyNameBox>
            <ReadOnlyItemName numberOfLines={1}>{item.name}</ReadOnlyItemName>
          </ReadOnlyNameBox>
        <ItemTotalValue>
          {total.toFixed(2)}
        </ItemTotalValue>
      </ListRowContainer>
    );
  }
}

export default ItemRow;
