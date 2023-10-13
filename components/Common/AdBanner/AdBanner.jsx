import React, { useRef, useEffect, useState } from "react";
import Animated, {
  useSharedValue,
  withTiming,
  useAnimatedStyle,
  Easing,
} from "react-native-reanimated";
import {
  Banner,
  BannerImage,
  BannerSubText,
  BannerText,
  BannerTextContainer,
} from "./AdBanner.styles";

const adImage = require("../../../assets/adsImages/delicadoYpe.png");

function AdBanner({ text, subText, visible }) {
  // const [keepAnimationGoing, setKeepAnimationGoing] = useState(true);
  // const bannerAnimationValue = useRef(new Animated.Value(0))
  //   .current;
  const top = useSharedValue(-200);

  const config = {
    duration: 500,
    easing: Easing.bezier(0.5, 0.01, 0, 1),
  };

  const style = useAnimatedStyle(() => ({
    top: withTiming(top.value, config),
  }));

  useEffect(() => {
    const timer = setInterval(() => {
      top.value = 10;
    }, 25000);
    return () => {
      clearInterval(timer);
    };
  }, []);

  useEffect(() => {
    const timerTwo = setTimeout(() => {
      top.value = -200;
    }, 5000);
    return () => {
      clearTimeout(timerTwo);
    };
  }, [top.value]);
  // useEffect(() => {
  //   const timer = setTimeout(startAnimation, 10000);
  //   return () => {
  //     setKeepAnimationGoing(false);
  //     clearTimeout(timer);
  //   };
  // }, []);
  //
  // function startAnimation() {
  //   Animated.timing(bannerAnimationValue, {
  //     toValue: 1,
  //     duration: 1000,
  //     useNativeDriver: false,
  //   }).start(() => (keepAnimationGoing ? setTimeout(endAnimation, 5000) : undefined));
  // }
  //
  // function endAnimation() {
  //   Animated.timing(bannerAnimationValue, {
  //     toValue: 0,
  //     duration: 1000,
  //     useNativeDriver: false,
  //   }).start(() => (keepAnimationGoing ? setTimeout(startAnimation, 10000) : undefined));
  // }

  const styles = {
    zIndex: 9,
    borderRadius: 10,
    paddingTop: 32,
    paddingLeft: 16,
    paddingRight: 16,
    height: 100,
    width: "100%",
    backgroundColor: "transparent",
    justifyContent: "center",
    flexDirection: "row",
    position: "absolute",
  };

  if (!visible) {
    return null;
  }

  return (
    <Animated.View style={[styles, style]}>
      <Banner>
        <BannerImage source={adImage} />
        <BannerTextContainer>
          <BannerText>{text}</BannerText>
          <BannerSubText>{subText}</BannerSubText>
        </BannerTextContainer>
      </Banner>
    </Animated.View>
  );
}

export default AdBanner;
