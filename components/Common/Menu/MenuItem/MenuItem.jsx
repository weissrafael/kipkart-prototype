import React from "react";
import { useNavigation } from "@react-navigation/native";
import {
  OptionButton,
  Name,
  OptionImage,
  DualContainer,
  DualButton,
} from "./MenuItem.styles";

const MenuItem = ({ name, onPress, image }) => {
  return (
    <OptionButton
      index
      onPress={onPress}
    >
      <OptionImage source={image} resizeMode="contain" />
      <Name>{name}</Name>
    </OptionButton>
  );
};

export default MenuItem;
