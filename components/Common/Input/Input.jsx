import React, { useState, useEffect, useRef } from "react";
import { Animated } from "react-native";
import { TextInputStyle, ContainerTextInputStyle } from "./Input.style";
import { colors, text } from "../../../styles/styleGuide";

const Input = ({
  size,
  placeholder,
  placeholderTextColor,
  children,
  style,
  label,
  error,
  inputBgColor,
  labelColor,
  textColor,
  success,
  value,
  onChangeText,
  secureTextEntry,
  showPassword,
  className,
  width,
  ...props
}) => {
  const [isFocused, setIsFocused] = useState(false);
  // const [secureText, setSecureText] = useState(true);
  const _animetedIsFocused = useRef(
    new Animated.Value(value === "" ? 0 : 1)
  ).current;

  useEffect(() => {
    Animated.timing(_animetedIsFocused, {
      toValue: isFocused || value !== "" ? 1 : 0,
      duration: 200,
      useNativeDriver: false,
    }).start();
  }, [isFocused]);

  const styles = {
    labelStyle: {
      fontSize: value.length <= 0 && !isFocused ? 16 : 13,
      position: "absolute",
      left: 8,
      color: isFocused
        ? labelColor || colors.primary
        : error
        ? colors.red
        : success
        ? colors.green
        : labelColor || colors.primary,
      top: _animetedIsFocused.interpolate({
        inputRange: [0, 1],
        outputRange: [13.5, -10],
      }),
      backgroundColor: inputBgColor || colors.secondary,
      paddingLeft: 8,
      paddingRight: 8,
    },
  };

  return (
    <ContainerTextInputStyle
      style={style}
      isFocused={isFocused}
      error={error}
      success={success}
      className={className}
      width={width}
    >
      <Animated.Text style={styles.labelStyle}>{label}</Animated.Text>

      {/* {showPassword && ( */}
      {/*  <ButtonEye onPress={() => setSecureText(!secureText)}> */}
      {/*    <EyeIcon name={!secureText ? 'eye_off' : 'eye'} /> */}
      {/*  </ButtonEye> */}
      {/* )} */}
      <TextInputStyle
        size={size}
        secureTextEntry={secureTextEntry}
        textColor={textColor}
        placeholder={placeholder}
        placeholderTextColor={placeholderTextColor}
        onFocus={() => setIsFocused(true)}
        onBlur={() => setIsFocused(false)}
        value={value}
        onChangeText={onChangeText}
        // secureTextEntry={secureTextEntry && secureText}
        {...props}
      >
        {children}
      </TextInputStyle>
    </ContainerTextInputStyle>
  );
};

export default Input;
