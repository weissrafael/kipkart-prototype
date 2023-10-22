import styled from "styled-components/native";
import { colors } from "../../../../styles/styleGuide";

export const TypeBarcodeContainer = styled.TouchableOpacity`
  border-radius: 10px;
  background-color: ${colors.goodSamaritan};
  align-items: center;
  justify-content: center;
  flex-direction: row;
  padding: 0 16px;
  height: 50px;
`;

export const TypeBarcodeFullContainer = styled.TouchableOpacity`
  width: 100%;
  height: 60px;
  padding: 0 16px;
  border-radius: 30px;
  background-color: ${colors.goodSamaritan};
  align-items: center;
  justify-content: center;
  flex-direction: row;
  margin-bottom: 16px;
`;
