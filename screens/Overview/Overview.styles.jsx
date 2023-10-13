import styled from "styled-components/native";
import { Dimensions } from "react-native";
import Colors from "../../constants/Colors";
import { MainTextTitle } from "../../styles/common.styles";
import { colors } from "../../styles/styleGuide";

const { height } = Dimensions.get("window");
const smallDevice = Dimensions.get("window").width < 380;

export const Page = styled.View`
  flex: 1;
`;

export const GreenBlock = styled.View`
  flex: 1;
  align-items: center;
  background-color: ${Colors.primary};
  position: relative;
  z-index: 11;
`;

export const TitleContainer = styled.View`
  width: 100%;
  height: ${height / 4}px;
  justify-content: center;
  align-items: center;
`;

export const PageTitle = styled(MainTextTitle)`
  font-size: ${smallDevice ? 28 : 34}px;
  color: ${Colors.secondary};
`;

export const CircleContainer = styled.View`
  width: ${smallDevice ? 200 : 250}px;
  height: ${smallDevice ? 200 : 250}px;
  background-color: white;
  border-radius: 150px;
  justify-content: center;
  align-items: center;
  position: absolute;
  bottom: -30px;
`;

export const TotalTitle = styled(MainTextTitle)`
  font-size: ${smallDevice ? 28 : 36}px;
  color: ${Colors.fifth};
`;

export const DarkGreenBlock = styled.View`
  flex: 1;
  background-color: ${Colors.secondary};
`;

export const InfoContainer = styled.View`
  flex-direction: row;
  width: 100%;
  align-items: center;
  justify-content: space-between;
  height: 100px;
  padding: 20px;
`;

export const InfoText = styled(MainTextTitle)`
  color: white;
`;

export const ButtonsContainer = styled.View`
  width: 100%;
  justify-content: space-evenly;
  flex-direction: row;
  height: 80px;
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
  color: ${colors.primary};
  text-align: center;
  margin-bottom: 16px;
  margin-top: 32px;
`;

export const MainButton = styled.TouchableOpacity`
  width: 150px;
  background-color: white;
  justify-content: center;
  align-items: center;
  height: 40px;
  border-radius: 100px;
`;

export const ButtonText = styled(MainTextTitle)`
  color: ${Colors.quaternary};
`;

export const FinishButton = styled(MainButton)`
  background-color: transparent;
  border: 2px solid white;
`;

export const FinishButtonText = styled(MainTextTitle)`
  color: white;
`;
