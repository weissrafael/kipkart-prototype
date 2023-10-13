import styled from "styled-components/native";
import { Dimensions } from "react-native";
import { colors } from "../../../styles/styleGuide";

const { height, width } = Dimensions.get("window");
const smallDevice = Dimensions.get("window").width < 380;

export const MenuContainer = styled.View`
  background-color: ${colors.secondary};
  flex-direction: row;
  justify-content: center;
  align-items: center;
  flex-wrap: wrap;
  flex: 1;
  padding: 8px 8px 60px 8px;
`;

export const Backdrop = styled.TouchableOpacity`
  position: absolute;
  width: ${width}px;
  height: ${height / 2}px;
  background-color: rgba(0, 0, 0, 0.8);
  z-index: 1;
`;

export const UserContainer = styled.View`
  flex: 1;
  padding: 0 12px;
  position: absolute;
  bottom: ${smallDevice ? 10 : 20}px;
  height: 30px;
  border-radius: 11px;
  background-color: rgba(255, 255, 255, 0.1);
  justify-content: center;
  align-items: center;
`;
