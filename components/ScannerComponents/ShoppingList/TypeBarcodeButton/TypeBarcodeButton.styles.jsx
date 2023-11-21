import styled from "styled-components/native";
import { colors } from "../../../../styles/styleGuide";

export const TypeBarcodeContainer = styled.TouchableOpacity`
  border-radius: 8px;
  background-color: ${colors.forestBlues};
  align-items: center;
  justify-content: center;
  flex-direction: row;
  height: 50px;
  flex: 1;
`;

export const TypeBarcodeFullContainer = styled.TouchableOpacity`
  width: 100%;
  height: 60px;
  padding: 0 16px;
  border-radius: 30px;
  background-color: ${colors.forestBlues};
  align-items: center;
  justify-content: center;
  flex-direction: row;
`;
