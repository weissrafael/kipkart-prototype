import styled, { css } from "styled-components/native";
import FontSizes from "../../../constants/FontSizes";
import { colors } from "../../../styles/styleGuide";

export const ButtonContainer = styled.TouchableOpacity`
  border-radius: 10px;
  min-height: 50px;
  background-color: ${(props) => props.color || colors.white};
  justify-content: center;
  align-items: center;
  position: relative;
  flex-direction: row;
  padding: 0 16px;
  width: 100%;
  flex: 1;
`;

export const ButtonText = styled.Text`
  ${({ textSize, textColor }) => css`
    font-family: "montserrat-bold";
    font-size: ${textSize || FontSizes.text}px;
    color: ${textColor || colors.forestBlues};
  `}
`;
