import styled from "styled-components/native";
import { RegularText, Title } from "../../../styles/common.styles";
import { colors } from "../../../styles/styleGuide";

export const ProductImage = styled.Image`
  height: 75px;
  width: 100%;
`;
export const ProductName = styled(Title)`
  margin-bottom: 20px;
  color: ${colors.secondary};
`;
export const ProductPrice = styled(RegularText)`
  color: ${colors.secondary};
  font-size: 18px;
`;

export const AddCartButton = styled.TouchableOpacity`
  background-color: ${colors.primary};
  width: 40px;
  height: 40px;
  border: 1px solid ${colors.secondary};
  border-radius: 30px;
  align-items: center;
  justify-content: center;
  position: absolute;
  bottom: -20px;
`;
