import styled from "styled-components/native";
import { Dimensions } from "react-native";
import Colors from "../../../constants/Colors";

const smallDevice = Dimensions.get("window").width < 380;

export const Screen = styled.View`
  flex: 1;
`;

export const ContentContainer = styled.View`
  width: 100%;
  align-items: center;
`;

export const ScannerContainer = styled.View`
  width: 100%;
  flex: 1;
  height: ${Dimensions.get("window").height / 2}px;
  justify-content: center;
  align-items: center;
`;

export const SquareRow = styled.View`
  flex-direction: row;
  flex: 1;
  justify-content: space-between;
`;

export const QrMark = styled.View`
  height: ${smallDevice ? 140 : 200}px;
  width: ${smallDevice ? 250 : 300}px;
  background-color: transparent;
`;

export const CameraContainer = styled.View`
  height: 100%;
  width: 100%;
  position: absolute;
  top: 0;
  left: 0;
  z-index: -11;
  ${({ hasPermission }) =>
    hasPermission &&
    `
      background-color: ${Colors.primary};
      align-items: center;
      padding: 20px;
      justify-content: center;
    `}
`;
