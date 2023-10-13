import React from "react";
import { Animated } from "react-native";

const Indicator = ({ scale, opacity, backgroundColor }) => (
  <Animated.View
    style={{
      height: 12,
      width: 12,
      opacity,
      borderRadius: 6,
      backgroundColor,
      marginLeft: 16,
      transform: [
        {
          scale,
        },
      ],
    }}
  />
);

export default Indicator;
