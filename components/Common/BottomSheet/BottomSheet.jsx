// original source: https://medium.com/@ndyhrdy/making-the-bottom-sheet-modal-using-react-native-e226a30bed13 🙇
import React, { useEffect, useRef } from "react";
import {
  Animated,
  Dimensions,
  Modal,
  PanResponder,
  StyleSheet,
  View,
} from "react-native";

export default ({ onDismiss, visible, children }) => {
  const screenHeight = Dimensions.get("screen").height;
  const panY = useRef(new Animated.Value(screenHeight)).current;

  const resetPositionAnim = Animated.timing(panY, {
    toValue: 0,
    duration: 300,
    useNativeDriver: true,
  });

  const closeAnim = Animated.timing(panY, {
    toValue: screenHeight,
    duration: 500,
    useNativeDriver: true,
  });

  const translateY = panY.interpolate({
    inputRange: [-1, 0, 1],
    outputRange: [0, 0, 1],
  });

  const handleDismiss = () => closeAnim.start(onDismiss);

  useEffect(() => {
    resetPositionAnim.start();
  }, [resetPositionAnim]);

  const panResponders = useRef(
    PanResponder.create({
      onStartShouldSetPanResponder: () => true,
      onMoveShouldSetPanResponder: () => false,
      onPanResponderMove: Animated.event([null, { dy: panY }], {
        useNativeDriver: false,
      }),
      onPanResponderRelease: (_, gs) => {
        if (gs.dy > 0 && gs.vy > 2) {
          return handleDismiss();
        }
        return resetPositionAnim.start();
      },
    })
  ).current;

  return (
    <Modal
      animated
      animationType="slide"
      visible={visible}
      transparent
      onRequestClose={handleDismiss}
    >
      <View style={styles.overlay}>
        <Animated.View
          style={{
            ...styles.container,
            transform: [{ translateY }],
          }}
          {...panResponders.panHandlers}
        >
          <View style={styles.sliderIndicatorRow}>
            <View style={styles.sliderIndicator} />
          </View>
          {children}
        </Animated.View>
      </View>
    </Modal>
  );
};

const styles = StyleSheet.create({
  overlay: {
    flex: 1,
    justifyContent: "flex-end",
    height: "100%",
    position: "absolute",
    top: 0,
    width: "100%",
  },
  container: {
    backgroundColor: "white",
    paddingTop: 12,
    paddingBottom: 22,
    paddingHorizontal: 16,
    borderTopRightRadius: 12,
    borderTopLeftRadius: 12,
    minHeight: 200,
    alignItems: "center",
  },
  sliderIndicatorRow: {
    flexDirection: "row",
    marginBottom: 4,
    alignItems: "center",
    justifyContent: "center",
    paddingBottom: 16,
  },
  sliderIndicator: {
    backgroundColor: "#CECECE",
    height: 4,
    width: 45,
  },
});
