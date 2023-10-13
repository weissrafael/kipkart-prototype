import styled, { css } from "styled-components/native";
import FontSizes from "../../../constants/FontSizes";
import { colors } from "../../../styles/styleGuide";

export const ButtonContainer = styled.TouchableOpacity`
  border-radius: 10px;
  min-height: 50px;
  background-color: ${(props) => props.color || colors.tertiary};
  justify-content: center;
  align-items: center;
  position: relative;
`;

export const ButtonText = styled.Text`
  ${({ textSize, textColor }) => css`
    font-family: "montserrat-bold";
    font-size: ${textSize || FontSizes.text}px;
    color: ${textColor || colors.white};
  `}
`;
