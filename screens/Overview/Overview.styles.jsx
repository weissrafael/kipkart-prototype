import styled from "styled-components/native";
import { Dimensions } from "react-native";
import Colors from "../../constants/Colors";
import { MainTextTitle } from "../../styles/common.styles";
import { colors } from "../../styles/styleGuide";

const smallDevice = Dimensions.get("window").width < 380;

export const Page = styled.View`
  flex: 1;
`;

export const GreenBlock = styled.View`
  flex: 1;
  align-items: center;
  background-color: ${colors.forestBlues};
  position: relative;
  z-index: 11;
`;

export const TitleContainer = styled.View`
  width: 100%;
  margin-top: 58px;
  justify-content: center;
  align-items: center;
`;

export const PageTitle = styled.Text`
  font-family: "montserrat-bold";
  font-size: 24px;
  color: ${Colors.white};
`;

export const CircleContainer = styled.View`
  width: 220px;
  height: 220px;
  background-color: ${colors.goodSamaritan};
  border-radius: 150px;
  border: 12px solid ${colors.forestBlues};
  justify-content: center;
  align-items: center;
  position: absolute;
  bottom: -32px;
`;

export const TotalTitle = styled(MainTextTitle)`
  font-size: ${smallDevice ? 28 : 36}px;
  color: ${Colors.white};
`;

export const DarkGreenBlock = styled.View`
  flex: 2.1;
  background-color: ${colors.white};
`;

export const InfoContainer = styled.View`
  flex-direction: row;
  width: 100%;
  align-items: center;
  justify-content: space-between;
  padding: 0 16px;
  margin: 32px 0 24px 0;
`;

export const InfoText = styled(MainTextTitle)`
  color: ${colors.forestBlues};
  font-size: 14px;
`;

export const ButtonsContainer = styled.View`
  width: 100%;
  justify-content: space-between;
  flex-direction: row;
  padding: 0 16px 24px 16px;
  border-bottom-width: 1px;
  border-bottom-color: ${colors.forestBlues};
`;

export const PurchaseSuccessContainer = styled.View`
  flex: 1;
  align-items: center;
`;

export const PurchaseSuccessImage = styled.Image`
  height: 70%;
  margin-top: 32px;
`;

export const PurchaseSuccessText = styled.Text`
  font-family: "montserrat-bold";
  font-size: 16px;
  color: ${colors.secondary};
  text-align: center;
  margin-bottom: 16px;
  margin-top: 32px;
`;

export const MainButton = styled.TouchableOpacity`
  width: 150px;
  background-color: ${colors.forestBlues};
  justify-content: center;
  align-items: center;
  height: 40px;
  border-radius: 8px;
`;

export const ButtonText = styled(MainTextTitle)`
  color: ${colors.forestBlues};
`;

export const FinishButton = styled(MainButton)`
  background-color: transparent;
  border: 2px solid ${colors.forestBlues};
`;

export const FinishButtonText = styled(MainTextTitle)`
  color: ${colors.white};
  font-family: "montserrat-bold";
`;
