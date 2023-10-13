import styled, { css } from "styled-components/native";
import { Dimensions } from "react-native";
import { colors } from "../../styles/styleGuide";

const smallDevice = Dimensions.get("window").width < 380;

export const Page = styled.View`
  flex: 1;
  background-color: ${colors.mistyBlue};
`;

export const Header = styled.View`
  width: 100%;
  height: 60px;
  flex-direction: row;
  align-items: center;
  justify-content: space-between;
  padding: 10px 16px 10px 16px;
  background-color: ${colors.darkBlue};
`;

export const DateTimeHeader = styled.View`
  width: 100%;
  flex-direction: row;
  justify-content: space-between;
  padding: 8px;
`;

export const DateTimeItem = styled.View`
  flex-direction: row;
  align-items: center;
`;

export const MyListHeader = styled.View`
  width: 100%;
  height: 60px;
  flex-direction: row;
  align-items: center;
  justify-content: center;
`;

export const MyListHeaderList = styled.View`
  width: 100%;
  height: 60px;
  flex-direction: row;
  align-items: center;
  justify-content: center;
`;

export const ChangeViewMask = styled.TouchableOpacity`
  ${({ show }) => css`
    position: absolute;
    background-color: ${colors.strongBrownOpacity};
    justify-content: center;
    padding-top: 36px;
    flex-direction: row;
    ${show &&
    `
      height: 100%;
      width: 100%;
      margin-right: 0;
      z-index: 99;
    `};
  `}
`;

export const ChangeViewMaskList = styled.TouchableOpacity`
  ${({ show }) => css`
    position: absolute;
    background-color: ${colors.megaBrownOpcaity};
    justify-content: center;
    align-items: center;
    flex-direction: column;
    ${show &&
    `
      height: 100%;
      width: 100%;
      margin-right: 0;
      z-index: 99;
    `};
  `}
`;

export const EmptyView = styled.View`
  width: 100px;
`;

export const LoaderContainer = styled.View`
  flex: 1;
  justify-content: center;
  align-items: center;
`;

export const LoaderImage = styled.Image`
  width: 150px;
  height: 150px;
`;

export const Footer = styled.View`
  width: 100%;
  height: 70px;
  flex-direction: row;
  justify-content: space-between;
  padding: 0 24px;
  align-items: center;
  background-color: ${colors.peachOpacity};
  position: absolute;
  bottom: 0;
`;

export const MyListItems = styled.ScrollView`
  width: 100%;
  flex: 1;
  padding: 0 16px;
`;

export const EmptyRow = styled.View`
  height: 86px;
`;

export const Title = styled.Text`
  font-size: ${smallDevice ? 18 : 26}px;
  font-weight: bold;
  color: ${colors.darkBlue};
  max-width: ${smallDevice ? 140 : 250}px;
`;

export const ShowListTitle = styled.Text`
  font-size: 26px;
  font-weight: bold;
  color: ${colors.white};
`;

export const DateTimeText = styled.Text`
  font-size: 14px;
  color: ${colors.darkBlue};
  padding-left: 4px;
`;

export const Total = styled.Text`
  font-size: ${smallDevice ? 18 : 24}px;
  font-weight: bold;
  position: absolute;
  right: 0;
  color: ${colors.green2};
  width: 100px;
  text-align: center;
`;

export const ShowListTotal = styled.Text`
  font-size: 24px;
  font-weight: bold;
  position: absolute;
  right: 0;
  color: ${colors.white};
  width: 100px;
  text-align: center;
`;

export const ChangeViewText = styled.Text`
  font-size: 18px;
  font-weight: bold;
  color: ${colors.white};
  text-align: center;
  margin-right: 16px;
`;

export const ChangeViewTextList = styled.Text`
  font-size: 18px;
  font-weight: bold;
  color: ${colors.white};
  text-align: center;
`;

export const ItemsContainer = styled.ScrollView`
  width: 100%;
  flex: 3;
  background-color: ${colors.coral};
`;

export const ListContainer = styled.ScrollView`
  width: 100%;
  flex: 1;
  background-color: ${colors.blueGray};
`;

export const ItemsWrapper = styled.View`
  width: 100%;
  flex: 1;
  padding: 8px 16px 32px 16px;
`;

export const ViewList = styled.View`
  width: 100%;
  flex: 1;
  justify-content: center;
  align-items: center;
  flex-direction: row;
`;

export const IconView = styled.View`
  position: absolute;
  left: 50px;
  justify-content: center;
  align-items: center;
`;
