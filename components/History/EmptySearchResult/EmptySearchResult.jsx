import React from "react";
import {
  EmptyContainer,
  EmptyImage,
  EmptyTitle,
} from "./EmptySearchResult.styles";

const empty = require("../../../assets/emptyresult.gif");

const EmptySearchResult = () => (
  <EmptyContainer>
    <EmptyImage source={empty} resizeMode="contain" />
    <EmptyTitle>
      Oops, não encontrei o que voce estava procurando, tente pesquisar por
      nome, valor ou quantidade de itens!
    </EmptyTitle>
  </EmptyContainer>
);

export default EmptySearchResult;
