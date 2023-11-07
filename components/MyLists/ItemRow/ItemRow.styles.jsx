import styled from "styled-components/native";
import { ContentContainer } from "../../../screens/Scanner/ScannerScreen.styles";
import { colors } from "../../../styles/styleGuide";

export const ListRowContainer = styled(ContentContainer)`
  flex-direction: row;
  align-items: center;
  justify-content: flex-start;
  border-bottom-width: 1px;
  border-bottom-color: ${colors.forestBlues};
  height: 86px;
  padding: 0 16px;
`;

export const ImageContainer = styled.View`
  flex: 1;
  padding: 8px;
`;

export const ItemIcon = styled.Image`
  width: 100%;
  height: 100%;
`;

export const ItemQuantityBox = styled.View`
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: space-between;
  flex: 1;
  padding-left: 32px;
`;

export const ItemQuantity = styled.Text`
  font-size: 26px;
  width: 100%;
  color: ${colors.forestBlues};
`;

export const ReadOnlyNameBox = styled.View`
  align-items: flex-start;
  width: 45%;
`;

export const ReadOnlyItemName = styled.Text`
  font-size: 16px;
  color: ${colors.forestBlues};
`;

export const ItemTotalValue = styled.Text`
  text-align: right;
  color: ${colors.forestBlues};
  font-size: 16px;
`;
