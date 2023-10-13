import React from "react";
import { Dimensions } from "react-native";
import {
  Page,
  PageImage,
  PageTitle,
  PageText,
  ImageContainer,
  TextContainer,
} from "./SpecialCasePage.styles";

const { width, height } = Dimensions.get("window");

const SpecialCasePage = ({ index, image, title, text }) => (
  <Page index={index} style={{ width, height }}>
    <ImageContainer>
      <PageImage source={image} resizeMode="contain" />
    </ImageContainer>
    <TextContainer>
      <PageTitle index={index}>{title}</PageTitle>
      <PageText index={index}>{text}</PageText>
    </TextContainer>
  </Page>
);

export default SpecialCasePage;
