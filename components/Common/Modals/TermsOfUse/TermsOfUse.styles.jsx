import styled from "styled-components/native";
import { Dimensions } from "react-native";
import { colors } from "../../../../styles/styleGuide";

const smallDevice = Dimensions.get("window").width < 380;

export const TermsContainer = styled.View`
  flex: 1;
  width: 100%;
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: ${smallDevice ? 14 : 16}px 16px;
`;

export const TermsList = styled.ScrollView`
  width: 100%;
  margin-bottom: ${smallDevice ? 14 : 16}px;
`;

export const Section = styled.View`
  width: 100%;
`;

export const Title = styled.Text`
  font-size: ${smallDevice ? 18 : 22}px;
  padding-top: ${smallDevice ? 10 : 18}px;
  padding-bottom: ${smallDevice ? 10 : 18}px;
  font-weight: bold;
  text-align: center;
  color: ${colors.secondary};
  font-family: "montserrat-regular";
`;

export const TermsText = styled.Text`
  font-size: ${smallDevice ? 14 : 16}px;
  color: ${colors.secondary};
  font-family: "montserrat-regular";
  margin-bottom: 16px;
`;
