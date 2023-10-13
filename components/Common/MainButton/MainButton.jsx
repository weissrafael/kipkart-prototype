import React from "react";
import { ButtonContainer, ButtonText } from "./MainButton.styles";

const MainButton = ({ textColor, color, onPress, children, className }) => (
  <ButtonContainer color={color} onPress={onPress} className={className}>
    <ButtonText textColor={textColor}>{children}</ButtonText>
  </ButtonContainer>
);

export default MainButton;
