import styled from "styled-components/native";
import { RegularText } from "../../../styles/common.styles";
import { colors } from "../../../styles/styleGuide";

export const Row = styled.View`
  flex-direction: row;
  width: 100%;
  height: 86px;
  align-items: center;
  justify-content: space-between;
  padding: 0 16px;
  border-radius: 100%;
`;

export const ProductImage = styled.Image`
  height: 80px;
  width: 20%;
`;

export const ProductName = styled(RegularText)`
  color: ${colors.forestBlues};
  width: 40%;
`;

export const ProductPrice = styled(RegularText)`
  color: ${colors.forestBlues};
  font-size: 18px;
`;
