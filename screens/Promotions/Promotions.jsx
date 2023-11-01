import React from "react";
import {
  PromotionHeader,
  PromotionList,
  Screen, Title,
} from "./Promotions.styles";
import Footer from "../../components/Common/Footer/Footer";
import PromotionCard from "../../components/Promotions/PromotionCard/PromotionCard";
import { CameraSpacing } from "../History/History.styles";
import { Spacing } from "../../components/Common/Menu/Menu.styles";
import { colors } from "../../styles/styleGuide";

const breakfastImage = require("../../assets/categories/breakfast.png");
const barbecueImage = require("../../assets/categories/churrasco.png");
const cleaningImage = require("../../assets/categories/cleaning.png");
const frios = require("../../assets/categories/frios.png");
const dairy = require("../../assets/categories/daity.png");

function Promotions() {
  return (
    <Screen>
      <PromotionHeader>
        <CameraSpacing />
        <Title>Promoções</Title>
        <Spacing />
      </PromotionHeader>
      <PromotionList>
        <PromotionCard
          title={"Café da Manhã "}
          details={"details"}
          image={breakfastImage}
          bgColor={colors.mandarinRed}
        />
        <PromotionCard
          title={"Churrasco"}
          details={"details"}
          image={barbecueImage}
          bgColor={colors.jalapenoRed}
        />
        <PromotionCard
          title={"Limpeza"}
          details={"details"}
          image={cleaningImage}
          bgColor={colors.waterfall}
        />
        <PromotionCard
          title={"Frios"}
          details={"details"}
          image={frios}
          bgColor={colors.goodSamaritan}
        />
        <PromotionCard
          title={"Laticínios"}
          details={"details"}
          image={dairy}
          bgColor={colors.dupain}
        />
      </PromotionList>
      <Footer />
    </Screen>
  );
}

export default Promotions;
