import styled from "styled-components/native/dist/styled-components.native.esm";
import { Dimensions } from "react-native";
import { colors } from "../../../styles/styleGuide";
import { MainTextTitle, Title } from "../../../styles/common.styles";

const smallDevice = Dimensions.get("window").width < 380;

export const SignupCellphoneImage = styled.Image`
  height: 25%;
  margin-top: 30px;
`;

export const FakeInput = styled.View``;

export const InputText = styled.TextInput`
  color: ${colors.secondary};
  margin: 0;
  width: 260px;
  height: ${smallDevice ? 40 : 50}px;
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

export const TermsButton = styled.TouchableOpacity`
  background-color: transparent;
  border: none;
  margin-bottom: 24px;
`;

export const ButtonText = styled.Text`
  font-weight: bold;
  text-align: center;
  color: ${colors.tertiary};
  font-size: 14px;
`;

export const CloseButton = styled.TouchableOpacity`
  position: absolute;
  top: 15px;
  right: 15px;
  z-index: 11;
`;
export const TokenInputRow = styled.View`
  flex-direction: row;
  width: 100%;
  align-items: center;
  justify-content: center;
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
