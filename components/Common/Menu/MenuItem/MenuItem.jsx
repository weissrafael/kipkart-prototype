import React from "react";
import { useNavigation } from "@react-navigation/native";
import {
  OptionButton,
  Name,
  OptionImage,
  DualContainer,
  DualButton,
} from "./MenuItem.styles";

const MenuItem = ({ name, onPress, image, index, user }) => {
  const lastButton = index === 3;
  const navigation = useNavigation();
  const selectMarketButton = index === 2;
  if (lastButton && !user) {
    return (
      <DualContainer>
        <DualButton
          style={{ marginBottom: 16 }}
          onPress={() => navigation.navigate("Login")}
        >
          <Name lastButton>{name}</Name>
        </DualButton>
        <DualButton onPress={() => navigation.navigate("Signup")}>
          <Name lastButton>Cadastrar</Name>
        </DualButton>
      </DualContainer>
    );
  }
  return (
    <OptionButton
      index
      selectMarketButton={selectMarketButton}
      onPress={onPress}
    >
      <OptionImage source={image} resizeMode="contain" />
      <Name>{name}</Name>
    </OptionButton>
  );
};

export default MenuItem;
