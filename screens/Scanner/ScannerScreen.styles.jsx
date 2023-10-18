import styled from "styled-components/native";
import { Dimensions } from "react-native";
import { colors } from "../../styles/styleGuide";
import Colors from "../../constants/Colors";
import FontSizes from "../../constants/FontSizes";
import { BoldTitle, LargeTitle, Title } from "../../styles/common.styles";

const { height, width } = Dimensions.get("window");

export const Screen = styled.View`
  flex: 1;
`;

export const Container = styled.View`
  width: 100%;
  align-items: center;
  flex: 1;
`;

export const ImageContainer = styled.View`
  width: 100%;
  align-items: center;
  flex: 2;
`;

export const LogoutTitle = styled(BoldTitle)`
  margin-top: 16px;
  font-size: 18px;
  color: ${colors.secondary};
`;

export const AlertTitle = styled(BoldTitle)`
  color: ${colors.secondary};
  margin-top: 32px;
`;

export const TotalText = styled(BoldTitle)`
  color: ${colors.tertiary};
  font-size: 24px;
`;

export const Page = styled.ScrollView`
  width: 100%;
`;

export const TabsContainer = styled.View`
  min-height: ${height / 2}px;
  background: ${Colors.secondary};
  ${({ scanner }) => !scanner && "flex: 1"};
`;

export const ContentContainer = styled.View`
  display: flex;
  height: 100%;
  width: 100%;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`;

export const FinishContainer = styled.View`
  position: absolute;
  bottom: 0;
  left: 0;
  width: 100%;
  justify-content: center;
  align-items: center;
  padding: 10px;
  background-color: transparent;
  ${({ keyboardShown }) =>
    keyboardShown &&
    `
    left: -99999px
  `}
`;

export const FinishButton = styled.TouchableOpacity`
  width: 150px;
  height: 50px;
  background-color: ${({ isActive }) => (isActive ? Colors.tertiary : "grey")};
  border-radius: 10px;
  justify-content: center;
  align-items: center;
`;

export const ButtonText = styled.Text`
  font-family: "montserrat-bold";
  font-size: ${FontSizes.title}px;
  color: white;
`;
