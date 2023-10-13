import styled from "styled-components/native";
import { Dimensions } from "react-native";
import { colors } from "../../styles/styleGuide";
import Colors from "../../constants/Colors";
import FontSizes from "../../constants/FontSizes";
import { BoldTitle, LargeTitle, Title } from "../../styles/common.styles";

const { height, width } = Dimensions.get("window");

export const Screen = styled.View`
  flex: 1;
  background-color: ${({ activeTab }) =>
    activeTab === "menu" ? colors.secondary : "white"};
`;

export const LogoutContainer = styled.View`
  flex: 1;
  width: 100%;
`;

export const AlertContainer = styled.View`
  flex: 1;
  width: 100%;
  padding: 16px 24px;
  align-items: center;
  justify-content: space-between;
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

export const ModalImage = styled.Image`
  height: 80%;
`;

export const AlertImage = styled.Image`
  height: 60%;
`;

export const LogoutTitle = styled(BoldTitle)`
  margin-top: 16px;
  font-size: 18px;
  color: ${colors.secondary};
`;

export const Button = styled.TouchableOpacity`
  flex: 1;
  align-items: center;
  justify-content: center;
`;

export const AlertTitle = styled(BoldTitle)`
  color: ${colors.secondary};
  margin-top: 32px;
`;

export const TotalText = styled(BoldTitle)`
  color: ${colors.tertiary};
  font-size: 24px;
`;

export const ButtonsRow = styled.View`
  flex-direction: row;
  width: 100%;
  align-items: center;
  justify-content: center;
`;

export const Page = styled.ScrollView`
  width: 100%;
`;

export const ListContainer = styled.View`
  flex: 1;
  position: relative;
  flex-direction: column;
  min-height: 405px;
  width: 100%;
`;

export const TabsContainer = styled.View`
  min-height: ${height / 2}px;
  background: ${Colors.secondary};
  ${({ scanner }) => !scanner && "flex: 1"};
`;

export const TabsRow = styled.View`
  flex-direction: row;
  justify-content: flex-end;
  align-items: flex-end;
  position: absolute;
  top: -60px;
  width: 100%;
  background-color: transparent;
`;

export const ContentContainer = styled.View`
  display: flex;
  height: 100%;
  width: 100%;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`;

export const Tab = styled.TouchableOpacity`
  height: 60px;
  display: flex;
  justify-content: center;
  min-width: 100px;
  align-items: center;
  border-top-left-radius: 20px;
`;

export const TabText = styled.Text`
  font-size: 16px;
`;

export const LimitTab = styled(Tab)`
  ${({ isActive }) => `
    background-color: ${isActive ? colors.green : colors.green2};
    position: relative;
    left: 20px;
    padding-right: 20px;
  `}
`;

export const LimitText = styled(TabText)`
  ${({ isActive }) => `
    color: ${colors.white};
  `}
`;

export const TotalValueText = styled(TabText)`
  ${({ isActive }) => `
    color: ${isActive ? colors.green2 : "grey"};
  `}
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
