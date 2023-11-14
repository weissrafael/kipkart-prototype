import styled from "styled-components/native";
import { StatusBar, Platform, Dimensions } from "react-native";
import Colors from "../../constants/Colors";
import { colors } from "../../styles/styleGuide";

const smallDevice = Dimensions.get("window").width < 380;

export const Page = styled.View`
  flex: 1;
  background-color: ${Colors.primary};
  align-items: center;
  justify-content: space-between;
`;

export const Sky = styled.View`
  background-color: ${colors.white};
  flex: 1.4;
  align-items: center;
  padding-top: 120px;
  justify-content: space-between;
`;

export const Title = styled.Text`
  font-family: "montserrat-regular";
  font-size: 18px;
  color: ${colors.primary};
  margin-bottom: 16px;
  ${({ keyboardShown }) =>
    keyboardShown &&
    smallDevice &&
    `
    display: none;
  `}
  ${({ keyboardShown }) =>
    keyboardShown &&
    `
    margin-top: ${
      Platform.OS === "android" ? StatusBar.currentHeight - 30 : 0
    }px;
  `}
`;

export const LogoImage = styled.Image`
  height: ${smallDevice ? 65 : 90}px;
`;

export const MarketImage = styled.Image`
  height: 240px;
  position: relative;
  top: 2px;
`;

export const Ground = styled.KeyboardAvoidingView`
  background-color: ${colors.forestBlues};
  width: 100%;
  padding: 32px 16px 0 16px;
  align-items: center;
  flex: 1;
`;

export const ErrorSmallMessage = styled.Text`
  font-size: 13px;
  color: ${({ show }) => (!show ? "transparent" : colors.redClear)};
  font-family: "montserrat-regular";
  text-align: ${({ center }) => (center ? "center" : "left")};
`;

export const ErrorMessageWrapper = styled.View`
  height: 30px;
  flex-direction: row;
  margin: 5px;
  align-items: center;
  width: 100%;
  padding-left: 16px;
`;

export const DividerText = styled.Text`
  font-size: 16px;
  color: ${colors.white};
  font-family: "montserrat-bold";
  text-align: center;
  position: absolute;
  top: -13px;
  background-color: ${colors.forestBlues};
  padding: 0 16px;
`;

export const Divider = styled.View`
  width: 100%;
  border: 1px solid ${colors.white};
  align-items: center;
  justify-content: center;
  margin: 52px 0;
`;

export const SocialRow = styled.View`
  flex-direction: row;
`;
