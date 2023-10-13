import React from "react";
import { Dimensions } from "react-native";
import Indicator from "../Indicator/Indicator";
import { Container } from "./Indicators.styles";
import { colors } from "../../../styles/styleGuide";

const { width } = Dimensions.get("window");

const bgs = [
  colors.tertiary,
  colors.primary,
  colors.tertiary,
  colors.tertiary,
  colors.tertiary,
  colors.primary,
];

const Indicators = ({ pages, scrollX }) => (
  <Container>
    {pages.map((item, i) => {
      const inputRange = [(i - 1) * width, i * width, (i + 1) * width];
      const scale = scrollX.interpolate({
        inputRange,
        outputRange: [0.8, 1.4, 0.8],
        extrapolate: "clamp",
      });
      const backgroundColor = scrollX.interpolate({
        inputRange: bgs.map((_, index) => index * width),
        outputRange: bgs.map((bg) => bg),
      });
      const opacity = scrollX.interpolate({
        inputRange,
        outputRange: [0.4, 1, 0.4],
        extrapolate: "clamp",
      });
      return (
        <Indicator
          backgroundColor={backgroundColor}
          key={item.key}
          opacity={opacity}
          scale={scale}
        />
      );
    })}
  </Container>
);

export default Indicators;
