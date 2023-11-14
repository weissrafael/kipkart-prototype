import React, { useEffect, useRef, useState } from "react";
import { Animated } from "react-native";
import { Easing } from "react-native-web";

const clouds = require("../../../assets/clouds.png");

function MovingClouds({ size, duration }) {
  const [value, setValue] = useState(1);

  const cloudsValue = useRef(new Animated.Value(0)).current;

  useEffect(() => {
    playAnimation();
    const timer = setTimeout(
      () => setValue(value === 1 ? 0 : 1),
      duration + 50 || 20050
    );
    return () => {
      clearTimeout(timer);
    };
  }, [value]);

  function playAnimation() {
    Animated.timing(cloudsValue, {
      toValue: value,
      duration: duration || 20000,
      useNativeDriver: false,
      easing: Easing.linear,
    }).start();
  }

  const styles = {
    width: size || 180,
    position: "absolute",
    top: -80,
    zIndex: -1,
    left: cloudsValue.interpolate({
      inputRange: [0, 1],
      outputRange: [-200, 800],
    }),
  };

  return <Animated.Image source={clouds} style={styles} resizeMode="contain" />;
}

export default MovingClouds;
