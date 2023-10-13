import React from "react";
import { EmptyContainer, EmptyImage, EmptyTitle } from "./EmptyHistory.styles";

const empty = require("../../../assets/empty.gif");

const EmptyHistory = () => (
  <EmptyContainer>
    <EmptyImage source={empty} resizeMode="contain" />
    <EmptyTitle>
      Aqui você consegue ver todas as suas compras anteriores! Finalize uma
      compra para começar seu histórico.
    </EmptyTitle>
  </EmptyContainer>
);

export default EmptyHistory;
