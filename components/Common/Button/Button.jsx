import React from "react";
import { ButtonContainer, ButtonText } from "./Button.styles";
import {Spacing} from "../Menu/Menu.styles";
import {ActivityContainer} from "../GradientButton/GradientButton.styles";
import {ActivityIndicator} from "react-native";
import {colors} from "../../../styles/styleGuide";

function Button({
  textColor,
  color,
  onPress,
  children,
  styles,
  textSize,
  icon,
  loading,
}) {
  if (loading) {
    return (
      <ActivityContainer style={{flex: 1, paddingHorizontal: 16}}>
        <ActivityIndicator
          size="large"
          color={colors.white}
        />
      </ActivityContainer>
    );
  }
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
