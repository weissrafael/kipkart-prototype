import styled from "styled-components/native";
import FontSizes from "../../../../constants/FontSizes";

export const SuggestedItemsSection = styled.View`
  padding-top: 20px;
  padding-bottom: 80px;
`;

export const SectionTitle = styled.Text`
  font-family: "montserrat-regular";
  font-size: ${FontSizes.largeTitle}px;
  padding-bottom: 10px;
  padding-left: 10px;
`;

export const Items = styled.View`
  height: 150px;
  justify-content: center;
`;

export const Item = styled.View`
  height: 140px;
  width: 140px;
  justify-content: center;
  align-items: center;
  background-color: white;
  border-radius: 20px;
  elevation: 5;
  shadow-color: #000;
  shadow-offset: 1px 1px;
  shadow-opacity: 0.5;
  shadow-radius: 2px;
  margin: 5px;
`;

export const ItemImage = styled.Image`
  width: 100%;
  height: 50%;
`;

export const ItemName = styled.Text`
  padding-top: 10px;
  font-family: "montserrat-regular";
  font-size: ${FontSizes.text}px;
  text-align: center;
`;
