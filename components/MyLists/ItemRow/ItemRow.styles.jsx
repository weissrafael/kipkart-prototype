import styled, { css } from "styled-components/native";
import { Dimensions } from "react-native";
import { ContentContainer } from "../../../screens/Scanner/ScannerScreen.styles";
import { colors } from "../../../styles/styleGuide";

const smallDevice = Dimensions.get("window").width < 380;

export const ListRowContainer = styled(ContentContainer)`
    flex-direction: row;
    align-items: center;
    justify-content: flex-start;
    border-bottom-width: 1px;
    border-bottom-color: ${colors.blueGrotto};
    height: 86px;
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
    display: flex;
    flex-direction: row;
    align-items: center;
    justify-content: space-between;
    flex: 1;
    padding-left: 20px;
`;

export const ItemQuantity = styled.Text`
  font-size: 26px;
  width: 100%;
`;

export const ReadOnlyNameBox = styled.View`
  align-items: flex-start;
  width: 45%;
`;

export const ReadOnlyItemName = styled.Text`
  font-size: 16px;
  color: ${colors.darkBlue};
`;

export const ItemTotalValue = styled.Text`
    text-align: right;
    color: ${colors.green2};
    font-size: 16px;
`;
