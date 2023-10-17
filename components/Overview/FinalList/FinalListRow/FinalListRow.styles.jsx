import styled from "styled-components/native";
import { colors } from "../../../../styles/styleGuide";
import Colors from "../../../../constants/Colors";

export const ListRowContainer = styled.View`
  flex-direction: row;
  align-items: center;
  justify-content: space-between;
  border-bottom-width: 1px;
  border-bottom-color: ${colors.secondary};
  width: 90%;
  height: 100px;
  padding-left: 20px;
  padding-right: 20px;
`;

export const ItemIcon = styled.Image`
  width: 60px;
  height: 65px;
`;

export const ItemQtyAndName = styled.Text`
  text-align: center;
  flex: 3;
  padding-left: 12px;
  padding-right: 12px;
  overflow: hidden;
  font-size: 20px;
  color: ${Colors.secondary};
`;

export const ItemTotalValue = styled.Text`
  flex: 1;
  text-align: right;
  color: ${Colors.secondary};
`;
