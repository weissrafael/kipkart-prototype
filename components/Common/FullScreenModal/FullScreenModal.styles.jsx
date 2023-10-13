import styled from "styled-components/native/dist/styled-components.native.esm";
import { colors } from "../../../styles/styleGuide";

export const CenterContent = styled.KeyboardAvoidingView`
  flex: 1;
  justify-content: center;
  align-items: center;
  padding: 0 16px;
  ${({ backdrop }) =>
    backdrop &&
    `
    background-color: rgba(0,0,0,0.7);
  `}
`;

export const ModalContent = styled.View`
  align-items: center;
  background-color: ${colors.white};
  height: ${({ height }) => height || "95%"};
  width: 100%;
  position: relative;
  overflow: ${({ overFooter }) => (overFooter ? "visible" : "hidden")};
  border-radius: 20px;
`;
