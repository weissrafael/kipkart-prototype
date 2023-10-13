import styled from "styled-components/native";
import { colors } from "../../../styles/styleGuide";
import { BoldTitle, RegularText } from "../../../styles/common.styles";

export const Page = styled.View`
  flex: 1;
  align-items: center;
  justify-content: center;
`;

export const ImageContainer = styled.View`
  flex: 1;
  position: relative;
  background-color: ${colors.secondary};
  align-items: center;
  width: 100%;
`;

export const PageImage = styled.Image`
  width: 80%;
  height: 60%;
  position: absolute;
  bottom: 0;
`;

export const TextContainer = styled.View`
  flex: 1;
  background-color: ${colors.primary};
  width: 100%;
`;

export const PageTitle = styled(BoldTitle)`
  color: ${({ index }) =>
    index % 2 === 0 ? colors.primary : colors.secondary};
  margin-bottom: 32px;
  margin-top: 32px;
`;

export const PageText = styled(RegularText)`
  color: ${({ index }) =>
    index % 2 === 0 ? colors.primary : colors.secondary};
  width: 90%;
`;
