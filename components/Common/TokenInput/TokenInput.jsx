import React from "react";
import TokenCharInput from "./TokenCharInput/TokenCharInput";
import { TokenInputRow } from "./TokenInput.styles";

function TokenInput({ tokenArr }) {
  return (
    <TokenInputRow>
      <TokenCharInput>{tokenArr[0] || ""}</TokenCharInput>
      <TokenCharInput>{tokenArr[1] || ""}</TokenCharInput>
      <TokenCharInput>{tokenArr[2] || ""}</TokenCharInput>
      <TokenCharInput>{tokenArr[3] || ""}</TokenCharInput>
    </TokenInputRow>
  );
}

export default TokenInput;
