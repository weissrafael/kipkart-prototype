import React from "react";
import {
  ItemIcon,
  ItemQtyAndName,
  ItemTotalValue,
  ListRowContainer,
} from "./FinalListRow.styles";

const ListRow = ({ item, barcode }) => {
  if (item) {
    const total = item.price * item.quantity;
    return (
      <ListRowContainer>
        <ItemIcon resizeMode="contain" source={{ uri: item.imageUrl }} />
        <ItemQtyAndName numberOfLines={1}>
          {item.quantity}x {item.name}
        </ItemQtyAndName>
        <ItemTotalValue>{total.toFixed(2)}</ItemTotalValue>
      </ListRowContainer>
    );
  }
};

export default ListRow;
