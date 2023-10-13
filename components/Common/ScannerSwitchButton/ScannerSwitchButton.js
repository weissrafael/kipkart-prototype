import React from "react";
import { Entypo } from "@expo/vector-icons";
import { View } from "react-native";
import { TouchableOpacity } from "react-native-gesture-handler";
import Colors from "../../../constants/Colors";

const ScannerSwitchButton = ({ setScanner }) => (
  <View
    style={{
      width: 60,
      height: 60,
      position: "absolute",
      bottom: 10,
      right: 10,
      justifyContent: "center",
      alignItems: "center",
      borderRadius: 30,
      zIndex: 11,
      backgroundColor: Colors.secondary,
    }}
  >
    <TouchableOpacity
      style={{
        width: 60,
        height: 60,

        justifyContent: "center",
        alignItems: "center",
        borderRadius: 30,
        backgroundColor: Colors.secondary,
      }}
      onPress={() => setScanner((state) => !state)}
    >
      <Entypo name="eye" size={24} color="white" />
    </TouchableOpacity>
  </View>
);

export default ScannerSwitchButton;
