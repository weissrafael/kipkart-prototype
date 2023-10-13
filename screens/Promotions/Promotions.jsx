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

  // GET PRODUCTS FROM API

  const DATA = [
    {
      title: "Super Promoções",
      title1: "As Baratíssimas",
      data: [
        // INSERT API PRODUCTS IN DATA
        { key: "spacer-begin" },
        {
          barcode: "2030564000018",
          name: "Pizza Bazinho Fresca Un Boa Sem Formol",
          price: 17.98,
          weight: false,
          imageUrl:
            "https://imagensemoldes.com.br/wp-content/uploads/2020/04/Pizza-PNG.png",
        },
        {
          barcode: "2030564000018",
          name: "Pizza Bazinho",
          price: 17.98,
          weight: false,
          imageUrl:
            "https://imagensemoldes.com.br/wp-content/uploads/2020/04/Pizza-PNG.png",
        },
        {
          barcode: "2030564000018",
          name: "Pizza Bazinho",
          price: 17.98,
          weight: false,
          imageUrl:
            "https://imagensemoldes.com.br/wp-content/uploads/2020/04/Pizza-PNG.png",
        },
        {
          barcode: "2030564000018",
          name: "Pizza Bazinho",
          price: 17.98,
          weight: false,
          imageUrl:
            "https://imagensemoldes.com.br/wp-content/uploads/2020/04/Pizza-PNG.png",
        },
        {
          barcode: "2030564000018",
          name: "Pizza Bazinho",
          price: 17.98,
          weight: false,
          imageUrl:
            "https://imagensemoldes.com.br/wp-content/uploads/2020/04/Pizza-PNG.png",
        },
        {
          barcode: "2030564000018",
          name: "Pizza Bazinho",
          price: 17.98,
          weight: false,
          imageUrl:
            "https://imagensemoldes.com.br/wp-content/uploads/2020/04/Pizza-PNG.png",
        },
        {
          barcode: "2030564000018",
          name: "Pizza Bazinho",
          price: 17.98,
          weight: false,
          imageUrl:
            "https://imagensemoldes.com.br/wp-content/uploads/2020/04/Pizza-PNG.png",
        },
        {
          barcode: "2030564000018",
          name: "Pizza Bazinho",
          price: 17.98,
          weight: false,
          imageUrl:
            "https://imagensemoldes.com.br/wp-content/uploads/2020/04/Pizza-PNG.png",
        },
        {
          barcode: "2030564000018",
          name: "Pizza Bazinho",
          price: 17.98,
          weight: false,
          imageUrl:
            "https://imagensemoldes.com.br/wp-content/uploads/2020/04/Pizza-PNG.png",
        },
        { name: "arroz integral" },
        { name: "arroz integral" },
        { name: "arroz integral" },
        { name: "arroz integral" },
        { name: "arroz integral" },
        { name: "arroz integral" },
        { name: "arroz integral" },
        { name: "arroz integral" },
        { name: "arroz integral" },
        { name: "arroz integral" },
        { name: "arroz integral" },
        { name: "arroz integral" },
        { name: "arroz integral" },
        { name: "arroz integral" },
        { name: "arroz integral" },
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
      <Page
        contentContainerStyle={{
          width: "100%",
          paddingTop: Platform.OS === "android" ? StatusBar.currentHeight : 0,
        }}
        renderSectionHeader={({ section }) => (
          <>
            <Header>
              <BackButton
                styles={{
                  borderRadius: 30,
                  position: "absolute",
                  left: 10,
                }}
                backIcon
                onPress={backNavigation}
              />
              <Title>{section.title}</Title>
            </Header>

            <Title>{section.title1}</Title>
            <CarrouselContainer>
              <AnimatedFlatList
                horizontal
                contentContainerStyle={{ alignItems: "center" }}
                snapToInterval={ITEM_SIZE_WITH_MARGIN}
                snapToAlignment={"start"}
                data={section.data}
                scrollEventThrottle={16}
                onScroll={scrollHandler}
                decelerationRate={0}
                showsHorizontalScrollIndicator={false}
                renderItem={renderItem}
                keyExtractor={keyExtractor}
              />
            </CarrouselContainer>
          </>
        )}
        sections={DATA}
        stickySectionHeadersEnabled={false}
        renderItem={({ item }) => {
          if (!item.name) return null;
          return <ProductRow product={item} />;
        }}
      />
    </Screen>
  );
}

export default Promotions;
