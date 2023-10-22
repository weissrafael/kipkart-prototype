import styled from "styled-components/native";
import { colors } from "../../../../styles/styleGuide";

export const TypeBarcodeContainer = styled.TouchableOpacity`
  width: 60px;
  height: 60px;
  border-radius: 30px;
  background-color: ${colors.forestBlues};
  align-items: center;
  justify-content: center;
`;

export const TypeBarcodeFullContainer = styled.TouchableOpacity`
  width: auto;
  height: 60px;
  padding: 0 16px;
  border-radius: 30px;
  background-color: ${colors.forestBlues};
  align-items: center;
  justify-content: center;
  flex-direction: row;
`;
