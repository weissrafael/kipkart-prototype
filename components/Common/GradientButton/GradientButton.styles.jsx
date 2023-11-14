import styled from "styled-components/native";
import { Dimensions } from "react-native";
import { colors } from "../../../styles/styleGuide";

const smallDevice = Dimensions.get("window").width < 380;

export const ButtonContainer = styled.TouchableOpacity`
  width: ${({ buttonWidth }) => buttonWidth || "100%"};
`;

export const ActivityContainer = styled.View`
  height: ${smallDevice ? 40 : 50}px;
`;

export const ButtonView = styled.View`
  height: ${smallDevice ? 40 : 50}px;
  border-radius: 11px;
  background-color: ${({ bgColor }) => bgColor || "transparent"};
  margin: 2px;
  justify-content: ${(props) => (props.icon ? "space-between" : "center")};
  flex-direction: row;
  align-items: center;
  padding: 0 20px;
`;

export const ButtonText = styled.Text`
  font-family: "montserrat-bold";
  font-size: ${({ textSize }) => textSize || 16}px;
  color: ${({ textColor }) => textColor || colors.white};
  text-align: center;
`;

export const IconImage = styled.Image`
  width: 15%;
`;
