import React from "react";
import { Ionicons } from "@expo/vector-icons";
import { NumpadContainer } from "./Keyboard.styles";
import Numpad from "./Numpad/Numpad";
import { colors } from "../../../styles/styleGuide";

function Keyboard({ onNumberPress }) {
  const characters = [
    { char: 1, key: "1" },
    { char: 2, key: "2" },
    { char: 3, key: "3" },
    { char: 4, key: "4" },
    { char: 5, key: "5" },
    { char: 6, key: "6" },
    { char: 7, key: "7" },
    { char: 8, key: "8" },
    { char: 9, key: "9" },
    { char: "", key: "10" },
    { char: 0, key: "11" },
    {
      char: (
        <Ionicons name="backspace-outline" size={32} color={colors.secondary} />
      ),
      key: "12",
    },
  ];
  return (
    <NumpadContainer>
      {characters.map(({ char, key }, index) => (
        <Numpad
          key={key}
          index={index}
          num={char}
          onNumberPress={onNumberPress}
        />
      ))}
    </NumpadContainer>
  );
}

export default Keyboard;
