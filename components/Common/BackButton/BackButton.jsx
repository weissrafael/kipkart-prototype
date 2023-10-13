import { AntDesign, Ionicons } from "@expo/vector-icons";
import React from "react";
import { Dimensions } from "react-native";
import Colors from "../../../constants/Colors";
import { BackButtonContainer } from "./BackButton.styles";

function BackButton({ onPress, styles, backIcon }) {
  return (
    <BackButtonContainer style={{ ...styles }} onPress={onPress}>
      <AntDesign
        name={backIcon ? "arrowleft" : "closecircleo"}
        size={38}
        color={Colors.tertiary}
      />
    </BackButtonContainer>
  );
}

export default BackButton;
