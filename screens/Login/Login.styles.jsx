import styled from "styled-components/native";
import { StatusBar, Platform, Dimensions } from "react-native";
import Colors from "../../constants/Colors";
import { colors } from "../../styles/styleGuide";
import Button from "../../components/Common/Button/Button";

const smallDevice = Dimensions.get("window").width < 380;

export const Page = styled.View`
  flex: 1;
  background-color: ${Colors.primary};
  align-items: center;
  justify-content: space-between;
`;

export const Sky = styled.View`
  background-color: ${Colors.primary};
  flex: 1;
  align-items: center;
  padding-top: 50px;
`;

export const WomanImage = styled.Image`
  position: absolute;
  height: ${smallDevice ? 40 : 50}px;
  bottom: 0;
  left: ${smallDevice ? 80 : 50}px; ;
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

export const ForgotButtonText = styled.Text`
  font-family: "montserrat-regular";
  font-size: 13px;
  color: ${colors.white};
  text-align: right;
`;

export const LogoImage = styled.Image`
  height: ${smallDevice ? 65 : 90}px;
  margin-top: auto;
  margin-bottom: auto;
`;

export const MarketImage = styled.Image`
  height: ${smallDevice ? 85 : 100}px;
  position: absolute;
  bottom: -3px;
`;

export const Ground = styled.KeyboardAvoidingView`
  background-color: ${Colors.secondary};
  width: 100%;
  padding: 36px 20px 20px 20px;
  align-items: center;
  ${smallDevice ? "flex: 0.6" : null}
  justify-content: space-evenly;
  ${({ keyboardShown }) =>
    keyboardShown &&
    `
      flex: 1;
      justify-content: center;
  `}
`;

export const StyledButton = styled(Button)`
  width: 100%;
  background-color: ${colors.primary};
`;

export const ForgotButton = styled.TouchableOpacity`
  background-color: transparent;
  height: 40px;
  justify-content: center;
`;

export const ButtonsRow = styled.View`
  display: flex;
  flex-direction: row;
  align-items: center;
  width: 100%;
  margin-bottom: 26px;
  justify-content: center;
  ${({ keyboardShown }) =>
    keyboardShown &&
    smallDevice &&
    `
    display: none;
  `}
`;

export const ForgotRow = styled.View`
  flex-direction: row;
  align-items: center;
  justify-content: flex-start;
  width: 100%;
  padding-bottom: ${({ keyboardShown }) =>
    keyboardShown && Platform.OS === "ios"
      ? 0
      : smallDevice && keyboardShown
      ? 80
      : 0}px;
`;

export const InputContainer = styled.View`
  width: 100%;
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
