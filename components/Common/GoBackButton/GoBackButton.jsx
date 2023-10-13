import React from "react";
import { Button } from "./GoBackButton.styles";
import { colors } from "../../../styles/styleGuide";
import Icon from "../Icon/Icon";

function GoBackButton({ navigation, color }) {
  return (
    <Button onPress={() => navigation.pop(1)}>
      <Icon name="arrow-left" size={32} color={color || colors.strongBrown} />
    </Button>
  );
}

export default GoBackButton;
