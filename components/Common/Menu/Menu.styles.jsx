import styled from "styled-components/native";
import { Dimensions } from "react-native";
import { colors } from "../../../styles/styleGuide";

const { height, width } = Dimensions.get("window");
const smallDevice = Dimensions.get("window").width < 380;

export const MenuContainer = styled.View`
  background-color: ${colors.secondary};
  flex-direction: column;
  justify-content: flex-start;
  align-items: center;
  flex-wrap: wrap;
  flex: 1;
  padding: 16px;
`;

export const ButtonsContainer = styled.View`
  flex-direction: row;
  background-color: ${colors.secondary};
  width: 100%;
  margin-bottom: 16px;
`;

export const Spacing = styled.View`
  width: 16px;
  height: 16px;
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
  background-color: ${colors.secondary};
  justify-content: center;
  align-items: flex-start;
  padding: 16px;
  width: 100%;
  border: 1px solid ${colors.white};
  border-radius: 10px;
`;
