import styled from "styled-components/native";
import { Dimensions, Platform } from "react-native";
import Colors from "../../../constants/Colors";
import { MainTextTitle } from "../../../styles/common.styles";

const smallDevice = Dimensions.get("window").width < 380;

export const LimitSetterContainer = styled.View`
  flex: 1;
  align-items: center;
  justify-content: space-between;
  background-color: ${Colors.secondary};
  position: relative;
  padding-top: 50px;
  padding-bottom: 20px;
  ${({ keyboardShown }) =>
    keyboardShown &&
    `
    justify-content: flex-start;
    padding-top: 10px;
  `}
`;

export const ImageRow = styled.View`
  flex-direction: row;
  height: 50%;
  align-items: center;
  justify-content: space-evenly;
  width: 100%;
`;

export const WalletImage = styled.Image`
  height: 100%;
  width: 50%;
`;
export const DialogBox = styled.Text`
  flex-direction: column;
  align-items: flex-start;
  justify-content: flex-start;
  font-size: 18px;
  width: 85%;
  color: white;
`;

export const LimitRow = styled.View`
  flex-direction: row;
  align-items: center;
  justify-content: space-evenly;
  width: 100%;
  ${({ keyboardShown }) =>
    keyboardShown &&
    `
    margin-bottom: 16px;
  `}
`;

export const LimitText = styled.Text`
  color: white;
  font-size: ${smallDevice ? 14 : 18}px;
`;

export const InputContainer = styled.View`
  flex-direction: row;
  align-items: center;
`;

export const LimitInput = styled.TextInput`
  border-bottom-width: 2px;
  border-color: ${Colors.primary};
  width: 100px;
  text-align: center;
  font-size: ${smallDevice ? 18 : 22}px;
  color: white;
`;

export const ButtonContainer = styled.View`
  width: 100%;
  flex-direction: row;
  align-items: center;
  justify-content: space-evenly;
`;

export const LimitButton = styled.TouchableOpacity`
  width: 120px;
  height: 40px;
  border-radius: 10px;
  background-color: ${Colors.primary};
  justify-content: center;
  align-items: center;
`;

export const ButtonText = styled(MainTextTitle)`
  color: ${Colors.secondary};
`;
