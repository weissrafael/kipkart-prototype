import React from "react";
import { LinearGradient } from "expo-linear-gradient";
import { ActivityIndicator } from "react-native";
import {
  ActivityContainer,
  ButtonContainer,
  ButtonText,
  ButtonView,
} from "./GradientButton.styles";
import Colors from "../../../constants/Colors";
import Icon from "../Icon/Icon";
import { colors } from "../../../styles/styleGuide";

function GradientButton({
  textColor,
  bgColor,
  onPress,
  children,
  styles,
  textSize,
  icon,
  buttonWidth,
  style,
  loading,
  color1,
  color2,
  loadingColor,
}) {
  if (loading) {
    return (
      <ActivityContainer style={{ ...style }}>
        <ActivityIndicator
          size="large"
          color={loadingColor || Colors.primary}
        />
      </ActivityContainer>
    );
  }

  return (
    <ButtonContainer
      style={{ ...style }}
      buttonWidth={buttonWidth}
      onPress={onPress}
    >
      <LinearGradient
        start={[0, 0.5]}
        end={[1, 0.5]}
        colors={[color1 || colors.white, color2 || colors.spray]}
        style={{ borderRadius: 11 }}
      >
        <ButtonView icon={icon} bgColor={bgColor} style={styles}>
          <ButtonText textSize={textSize} textColor={textColor}>
            {children}
          </ButtonText>
          {icon && (
            <Icon name={icon} size={32} color={textColor || colors.white} />
          )}
        </ButtonView>
      </LinearGradient>
    </ButtonContainer>
  );
}

export default GradientButton;
