import React from "react";
import { TokenChar, TokenCharContainer } from "./TokenCharInput.styles";

function TokenCharInput({ children }) {
  return (
    <TokenCharContainer>
      <TokenChar>{children}</TokenChar>
    </TokenCharContainer>
  );
}

export default TokenCharInput;
