import styled, { css } from "styled-components/native";
import { Dimensions } from "react-native";
import { colors } from "../../styles/styleGuide";

const smallDevice = Dimensions.get("window").width < 380;

export const Page = styled.View`
  flex: 1;
  background-color: ${colors.white};
`;

export const CameraSpacing = styled.View`
  width: 100%;
  height: 38px;
  background-color: ${colors.forestBlues};
`;

export const Header = styled.View`
  width: 100%;
  flex-direction: row;
  align-items: center;
  justify-content: space-between;
  padding: 16px 16px 16px 16px;
  background-color: ${colors.forestBlues};
`;

export const DateTimeHeader = styled.View`
  width: 100%;
  flex-direction: row;
  justify-content: space-between;
  padding: 16px 16px 0 16px;
`;

export const DateTimeItem = styled.View`
  flex-direction: row;
  align-items: center;
`;

export const MyListHeader = styled.View`
  width: 100%;
  flex-direction: row;
  align-items: center;
  justify-content: flex-start;
  padding: 0 16px;
  margin: 32px 0;
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

export const MyListItems = styled.ScrollView`
  width: 100%;
  flex: 1;
  padding: 0;
`;

export const Title = styled.Text`
  font-size: ${smallDevice ? 18 : 24}px;
  font-weight: bold;
  color: ${colors.forestBlues};
  max-width: ${smallDevice ? 190 : 300}px;
`;

export const DateTimeText = styled.Text`
  font-size: 14px;
  color: ${colors.forestBlues};
  padding-left: 4px;
`;

export const Total = styled.Text`
  font-size: ${smallDevice ? 18 : 24}px;
  font-weight: bold;
  color: ${colors.forestBlues};
  text-align: right;
  flex: 1;
`;

export const ListContainer = styled.ScrollView`
  width: 100%;
  flex: 1;
  background-color: ${colors.white};
`;