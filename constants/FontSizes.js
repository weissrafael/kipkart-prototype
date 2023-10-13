import { Dimensions } from "react-native";

const smallDevice = Dimensions.get("window").width < 380;
export default {
  largeTitle: smallDevice ? 20 : 24,
  title: smallDevice ? 16 : 18,
  text: smallDevice ? 14 : 16,
  small: smallDevice ? 8 : 12,
};
