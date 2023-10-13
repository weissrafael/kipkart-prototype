import styled from "styled-components/native";
import FontSizes from "../../../constants/FontSizes";
import { colors } from "../../../styles/styleGuide";

export const ButtonContainer = styled.TouchableOpacity`
  border-radius: 10px;
  padding: 12px 16px;
  min-height: 50px;
  min-width: 150px;
  background-color: ${(props) => props.color || colors.tertiary};
  justify-content: center;
  align-items: center;
  margin-bottom: 10px;
`;

export const ButtonText = styled.Text`
  font-family: "montserrat-bold";
  font-size: ${FontSizes.text}px;
  color: ${(props) => props.textColor || colors.white};
`;
