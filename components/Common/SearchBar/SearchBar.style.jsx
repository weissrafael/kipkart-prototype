import styled, { css } from "styled-components/native";
import { MaterialCommunityIcons } from "@expo/vector-icons";
import { colors } from "../../../styles/styleGuide";
import Icon from "../Icon/Icon";

export const SearchBarInputContainer = styled.View`
  ${({ bgColor }) => `
    flex-direction: row;
    flex: 1;
    border-radius: 80px;
    background-color: ${bgColor || colors.coral};
  `}
`;

export const SearchBarInput = styled.TextInput`
  ${({ textColor }) => `
    display: flex;
    align-items: center;
    justify-content: flex-end;
    padding-left: 16px;
    padding-right: 16px;
    font-size: 14px;
    color: ${textColor || colors.cream};
    height: 36px;
    width: 100%;
  `}
`;

export const StyledIcon = styled(MaterialCommunityIcons)`
  ${({ textColor }) => `
    position: absolute;
    right: 14px;
    top: 6px;
    color: ${textColor || colors.peach};
  `}
`;

// export const EyeIcon = styled(Icon)`
//   font-size: 20px;
//   color: ${colors.black3};
//   margin-right: 8px;
// `;

// export const ButtonEye = styled.TouchableOpacity`
//   width: 40px;
//   height: ${sizes.inputSizes.large}px;
//   align-items: center;
//   justify-content: center;
//   position: absolute;
//   right: 0;
//   z-index: 9;
// `;
