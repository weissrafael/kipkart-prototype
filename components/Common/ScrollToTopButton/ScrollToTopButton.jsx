import React from "react";
import { AntDesign } from "@expo/vector-icons";
import { TouchableOpacity } from "react-native-gesture-handler";
import {
  AbsoluteView,
  ScrollTopButtonContainer,
} from "./ScrollToTopButton.styles";
import Colors from "../../../constants/Colors";

const ScrollToTopButton = ({ toTopHandler }) => (
  <AbsoluteView>
    <TouchableOpacity
      style={{
        width: 50,
        height: 50,
        backgroundColor: Colors.secondary,
        justifyContent: "center",
        alignItems: "center",
        borderRadius: 25,
      }}
      onPress={toTopHandler}
    >
      <AntDesign name="up" size={24} color="white" />
    </TouchableOpacity>
  </AbsoluteView>
);

export default ScrollToTopButton;
