import React from "react";
import { ActivityIndicator } from "react-native";
import { ButtonContainer, ButtonText } from "./Button.styles";
import { ActivityContainer } from "../GradientButton/GradientButton.styles";
import Colors from "../../../constants/Colors";

function Button({
  textColor,
  color,
  onPress,
  children,
  styles,
  textSize,
  loading,
}) {
  if (loading) {
    return (
      <ActivityContainer>
        <ActivityIndicator size="large" color={Colors.primary} />
      </ActivityContainer>
    );
  }
  return (
    <ButtonContainer color={color} onPress={onPress} style={styles}>
      <ButtonText textSize={textSize} textColor={textColor}>
        {children}
      </ButtonText>
    </ButtonContainer>
  );
}

export default Button;
