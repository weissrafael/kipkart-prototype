import React, { useEffect } from "react";
import Animated, {
  useSharedValue,
  withTiming,
  withRepeat,
  useAnimatedStyle,
} from "react-native-reanimated";
import { BannerImage } from "./AdBubble.styles";
import { colors } from "../../../styles/styleGuide";

const adImage = require("../../../assets/adsImages/ypePink.png");

function AdBubble() {
  const right = useSharedValue(40);
  const bottom = useSharedValue(-100);

  const config = {
    duration: 2000,
  };

  const style = useAnimatedStyle(() => ({
    bottom: bottom.value,
    right: right.value,
  }));

  useEffect(() => {
    right.value = withRepeat(withTiming(200, config), -1, true);
    const timer = setInterval(() => {
      bottom.value = withTiming(1000, { duration: 10000 });
    }, 22000);

    return () => clearInterval(timer);
  }, []);

  useEffect(() => {
    const timeout = setTimeout(() => {
      bottom.value = -100;
    }, 11000);

    return () => clearTimeout(timeout);
  }, [bottom.value]);

  const styles = {
    zIndex: 99,
    borderRadius: 100,
    height: 100,
    width: 100,
    backgroundColor: colors.primary,
    justifyContent: "center",
    alignItems: "center",
    position: "absolute",
  };

  return (
    <Animated.View style={[styles, style]}>
      <BannerImage resizeMode="contain" source={adImage} />
    </Animated.View>
  );
}

export default AdBubble;
