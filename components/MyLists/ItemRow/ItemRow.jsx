import React from "react";
import {
  ImageContainer,
  ItemIcon,
  ItemName,
  ItemNameBox,
  ItemQuantity,
  ItemQuantityBox,
  ItemTotalValue,
  ListRowContainer,
  MinusButton,
  MinusText,
  PlusButton,
  PlusText,
  ReadOnlyItemName,
  ReadOnlyNameBox,
} from "./ItemRow.styles";

function ItemRow({
  item,
  addItem,
  removeItem,
  barcode,
  selectItem,
  notOnList,
  readOnly,
}) {
  if (item) {
    const total = notOnList ? item.price : item.price * item.quantity;
    return (
      <ListRowContainer readOnly={readOnly} notOnList={notOnList}>
        <ImageContainer>
          <ItemIcon
            resizeMode="contain"
            source={{
              uri: `https://kipkart-images-db.s3.sa-east-1.amazonaws.com/${barcode}.png`,
            }}
          />
        </ImageContainer>
        <ItemQuantityBox readOnly={readOnly} notOnList={notOnList}>
          {removeItem &&
            !readOnly(
              <MinusButton>
                <MinusText onPress={() => removeItem(barcode)}>-</MinusText>
              </MinusButton>
            )}
          {!notOnList && <ItemQuantity>{item.quantity}</ItemQuantity>}

          {!readOnly && (
            <PlusButton>
              <PlusText notOnList={notOnList} onPress={() => addItem(item)}>
                +
              </PlusText>
            </PlusButton>
          )}
        </ItemQuantityBox>
        {readOnly ? (
          <ReadOnlyNameBox>
            <ReadOnlyItemName numberOfLines={1}>{item.name}</ReadOnlyItemName>
          </ReadOnlyNameBox>
        ) : (
          <ItemNameBox onPress={selectItem ? () => selectItem(item) : null}>
            <ItemName notOnList={notOnList} numberOfLines={1}>
              {item.name}
            </ItemName>
          </ItemNameBox>
        )}
        <ItemTotalValue notOnList={notOnList}>
          {total.toFixed(2)}
        </ItemTotalValue>
      </ListRowContainer>
    );
  }
}

export default ItemRow;
