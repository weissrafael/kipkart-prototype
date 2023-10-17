import styled from "styled-components/native";
import { Dimensions } from "react-native";
import { colors } from "../../../../styles/styleGuide";

const smallDevice = Dimensions.get("window").width < 380;

export const OptionButton = styled.TouchableOpacity`
  border-radius: 10px;
  padding: 16px 0;
  flex: 1;
  height: ${smallDevice ? (Dimensions.get("window").height / 2) * 0.35 : 140}px;
  max-height: 140px;
  background-color: ${colors.primary};
  align-items: center;
  justify-content: space-between;
`;

export const Name = styled.Text`
  font-family: "montserrat-bold";
  font-size: ${smallDevice ? 12 : 16}px;
  text-align: center;
  margin-top: ${({ lastButton }) => (lastButton ? 0 : 16)}px;
  color: ${(props) => props.textColor || colors.secondary};
`;

export const OptionImage = styled.Image`
  width: 70%;
  height: 70%;
`;

export const DualContainer = styled.View`
  border-radius: 10px;
  width: 40%;
  height: ${smallDevice ? (Dimensions.get("window").height / 2) * 0.35 : 140}px;
  max-height: 140px;
  align-items: center;
  justify-content: space-between;
  margin: 8px;
  position: relative;
  z-index: 11;
`;

export const DualButton = styled(OptionButton)`
  flex: 1;
  width: 100%;
  margin: 0;
  align-items: center;
  justify-content: center;
  padding: 0;
`;
