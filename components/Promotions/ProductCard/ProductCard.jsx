import React from "react";
import {
  ProductImage,
  ProductName,
  ProductPrice,
} from "./ProductCard.styles";
import Animated, {
  interpolate,
  useAnimatedStyle,
} from "react-native-reanimated";
import { colors } from "../../../styles/styleGuide";

const ITEM_SIZE_WITH_MARGIN = 170;

function ProductCard({ imageUrl, name, price, position, index }) {
  const productAnimatedStyle = useAnimatedStyle(() => {
    const scale = interpolate(
      position.value,
      [
        (index - 2) * ITEM_SIZE_WITH_MARGIN,
        (index - 1) * ITEM_SIZE_WITH_MARGIN,
        (index + 1) * ITEM_SIZE_WITH_MARGIN,
      ],
      [0.9, 1, 0.8]
    );
    return {
      transform: [{ scale: scale }],
    };
  });

  const productStyle = {
    width: 150,
    height: 200,
    borderRadius: 10,
    justifyContent: "space-between",
    alignItems: "center",
    padding: 10,
    elevation: 10,
    shadowColor: "#000",
    shadowOffset: {
      width: 0,
      height: 5,
    },
    shadowOpacity: 0.34,
    shadowRadius: 6.27,
    marginHorizontal: 10,
    backgroundColor: colors.white,
  };

  return (
    <Animated.View style={[productStyle, productAnimatedStyle]}>
      <ProductImage source={{ uri: imageUrl }} resizeMode="contain" />
      <ProductName numberOfLines={2} ellipsizeMode="tail">
        {name}
      </ProductName>
      <ProductPrice>{price}</ProductPrice>
    </Animated.View>
  );
}

export default ProductCard;
