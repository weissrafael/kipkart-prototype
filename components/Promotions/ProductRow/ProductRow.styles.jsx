import styled from "styled-components/native";
import { RegularText } from "../../../styles/common.styles";
import { colors } from "../../../styles/styleGuide";

export const Row = styled.View`
  flex-direction: row;
  width: 100%;
  height: 100px;
  align-items: center;
  justify-content: space-between;
  padding: 0 16px;
  border: 1px solid white;
  border-top-left-radius: 20px;
  border-top-right-radius: 20px;
  border-bottom-width: 0;
`;

export const ProductImage = styled.Image`
  height: 80px;
  width: 20%;
`;

export const ProductName = styled(RegularText)`
  color: ${colors.secondary};
  width: 40%;
`;

export const ProductPrice = styled(RegularText)`
  color: ${colors.secondary};
  font-size: 18px;
`;

export const AddCartButton = styled.TouchableOpacity`
  background-color: ${colors.secondary};
  width: 40px;
  height: 40px;
  border-radius: 30px;
  align-items: center;
  justify-content: center;
`;
