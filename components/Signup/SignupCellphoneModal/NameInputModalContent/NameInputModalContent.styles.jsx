import styled from "styled-components/native/dist/styled-components.native.esm";
import { Dimensions } from "react-native";
import { BoldTitle } from "../../../../styles/common.styles";
import { colors } from "../../../../styles/styleGuide";

const smallDevice = Dimensions.get("window").width < 380;

export const NameModalContainer = styled.View`
  align-items: center;
  justify-content: center;
  width: 100%;
  height: 100%;
  ${({ keyboardShown }) =>
    keyboardShown &&
    `
        justify-content: flex-start;
        padding-top: 70px;
    `}
`;

export const NameModalText = styled(BoldTitle)`
  color: ${colors.secondary};
  margin-top: 32px;
`;

export const InputRow = styled.View`
  width: 100%;
  margin-top: ${smallDevice ? 16 : 24}px;
`;

export const InputColContainer = styled.View`
  flex: 1;
  width: 100%;
`;

export const SignupCellphoneImage = styled.Image`
  ${({ keyboardShown }) => `
    height: 25%;
    display: ${keyboardShown ? "none" : "flex"}
`}
`;
