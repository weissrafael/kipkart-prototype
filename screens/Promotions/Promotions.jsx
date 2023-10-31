import React from "react";
import {
  PromotionHeader,
  PromotionList,
  Screen, Title,
} from "./Promotions.styles";
import Footer from "../../components/Common/Footer/Footer";
import PromotionCard from "../../components/Promotions/PromotionCard/PromotionCard";
import { CameraSpacing } from "../History/History.styles";
import {Spacing} from "../../components/Common/Menu/Menu.styles";

const breakfastImage = require("../../assets/categories/breakfast.png");
const barbecueImage = require("../../assets/categories/churrasco.png");

function Promotions() {
  return (
    <Screen>
      <PromotionHeader>
        <CameraSpacing />
        <Title>Promoções</Title>
        <Spacing />
      </PromotionHeader>
      <PromotionList>
        <PromotionCard title={"Café da Manhã "} details={"details"} image={breakfastImage} />
        <PromotionCard title={"Churrasco"} details={"details"} image={barbecueImage} />
      </PromotionList>
      <Footer />
    </Screen>
  );
}

export default Promotions;
