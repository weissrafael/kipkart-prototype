import React from "react";
import {
  SearchBarInput,
  SearchBarInputContainer,
  StyledIcon,
} from "./SearchBar.style";
import { colors } from "../../../styles/styleGuide";

function SearchBar({
  onChange,
  value,
  placeholder,
  bgColor,
  textColor,
  placeHolderTextColor,
}) {
  return (
    <SearchBarInputContainer bgColor={bgColor}>
      <SearchBarInput
        onChangeText={onChange}
        placeholder={placeholder}
        placeholderTextColor={placeHolderTextColor || colors.peach}
        textColor={textColor}
        value={value}
      />
      <StyledIcon name="magnify" textColor={textColor} size={22} />
    </SearchBarInputContainer>
  );
}

export default SearchBar;
