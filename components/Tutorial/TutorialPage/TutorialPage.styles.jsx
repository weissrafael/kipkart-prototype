import styled from "styled-components/native";
import { Dimensions } from "react-native";

import { colors } from "../../../styles/styleGuide";
import { BoldTitle, RegularText } from "../../../styles/common.styles";

const smallDevice = Dimensions.get("window").width < 380;
const mediumHeightDevice = Dimensions.get("window").height < 690;

export const Page = styled.View`
  flex: 1;
  align-items: center;
  justify-content: center;
`;

export const ImageContainer = styled.View`
  flex: 1;
  position: relative;
  align-items: center;
  width: 100%;
  padding: 0 16px;
  background-color: ${({ index }) =>
    index % 2 === 0 ? colors.secondary : colors.primary};
`;

export const PageImage = styled.Image`
  width: 80%;
  height: 60%;
  position: absolute;
  bottom: 0;
  ${({ buttonsPage }) =>
    buttonsPage &&
    smallDevice &&
    `
    bottom: 90px;
    
  `}
`;

export const TextContainer = styled.View`
  flex: 1;
  background-color: ${({ index }) =>
    index % 2 === 0 ? colors.secondary : colors.primary};
  width: 100%;
  align-items: center;
  padding: 0 16px;
  position: relative;
  ${({ specialCase }) => specialCase && `background-color: ${colors.primary}`}
  ${({ buttonsPage }) =>
    buttonsPage && mediumHeightDevice && "padding-bottom: 40px"}
`;

export const PageTitle = styled(BoldTitle)`
  color: ${({ index }) =>
    index % 2 === 0 ? colors.primary : colors.secondary};
  margin-top: 32px;
  ${({ specialCase }) => specialCase && `color: ${colors.secondary}`}
  ${({ buttonsPage }) =>
    buttonsPage &&
    smallDevice &&
    `
    bottom: 90px;
  `}
`;

export const PageText = styled(RegularText)`
  color: ${({ index }) =>
    index % 2 === 0 ? colors.primary : colors.secondary};
  width: 90%;
  margin-top: 32px;
  font-size: 16px;
  ${({ specialCase }) => specialCase && `color: ${colors.secondary}`}
  ${({ buttonsPage }) =>
    buttonsPage &&
    smallDevice &&
    `
    bottom: 90px;
    font-size: 14px;
  `}
`;

export const ButtonsCol = styled.View`
  width: 100%;
  align-items: center;
  position: relative;
  ${({ buttonsPage }) =>
    buttonsPage &&
    smallDevice &&
    `
    bottom: 90px;
  `}
`;
