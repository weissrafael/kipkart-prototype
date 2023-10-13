import React from "react";

import { Num, NumContainer } from "./Numpad.styles";

function Numpad({ num, onNumberPress, index }) {
  return (
    <NumContainer onPress={() => onNumberPress(index, num)}>
      <Num>{num}</Num>
    </NumContainer>
  );
}

export default Numpad;
