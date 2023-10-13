import React from "react";
import { MaterialCommunityIcons, FontAwesome5 } from "@expo/vector-icons";
import { colors } from "../../../styles/styleGuide";

const Icon = ({ name, color, size, className, fontAwesome }) => {
  if (fontAwesome) {
    return (
      <FontAwesome5
        name={name}
        className={className}
        size={size || 24}
        color={color || colors.primary}
      />
    );
  }
  return (
    <MaterialCommunityIcons
      name={name}
      className={className}
      size={size || 24}
      color={color || colors.primary}
    />
  );
};

export default Icon;
