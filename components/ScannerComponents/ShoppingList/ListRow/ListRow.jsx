import React, { useCallback } from "react";
import { ActivityIndicator } from "react-native";
import Animated, {
  useSharedValue,
  useAnimatedStyle,
  withTiming,
  Easing,
} from "react-native-reanimated";

import { Entypo, FontAwesome } from "@expo/vector-icons";
import {
  ItemName,
  ItemNameBox,
  ItemQuantity,
  ItemTotalValue,
  MinusButton,
  PlusButton,
  ProductImage,
  ImageContainer,
  LoadingContainer,
  Cont,
  IconButton,
  ItemQuantityBox,
  ThrashButton,
} from "./ListRow.styles";
import { colors } from "../../../../styles/styleGuide";

const textStyles = {
  position: "relative",
  alignItems: "center",
  justifyContent: "center",
  width: 40,
  height: 60,
};

const quantityStyles = {
  alignItems: "center",
  flexDirection: "column-reverse",
  justifyContent: "center",
  paddingRight: 4,
  marginLeft: 10,
  textAlign: "center",
  position: "relative",
  zIndex: 11,
  height: "100%",
};

const nameStyles = {
  flex: 2,
  overflow: "hidden",
  position: "relative",
  zIndex: -1,
};

const ListRow = ({
                   item,
                   addItem,
                   removeItem,
                   index,
                 }) => {
  const itemHeight = useSharedValue(86);
  const containerOpacity = useSharedValue(1);
  const translateX = useSharedValue(0);
  const minusTextTop = useSharedValue(48);
  const minusTextRight = useSharedValue(35);
  const plusTextTop = useSharedValue(-46);
  const plusTextRight = useSharedValue(-35);
  const quantityWidth = useSharedValue(100);
  const nameHeight = useSharedValue(40);
  const timingConfig = {
    duration: 500,
    easing: Easing.bezier(0.25, 0.1, 0.25, 1),
  };

  const animatedContainerStyles = useAnimatedStyle(() => ({
    height: itemHeight.value,
    transform: [
      {
        translateX: translateX.value,
      },
    ],
    opacity: containerOpacity.value,
  }));

  const animatedMinusTextStyles = useAnimatedStyle(() => ({
    top: minusTextTop.value,
    right: minusTextRight.value,
  }));

  const animatedPlusTextStyles = useAnimatedStyle(() => ({
    top: plusTextTop.value,
    right: plusTextRight.value,
  }));

  const animatedQuantityStyles = useAnimatedStyle(() => ({
    width: quantityWidth.value,
  }));

  const animatedNameStyle = useAnimatedStyle(() => ({
    height: nameHeight.value,
  }));

  const expandItemRow = useCallback(() => {
    if (translateX.value > -70) {
      if (itemHeight.value === 86) {
        itemHeight.value = withTiming(168, timingConfig);
        minusTextTop.value = withTiming(0, timingConfig);
        minusTextRight.value = withTiming(0, timingConfig);
        plusTextTop.value = withTiming(0, timingConfig);
        plusTextRight.value = withTiming(0, timingConfig);
        quantityWidth.value = withTiming(60, timingConfig);
        nameHeight.value = withTiming(168, timingConfig);
      } else {
        nameHeight.value = withTiming(40, timingConfig);
        itemHeight.value = withTiming(86, timingConfig);
        minusTextTop.value = withTiming(48, timingConfig);
        minusTextRight.value = withTiming(35, timingConfig);
        plusTextTop.value = withTiming(-46, timingConfig);
        plusTextRight.value = withTiming(-35, timingConfig);
        quantityWidth.value = withTiming(86, timingConfig);
      }
    }
  }, [
    itemHeight.value,
    minusTextRight.value,
    minusTextTop.value,
    nameHeight.value,
    plusTextRight.value,
    plusTextTop.value,
    quantityWidth.value,
    timingConfig,
    translateX.value,
  ]);

  const containerStyles = {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
    height: 86,
    paddingHorizontal: 8,
    marginHorizontal: 16,
    overflow: "hidden",
    backgroundColor: colors.white,
    marginBottom: 8,
    borderRadius: 10,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 4 },
    shadowOpacity: 0.3,
    shadowRadius: 5,
    elevation: 5,
  };

  if (item) {
    const { price, quantity, imageUrl, name, weight } = item;
    const total = price * quantity;
    return (
      <>
        <Animated.View style={[containerStyles, animatedContainerStyles]}>
          <ImageContainer>
            <ProductImage resizeMode="contain" source={{ uri: imageUrl }} />
          </ImageContainer>
          <Animated.View style={[quantityStyles, animatedQuantityStyles]}>
            <Animated.View style={[textStyles, animatedMinusTextStyles]}>
              <MinusButton
                onPress={() => {
                  if (quantity <= 1) {
                    containerOpacity.value = withTiming(0, timingConfig);
                    itemHeight.value = withTiming(0, timingConfig);
                    setTimeout(() => removeItem(item), 500);
                  } else {
                    removeItem(item);
                  }
                }}
              >
                <Entypo name="minus" size={32} color={colors.jalapenoRed} />
              </MinusButton>
            </Animated.View>
            <ItemQuantity>{quantity}</ItemQuantity>
            <Animated.View style={[textStyles, animatedPlusTextStyles]}>
              <PlusButton onPress={() => addItem(item)}>
                <Entypo name="plus" size={32} color={colors.yueGuangBlue} />
              </PlusButton>
            </Animated.View>
          </Animated.View>
          <Animated.View style={[nameStyles, animatedNameStyle]}>
            <ItemNameBox onPress={expandItemRow}>
              <ItemName style={{ flexShrink: 1 }}>
                {name}
              </ItemName>
            </ItemNameBox>
          </Animated.View>
          <ItemTotalValue>
            R$ {total.toFixed(2)}
          </ItemTotalValue>
        </Animated.View>
        {/* </PanGestureHandler> */}
      </>
    );
  }
  return (
    <LoadingContainer>
      <ActivityIndicator size="large" color={colors.primary} />
    </LoadingContainer>
  );
};

export default ListRow;
