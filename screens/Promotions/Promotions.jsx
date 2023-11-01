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
const salamiImage = require("../../assets/categories/frios.png");
const dairyImage = require("../../assets/categories/daity.png");

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
  const [categories, setCategories] = React.useState([
    {
      id: 1,
      expanded: true,
      title: "Café da Manhã",
      bgColor: colors.mandarinRed,
      promotions: breakfastPromotions,
      image: breakfastImage,
    },
    {
      id: 2,
      expanded: false,
      title: "Churrasco",
      bgColor: colors.jalapenoRed,
      promotions: breakfastPromotions,
      image: barbecueImage,
    },
    {
      id: 3,
      expanded: false,
      title: "Limpeza",
      bgColor: colors.waterfall,
      promotions: breakfastPromotions,
      image: cleaningImage,
    },
    {
      id: 4,
      expanded: false,
      title: "Frios",
      bgColor: colors.goodSamaritan,
      promotions: breakfastPromotions,
      image: salamiImage,
    },
    {
      id: 5,
      expanded: false,
      title: "Latícinios",
      bgColor: colors.dupain,
      promotions: breakfastPromotions,
      image: dairyImage,
    },
  ]);

  function toggleCategory(id) {
    const newCategories = categories.map((category) => {
      if (category.id === id) {
        category.expanded = !category.expanded;
        setSelectedBGColor(category.bgColor);
      }
      else {
        category.expanded = false;
      }
      return category;
    });
    setCategories(newCategories);
  }

  return (
    <Screen>
      <PromotionHeader bgColor={selectedBGColor}>
        <CameraSpacing bgColor={selectedBGColor} />
        <Title>Promoções</Title>
        <Spacing />
      </PromotionHeader>
      <PromotionList>
        {categories.map((category) => (
          <PromotionCard
            key={category.id}
            title={category.title}
            image={category.image}
            bgColor={category.bgColor}
            promotions={category.promotions}
            expanded={category.expanded}
            onClick={() => toggleCategory(category.id)}
          />
        ))}
        <Spacing />
      </PromotionList>
      <Footer />
    </Screen>
  );
}

export default Promotions;
