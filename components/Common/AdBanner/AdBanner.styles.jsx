import styled from "styled-components/native";
import { colors } from "../../../styles/styleGuide";

export const BannerTextContainer = styled.View`
  flex: 1;
  background-color: transparent;
  display: flex;
  justify-content: center;
  align-items: flex-start;
`;

export const Banner = styled.TouchableOpacity`
  border-radius: 10px;
  padding: 0 16px 0 16px;
  height: 84px;
  width: 100%;
  background-color: #1e66b6;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: row;
`;

export const BannerImage = styled.Image`
  width: 42px;
  height: 58px;
  margin-right: 16px;
`;

export const BannerText = styled.Text`
  font-size: 18px;
  color: ${colors.white};
  margin-bottom: 8px;
  font-weight: bold;
  font-family: "montserrat-regular";
`;

export const BannerSubText = styled.Text`
  font-size: 13px;
  color: ${colors.white};
  font-family: "montserrat-regular";
`;
