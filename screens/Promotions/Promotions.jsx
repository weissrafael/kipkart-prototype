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

const breakfastPromotions = [
  {
    name: "Desodorante Rexona Invisible",
    price: 6.5,
    barcode: 7791293022635
  },
  {
    name: "SBP Multi inseticida",
    price: 12.5,
    barcode: 7891035617959
  },
  {
    name: "Coca-Cola lata 350ml",
    price: 4.5,
    barcode: 7894900010015
  },
];

function Promotions() {
  const [selectedBGColor, setSelectedBGColor] = React.useState(colors.mandarinRed);
  return (
    <Screen>
      <PromotionHeader bgColor={selectedBGColor}>
        <CameraSpacing bgColor={selectedBGColor} />
        <Title>Promoções</Title>
        <Spacing />
      </PromotionHeader>
      <PromotionList>
        <PromotionCard
          title={"Café da Manhã "}
          details={"details"}
          image={breakfastImage}
          bgColor={colors.mandarinRed}
          promotions={breakfastPromotions}
          onClick={() => setSelectedBGColor(colors.mandarinRed)}
        />
        <PromotionCard
          title={"Churrasco"}
          details={"details"}
          image={barbecueImage}
          bgColor={colors.jalapenoRed}
          promotions={breakfastPromotions}
          onClick={() => setSelectedBGColor(colors.jalapenoRed)}
        />
        <PromotionCard
          title={"Limpeza"}
          details={"details"}
          image={cleaningImage}
          bgColor={colors.waterfall}
          promotions={breakfastPromotions}
          onClick={() => setSelectedBGColor(colors.waterfall)}
        />
        <PromotionCard
          title={"Frios"}
          details={"details"}
          image={frios}
          bgColor={colors.goodSamaritan}
          promotions={breakfastPromotions}
          onClick={() => setSelectedBGColor(colors.goodSamaritan)}
        />
        <PromotionCard
          title={"Laticínios"}
          details={"details"}
          image={dairy}
          bgColor={colors.dupain}
          promotions={breakfastPromotions}
          onClick={() => setSelectedBGColor(colors.dupain)}
        />
      </PromotionList>
      <Footer />
    </Screen>
  );
}

export default Promotions;
