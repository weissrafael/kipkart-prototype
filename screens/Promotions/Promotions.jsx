import React, {useRef} from "react";
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
    name: "Nescau 2.0 400g",
    price: 6.58,
    barcode: 7891000061190
  },
  {
    name: "Requeijão Itambé Tradicional 400g",
    price: 7.99,
    barcode: 7896051164661
  },
  {
    name: "Pão de Forma Wickbold 500g",
    price: 4.5,
    barcode: 7896066301778
  },
];

const barbecuePromotions = [
  {
    name: "Molho Inglês Worcestershire",
    price: 12.19,
    barcode: 7896007811403
  },
  {
    name: "Sal Grosso Kitano 1Kg",
    price: 10.99,
    barcode: 7891095010158
  },
  {
    name: "Coração de Frango Congelado Perdigão",
    price: 23.5,
    barcode: 7891515977412
  },
];

const cleaningPromotions = [
  {
    name: "Detergente Líquido Maçã Ypê",
    price: 12.19,
    barcode: 7896098900215
  },
  {
    name: "Lã de Aço Bombril 60g",
    price: 10.99,
    barcode: 7891022101119
  },
  {
    name: "Limpador Veja Multiuso Tradicional 500ml",
    price: 23.5,
    barcode: 7891035800214
  },
];

const cheesePromotions = [
  {
    name: "Mortadela Sadia 1kg",
    price: 12.19,
    barcode: 7893000340107
  },
  {
    name: "Azeitona Verde Vidro Rivoli",
    price: 10.99,
    barcode: 7896183001025
  },
  {
    name: "Salame tipo Italiano Sadia",
    price: 23.5,
    barcode: 7893000290259
  },
];

const dairyPromotions = [
  {
    name: "Iogurte Integral Morango Danone",
    price: 12.19,
    barcode: 7891025101376
  },
  {
    name: "Requeijão Itambé Tradicional 400g",
    price: 7.99,
    barcode: 7896051164661
  },
  {
    name: "Creme de Leite Piracanjuba",
    price: 23.5,
    barcode: 7898215151784
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
      promotions: barbecuePromotions,
      image: barbecueImage,
    },
    {
      id: 3,
      expanded: false,
      title: "Limpeza",
      bgColor: colors.waterfall,
      promotions: cleaningPromotions,
      image: cleaningImage,
    },
    {
      id: 4,
      expanded: false,
      title: "Frios",
      bgColor: colors.goodSamaritan,
      promotions: cheesePromotions,
      image: salamiImage,
    },
    {
      id: 5,
      expanded: false,
      title: "Latícinios",
      bgColor: colors.dupain,
      promotions: dairyPromotions,
      image: dairyImage,
    },
  ]);
  const scrollViewRef = useRef(null);

  function toggleCategory(id) {
    const newCategories = categories.map((category) => {
      if (category.id === id) {
        if (category.expanded) {
          setSelectedBGColor(colors.mandarinRed);
          if (scrollViewRef.current) {
            scrollViewRef.current.scrollTo({ y: 0, animated: true });
          }
        }
        else {
          setSelectedBGColor(category.bgColor);
          if (scrollViewRef.current) {
            scrollViewRef.current.scrollTo({ y: (id * 120) - 136 + (id * 16), animated: true });
          }
        }
        category.expanded = !category.expanded;
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
        <Title>Promoções</Title>
      </PromotionHeader>
      <PromotionList ref={scrollViewRef}>
        {categories.map((category) => {
          const itemRef = React.createRef();
          return (
            <PromotionCard
              key={category.id}
              title={category.title}
              image={category.image}
              bgColor={category.bgColor}
              promotions={category.promotions}
              expanded={category.expanded}
              onClick={() => toggleCategory(category.id)}
              ref={itemRef}
            />
          )
        })}
        <Spacing />
        <Spacing />
        <Spacing />
        <Spacing />
        <Spacing />
        <Spacing />
        <Spacing />
      </PromotionList>
      <Footer bgColor={selectedBGColor} />
    </Screen>
  );
}

export default Promotions;
