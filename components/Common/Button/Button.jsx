import React from "react";
import { ButtonContainer, ButtonText } from "./Button.styles";
import {Spacing} from "../Menu/Menu.styles";

function Button({
  textColor,
  color,
  onPress,
  children,
  styles,
  textSize,
  icon
}) {
  return (
    <ButtonContainer color={color} onPress={onPress} style={styles}>
      {icon}
      {icon ? (<Spacing />) : null}
      <ButtonText textSize={textSize} textColor={textColor}>
        {children}
      </ButtonText>
    </ButtonContainer>
  );
}

export default Button;
