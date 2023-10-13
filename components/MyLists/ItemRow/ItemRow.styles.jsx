import styled, { css } from "styled-components/native";
import { Dimensions } from "react-native";
import { ContentContainer } from "../../../screens/Scanner/ScannerScreen.styles";
import { colors } from "../../../styles/styleGuide";

const smallDevice = Dimensions.get("window").width < 380;

export const ListRowContainer = styled(ContentContainer)`
  ${({ notOnList, readOnly }) => css`
    flex-direction: row;
    align-items: center;
    justify-content: flex-start;
    border-bottom-width: 1px;
    border-bottom-color: ${readOnly
      ? colors.blueGrotto
      : notOnList
      ? colors.peach
      : colors.coral};
    height: 86px;
  `}
`;

export const ImageContainer = styled.View`
  flex: 1;
  padding: 5px;
`;

export const ItemIcon = styled.Image`
  width: 100%;
  height: 100%;
`;

export const ItemQuantityBox = styled.View`
  ${({ notOnList, readOnly }) => css`
    display: flex;
    flex-direction: row;
    align-items: center;
    justify-content: ${notOnList ? "center" : "space-between"};
    flex: ${readOnly ? 1 : notOnList ? 1 : 2};
    padding-left: ${notOnList ? 30 : 20}px;
  `}
`;

export const MinusButton = styled.TouchableOpacity`
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: center;
`;

export const PlusButton = styled.TouchableOpacity`
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: center;
`;

export const ItemQuantity = styled.Text`
  font-size: 26px;
  width: 100%;
`;

export const MinusText = styled.Text`
  color: ${colors.red};
  font-size: 48px;
  font-weight: bold;
`;
export const PlusText = styled.Text`
  ${({ notOnList }) => css`
    color: ${notOnList ? colors.peach : colors.blue};
    font-weight: bold;
    font-size: ${notOnList ? 42 : 32}px;
  `}
`;

export const ItemNameBox = styled.TouchableOpacity`
  flex: 3;
  padding-left: 12px;
  padding-right: 12px;
  overflow: hidden;
`;

export const ReadOnlyNameBox = styled.View`
  align-items: flex-start;
  width: 45%;
`;

export const ReadOnlyItemName = styled.Text`
  font-size: 16px;
  color: ${colors.darkBlue};
`;

export const ItemName = styled.Text`
  ${({ notOnList }) => css`
    text-align: center;
    font-size: 16px;
    color: ${notOnList ? colors.cream : colors.strongBrown};
  `}
`;

export const ItemTotalValue = styled.Text`
  ${({ notOnList }) => css`
    text-align: right;
    color: ${notOnList ? colors.cream : colors.green2};
    font-size: 16px;
  `}
`;
