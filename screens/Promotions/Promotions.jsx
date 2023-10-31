import React from "react";
import BackButton from "../../components/Common/BackButton/BackButton";
import {
  CarrouselContainer,
  Header,
  Page,
  Screen,
  Title,
} from "./Promotions.styles";
import { Dimensions, FlatList, Platform, StatusBar, View } from "react-native";
import ProductCard from "../../components/Promotions/ProductCard/ProductCard";
import Animated, {
  useAnimatedScrollHandler,
  useSharedValue,
} from "react-native-reanimated";
import ProductRow from "../../components/Promotions/ProductRow/ProductRow";
import Footer from "../../components/Common/Footer/Footer";
import PromotionCard from "../../components/Promotions/PromotionCard/PromotionCard";
import {CameraSpacing} from "../History/History.styles";

const ITEM_SIZE_WITH_MARGIN = 170;
const { width } = Dimensions.get("window");

function Promotions({ navigation }) {
  function backNavigation() {
    navigation.pop();
  }

  const AnimatedFlatList = Animated.createAnimatedComponent(FlatList);

  const position = useSharedValue(0);

  const scrollHandler = useAnimatedScrollHandler((e) => {
    position.value = e.contentOffset.x;
  });

  const DATA = [
    {
      title: "Super Promoções",
      data: [
        { key: "spacer-begin" },
        {
          barcode: "2030564000018",
          name: "Pizza Zona Sul",
          price: 17.98,
          weight: false,
          imageUrl:
            "https://imagensemoldes.com.br/wp-content/uploads/2020/04/Pizza-PNG.png",
        },
        {
          barcode: "2030564000018",
          name: "Pizza Zona Sul",
          price: 17.98,
          weight: false,
          imageUrl:
            "https://imagensemoldes.com.br/wp-content/uploads/2020/04/Pizza-PNG.png",
        },
        {
          barcode: "2030564000018",
          name: "Pizza Zona Sul",
          price: 17.98,
          weight: false,
          imageUrl:
            "https://imagensemoldes.com.br/wp-content/uploads/2020/04/Pizza-PNG.png",
        },
        {
          barcode: "2030564000018",
          name: "Pizza Zona Sul",
          price: 17.98,
          weight: false,
          imageUrl:
            "https://imagensemoldes.com.br/wp-content/uploads/2020/04/Pizza-PNG.png",
        },
        {
          barcode: "2030564000018",
          name: "Pizza Zona Sul",
          price: 17.98,
          weight: false,
          imageUrl:
            "https://imagensemoldes.com.br/wp-content/uploads/2020/04/Pizza-PNG.png",
        },
        {
          barcode: "2030564000018",
          name: "Pizza Zona Sul",
          price: 17.98,
          weight: false,
          imageUrl:
            "https://imagensemoldes.com.br/wp-content/uploads/2020/04/Pizza-PNG.png",
        },
        {
          barcode: "2030564000018",
          name: "Pizza Zona Sul",
          price: 17.98,
          weight: false,
          imageUrl:
            "https://imagensemoldes.com.br/wp-content/uploads/2020/04/Pizza-PNG.png",
        },
        {
          barcode: "2030564000018",
          name: "Pizza Zona Sul",
          price: 17.98,
          weight: false,
          imageUrl:
            "https://imagensemoldes.com.br/wp-content/uploads/2020/04/Pizza-PNG.png",
        },
        {
          barcode: "2030564000018",
          name: "Pizza Zona Sul",
          price: 17.98,
          weight: false,
          imageUrl:
            "https://imagensemoldes.com.br/wp-content/uploads/2020/04/Pizza-PNG.png",
        },
        { key: "spacer-end" },
      ],
    },
  ];
  function renderItem({ item, index }) {
    if (!item.name) {
      return <View style={{ width: (width - ITEM_SIZE_WITH_MARGIN) / 2 }} />;
    }
    return (
      <ProductCard
        imageUrl={item.imageUrl}
        name={item.name}
        price={item.price}
        index={index}
        position={position}
      />
    );
  }

  function keyExtractor({ barcode }) {
    return barcode;
  }

  return (
    <Screen>
      <CameraSpacing />
      <PromotionCard title={"testing"} details={"details"} />
      <Footer />
    </Screen>
  );
}

export default Promotions;
