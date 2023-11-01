import styled from "styled-components/native";
import {BoldText, RegularText} from "../../../styles/common.styles";
import { colors } from "../../../styles/styleGuide";

export const Row = styled.View`
  flex-direction: row;
  width: 100%;
  height: 104px;
  align-items: center;
  justify-content: space-between;
  padding: 0 16px 0 8px;
  margin-bottom: 8px;
  border-radius: 16px;
  border-bottom-left-radius: 100px;
  border-top-left-radius: 100px;
  background-color: ${({bgColor}) => bgColor};
  shadow-color: #000;
  shadow-offset: 0px 4px;
  shadow-opacity: 3;
  shadow-radius: 5px;
  elevation: 5;
`;

export const ImageContainer = styled.View`
  width: 90px;
  height: 90px;
  border-radius: 100px;
  background-color: ${colors.white};
  justify-content: center;
  align-items: center;
  padding: 10px;
`;

export const ProductImage = styled.Image`
  height: 100%;
  width: 100%;
`;

export const ProductName = styled(BoldText)`
  color: ${colors.white};
  flex: 4;
`;

export const ProductPrice = styled(BoldText)`
  color: ${colors.white};
  font-size: 18px;
`;
