import React from "react";
import { useDispatch } from "react-redux";
import { useNavigation } from "@react-navigation/native";
import {
  ButtonsCol,
  LogoContainer,
  SelectedMarketLogo,
  WelcomeContainer,
  WelcomeText,
  WifiContainer,
  WifiInfo,
  WineText,
} from "./InsideMarketPage.styles";
import { selectMarket } from "../../../store/actions/cart";
import GradientButton from "../../Common/GradientButton/GradientButton";
import { colors } from "../../../styles/styleGuide";

/* setInsideMarketError */
const InsideMarketPage = ({ market }) => {
  const dispatch = useDispatch();
  const navigation = useNavigation();
  const { logoImage, name, wifiName, wifiPassword } = market;
  return (
    <WelcomeContainer>
      <LogoContainer>
        <SelectedMarketLogo source={{ uri: logoImage }} resizeMode="contain" />
        <WelcomeText>
          Voce está no {"\n"}
          <WineText>{name}</WineText>
        </WelcomeText>
      </LogoContainer>
      <WifiContainer>
        <WifiInfo>{wifiName}</WifiInfo>
        <WifiInfo>{wifiPassword}</WifiInfo>
      </WifiContainer>
      <ButtonsCol>
        <GradientButton
          bgColor="white"
          color1={colors.primary}
          textColor={colors.secondary}
          onPress={() => {
            dispatch(selectMarket(market));
            navigation.navigate("Scanner");
          }}
          style={{ marginBottom: 32 }}
        >
          Confirmar
        </GradientButton>
      </ButtonsCol>
    </WelcomeContainer>
  );
};

export default InsideMarketPage;
