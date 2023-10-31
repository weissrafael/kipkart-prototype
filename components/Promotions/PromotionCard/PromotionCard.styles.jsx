import styled from "styled-components/native";
import { RegularText, Title } from "../../../styles/common.styles";
import { colors } from "../../../styles/styleGuide";

export const ProductImage = styled.Image`
  height: 75px;
  width: 100%;
`;
export const ProductName = styled(Title)`
  margin-bottom: 20px;
  color: ${colors.forestBlues};
  font-family: "montserrat-regular";
`;
export const ProductPrice = styled(RegularText)`
  color: ${colors.forestBlues};
  font-size: 18px;
  font-family: "montserrat-bold";
`;
