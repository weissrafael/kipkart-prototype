import { ActivityIndicator } from "react-native";
import React from "react";

import Colors from "../../../constants/Colors";
import { LoadingContainer, Title } from "./Loading.styles";

const Loading = () => (
  <LoadingContainer>
    <ActivityIndicator size="large" color={Colors.primary} />
    <Title>Carregando</Title>
  </LoadingContainer>
);

export default Loading;
