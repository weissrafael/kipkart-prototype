import styled from "styled-components/native";
import { Dimensions } from "react-native";
import FontSizes from "../constants/FontSizes";
import Colors from "../constants/Colors";
import { colors } from "./styleGuide";

const { width } = Dimensions.get("window");
const smallDevice = width <= 380;

export const MainTextTitle = styled.Text`
  font-family: "montserrat-regular";
  font-size: ${FontSizes.text}px;
`;

export const Title = styled.Text`
  font-family: "montserrat-regular";
  font-size: ${smallDevice ? 14 : 16}px;
  color: ${({ color }) => color || Colors.primary};
  text-align: center;
`;

export const LargeTitle = styled(Title)`
  font-size: ${smallDevice ? 16 : 18}px;
`;

export const BoldTitle = styled.Text`
  font-family: "montserrat-bold";
  font-size: ${({ fontSize }) => (fontSize || smallDevice ? 14 : 18)}px;
  color: ${({ color }) => color || Colors.primary};
  text-align: center;
  margin-bottom: 8px;
  margin-top: ${smallDevice ? 20 : 0}px;
`;

export const BoldTitleSMS = styled(BoldTitle)`
  margin-bottom: ${smallDevice ? 25 : 40}px;
  margin-top: auto;
`;

export const ErrorSubtitle = styled.Text`
  font-family: "montserrat-bold";
  font-size: 14px;
  color: ${({ color }) => color || Colors.primary};
  text-align: center;
  max-width: 300px;
`;

export const ErrorSmallMessage = styled.Text`
  font-size: 14px;
  color: ${({ color }) => color || colors.red};
  font-family: "montserrat-regular";
  margin: 5px 0 10px 10px;
`;

export const RegularText = styled.Text`
  font-family: "montserrat-regular";
  font-size: 14px;
  color: ${Colors.primary};
  text-align: center;
`;

export const BoldText = styled.Text`
  font-family: "montserrat-bold";
  font-size: 14px;
  color: ${Colors.primary};
  text-align: center;
`;

export const SmallText = styled.Text`
  font-family: "montserrat-regular";
  font-size: 12px;
  color: ${Colors.primary};
  text-align: center;
`;
