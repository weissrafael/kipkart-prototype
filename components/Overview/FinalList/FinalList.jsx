import React from "react";
import { ListContainer } from "./FinalList.styles";
import ItemRow from "../../MyLists/ItemRow/ItemRow";

const FinalList = ({ list }) => {
  const listArray = Object.entries(list).reverse();
  return (
    <ListContainer>
      {listArray.length > 0 &&
        listArray.map(([barcode, item]) => (
          <ItemRow key={barcode} item={item} barcode={barcode} />
        ))}
    </ListContainer>
  );
};

export default FinalList;
