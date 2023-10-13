import React from "react";
import { ListContainer } from "./FinalList.styles";
import ListRow from "./FinalListRow/FinalListRow";

const FinalList = ({ list }) => {
  const listArray = Object.entries(list).reverse();
  return (
    <ListContainer>
      {listArray.length > 0 &&
        listArray.map(([barcode, item]) => (
          <ListRow key={barcode} item={item} barcode={barcode} />
        ))}
    </ListContainer>
  );
};

export default FinalList;
