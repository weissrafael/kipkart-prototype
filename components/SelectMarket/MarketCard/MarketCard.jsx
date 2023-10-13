import React from "react";
import { LinearGradient } from "expo-linear-gradient";
import {
  MarketAdress,
  MarketCol,
  MarketLogo,
  MarketName,
  TextRow,
  TextWrapper,
} from "./MarketCard.styles";
import { colors } from "../../../styles/styleGuide";

const MarketCard = ({ market, onPress }) => (
  <MarketCol onPress={onPress}>
    <MarketLogo source={{ uri: market.frontImage }} resizeMode="cover" />
    <LinearGradient
      start={[0, 0.5]}
      end={[1, 0.5]}
      colors={[colors.primary, colors.blueGrotto]}
      style={{
        flex: 1,
        justifyContent: "center",
      }}
    >
      <TextWrapper>
        <TextRow>
          <MarketName>{market.name}</MarketName>
          <MarketAdress>{market.address}</MarketAdress>
        </TextRow>
      </TextWrapper>
    </LinearGradient>
  </MarketCol>
);

export default MarketCard;
