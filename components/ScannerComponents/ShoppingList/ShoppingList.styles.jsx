import styled from "styled-components/native";
import { Dimensions } from "react-native";
import FontSizes from "../../../constants/FontSizes";
import { colors } from "../../../styles/styleGuide";
import Colors from "../../../constants/Colors";

const smallDevice = Dimensions.get("window").width < 380;

export const Page = styled.View`
  flex: 1;
  padding-bottom: 50px;
  background-color: white;
`;

export const ListsContainer = styled.View`
  background-color: ${colors.white};
  justify-content: flex-start;
  align-items: center;
  height: 100%;
  padding-top: 10px;
  ${({ empty }) =>
    !empty &&
    `
  padding: ${smallDevice ? 30 : 40}px 10px 40px 10px;
  justify-content: center;`};
`;

export const EmptyListText = styled.Text`
  font-family: "montserrat-bold";
  color: ${colors.forestBlues};
  font-size: ${FontSizes.title}px;
  text-align: center;
`;

export const TypeBarcodeWrapper = styled.View`
  flex-direction: row;
  align-items: center;
  justify-content: space-between;
  padding: 0 16px 16px 16px;
  width: 100%;
  background-color: ${colors.white};
`;

export const ShoppingListHeader = styled.View`
  flex-direction: row;
  align-items: center;
  justify-content: space-between;
  padding: 0 16px 0 0;
  width: 100%;
  background-color: ${colors.white};
`;

export const IndicatorTextContainer = styled.View`
  flex-direction: row;
  align-items: flex-start;
  justify-content: flex-start;
  max-width: 200px;
  margin-left: 16px;
`;

export const IndicatorText = styled(EmptyListText)`
  font-size: ${FontSizes.text}px;
  color: ${colors.white};
  max-width: 200px;
  text-align: left;
`;

export const ListTitle = styled.Text`
  font-family: "montserrat-bold";
  font-size: ${FontSizes.title}px;
  text-align: center;
`;

export const ListImage = styled.Image`
  height: ${smallDevice ? "60%" : "70%"};
  margin-bottom: 16px;
`;

export const EmptyTextContainer = styled.View`
  align-items: center;
  justify-content: flex-start;
  width: 100%;
  padding: 0 16px;
  height: 100%;
`;

export const CartItems = styled.View`
  width: 100%;
  height: 100%;
  align-items: center;
  display: ${({ show }) => (show ? "flex" : "none")};
`;

export const ListContainer = styled.View`
  justify-content: center;
  align-items: center;
  width: 100%;
  overflow: hidden;
`;

export const Line = styled.View`
  width: 95%;
  height: 1px;
  background-color: lightgrey;
  display: ${({ show }) => (show ? "flex" : "none")};
`;

export const MissingItems = styled(CartItems)`
  border-color: ${Colors.secondary};
  display: ${({ show }) => (show ? "flex" : "none")};
  position: relative;
  padding-top: 20px;
`;

export const TitleContainer = styled.View`
  background-color: white;
  align-items: center;
  justify-content: center;
`;

export const MissingItemsTitle = styled.Text`
  font-family: "montserrat-bold";
  font-size: ${FontSizes.title}px;
  text-align: center;
  color: ${Colors.secondary};
`;
