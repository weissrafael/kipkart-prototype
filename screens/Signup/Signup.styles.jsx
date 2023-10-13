import styled from "styled-components/native";
import { Dimensions } from "react-native";
import { colors } from "../../styles/styleGuide";
import { MainTextTitle, Title } from "../../styles/common.styles";

const smallDevice = Dimensions.get("window").width < 380;

export const Page = styled.View`
  flex: 1;
  background-color: ${colors.white};
  position: relative;
`;

export const TermsButton = styled.TouchableOpacity`
  background-color: transparent;
  border: none;
`;

export const DarkLayer = styled.View`
  width: 100%;
  height: 100%;
  background-color: transparent;
  position: absolute;
  z-index: 9;
  justify-content: ${({ center }) => (center ? "center" : "space-between")};
  padding: 32px ${smallDevice ? 16 : 32}px;
  align-items: center;
`;

export const ImageContainer = styled.View`
  flex: 1;
`;

export const SignupCellphoneImage = styled.Image`
  height: 25%;
  margin-top: 30px;
`;

export const FakeInput = styled.View``;

export const InputText = styled.TextInput`
  color: ${colors.secondary};
  margin: 0;
  width: 260px;
  height: ${smallDevice ? 40 : 60}px;
  border: 1px solid ${colors.charcoalGray};
  border-radius: 11px;
  font-family: "montserrat-bold";
  font-size: ${smallDevice ? 17 : 20}px;
  text-align: center;
`;

export const Subtitle = styled(MainTextTitle)`
  text-align: center;
  font-size: 14px;
  width: 260px;
`;

export const ButtonsRow = styled.View`
  flex-direction: row;
  align-items: center;
  justify-content: center;
  width: 100%;
  margin-bottom: 24px;
`;

export const ButtonText = styled.Text`
  font-weight: bold;
  text-align: center;
  color: ${colors.tertiary};
  font-size: ${smallDevice ? 14 : 16}px;
`;

export const InputContainer = styled.View`
  width: 100%;
`;

export const NumpadContainer = styled.View`
  flex-direction: row;
  flex-wrap: wrap;
  width: 350px;
  max-height: ${smallDevice ? 220 : 230}px;
  align-items: center;
  justify-content: center;
  position: relative;
`;

export const SuccessContainer = styled.View`
  width: 100%;
  height: 100%;
  align-items: center;
  justify-content: space-evenly;
  position: relative;
`;

export const SuccessTitle = styled(Title)`
  color: ${colors.secondary};
  font-size: 22px;
`;

export const SuccessImage = styled.Image`
  width: 80%;
  height: 50%;
`;

export const KipLogo = styled.Image`
  width: 200px;
  height: 80px;
`;
