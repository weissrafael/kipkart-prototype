import styled from "styled-components/native";
import { Dimensions } from "react-native";
import { colors } from "../../../styles/styleGuide";

const smallDevice = Dimensions.get("window").width < 380;

export const ListRowContainer = styled.TouchableWithoutFeedback`
  width: 100%;
  height: 100px;
  align-items: center;
`;

export const Wrapper = styled.View`
  width: 100%;
  height: 100px;
  flex-direction: row;
  align-items: center;
  justify-content: space-between;
  background-color: transparent;
  padding-right: 32px;
  border-bottom-width: 2px;
  border-bottom-color: ${colors.darkBlue};
`;

export const LeftWrapper = styled.View`
  flex-direction: row;
  height: 100%;
  flex: 1;
  align-items: center;
`;

export const MarketName = styled.Text`
  font-size: 16px;
  color: ${colors.mistyBlue};
  font-weight: bold;
  letter-spacing: 0.4px;
  max-width: ${smallDevice ? 100 : 140}px;
`;

export const PurchaseDate = styled.Text`
  font-size: 12px;
  color: ${colors.mistyBlue};
`;

export const NumberOfItems = styled.Text`
  font-size: 16px;
  color: ${colors.blueGrotto};
  margin-left: 8px;
`;

export const PurchaseValue = styled.Text`
  font-size: 16px;
  color: ${colors.blueGrotto};
  margin-left: 8px;
`;

export const MarketInfo = styled.View`
  justify-content: space-between;
  height: 44px;
  position: relative;
  left: -6px;
`;

export const NumbersContainer = styled.View`
  justify-content: space-between;
  height: 52px;
  width: 60px;
`;

export const NumberOfItemsRow = styled.View`
  flex-direction: row;
`;

export const IconBox = styled.View`
  width: 30px;
  align-items: flex-end;
`;

export const PurchaseValueRow = styled.View`
  flex-direction: row;
`;
