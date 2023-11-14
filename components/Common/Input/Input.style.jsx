import styled, { css } from "styled-components/native";
import { colors } from "../../../styles/styleGuide";

export const ContainerTextInputStyle = styled.View`
  ${({ isFocused, error, success, width }) => css`
    border-radius: 10px;
    height: 50px;
    width: ${width || "100%"};
    background: transparent;
    border: 2px solid
      ${isFocused
        ? colors.spray
        : error
        ? colors.red
        : success
        ? colors.white
        : colors.white};
  `}
`;

export const TextInputStyle = styled.TextInput`
  display: flex;
  align-items: center;
  justify-content: center;
  padding-left: 16px;
  padding-right: 16px;
  font-size: 16px;
  border-radius: 9px;
  color: ${({ textColor }) => textColor || colors.white};
  height: 50px;
`;

export const InputLabel = styled.Text`
  width: 100%;
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
