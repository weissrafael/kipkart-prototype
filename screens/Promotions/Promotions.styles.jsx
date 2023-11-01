import styled from "styled-components/native";
import { colors } from "../../styles/styleGuide";
import { BoldTitle } from "../../styles/common.styles";

export const Screen = styled.SafeAreaView`
  flex: 1;
  position: relative;
  background-color: ${colors.graySamaritan};
`;

export const Page = styled.SectionList``;

export const Title = styled.Text`
  color: ${colors.white};
  font-size: 24px;
  margin: 0;
  font-family: "montserrat-bold";
  text-align: center;
`;

export const PromotionList = styled.ScrollView`
  height: 100%;
  width: 100%;
  flex: 1;
  padding: 8px;
`;

export const PromotionHeader = styled.View`
  width: 100%;
  background-color: ${({bgColor}) => bgColor};
  shadow-color: #000;
  shadow-offset: 0px 0px;
  shadow-opacity: 0.3;
  shadow-radius: 5px;
  elevation: 5;
`;

