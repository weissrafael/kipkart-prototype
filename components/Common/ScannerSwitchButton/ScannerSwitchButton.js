import React from "react";
import { MaterialIcons } from '@expo/vector-icons';
import { TouchableOpacity } from "react-native-gesture-handler";
import { colors } from "../../../styles/styleGuide.js";

const ScannerSwitchButton = ({ setScanner, scannerIsOpen }) => (
    <TouchableOpacity
      style={{
        width: 60,
        height: 60,
        justifyContent: "center",
        alignItems: "center",
        backgroundColor: colors.white,
      }}
      onPress={() => setScanner((state) => !state)}
    >
      <MaterialIcons name={scannerIsOpen ? "keyboard-arrow-up" : "keyboard-arrow-down"} size={42} color={colors.goodSamaritan} />
    </TouchableOpacity>
);

export default ScannerSwitchButton;
