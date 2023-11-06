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
  padding-right: 16px;
  border-bottom-width: 2px;
  border-bottom-color: ${colors.forestBlues};
`;

export const LeftWrapper = styled.View`
  flex-direction: row;
  height: 100%;
  flex: 1;
  align-items: center;
`;

export const MarketName = styled.Text`
  font-size: 16px;
  color: ${colors.white};
  font-weight: bold;
  letter-spacing: 0.4px;
  max-width: ${smallDevice ? 180 : 240}px;
`;

export const PurchaseDate = styled.Text`
  font-size: 12px;
  color: ${colors.white};
`;

export const NumberOfItems = styled.Text`
  font-size: 16px;
  color: ${colors.spray};
  margin-left: 8px;
`;

export const PurchaseValue = styled.Text`
  font-size: 16px;
  color: ${colors.spray};
  margin-left: 8px;
`;

export const MarketInfo = styled.View`
  justify-content: space-between;
  height: 44px;
  position: relative;
  margin-left: 16px;
`;

export const NumbersContainer = styled.View`
  justify-content: space-between;
  height: 52px;
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
