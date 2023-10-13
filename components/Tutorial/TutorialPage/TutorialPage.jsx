import React from "react";
import { Dimensions, Animated } from "react-native";
import {
  Page,
  PageImage,
  PageTitle,
  PageText,
  ImageContainer,
  TextContainer,
  ButtonsCol,
} from "./TutorialPage.styles";

const { width, height } = Dimensions.get("window");

const TutorialPage = ({
  index,
  image,
  title,
  text,
  specialCase,
  children,
  buttonsPage,
}) => (
  <Animated.View
    style={{
      width,
      height,
      flex: 1,
      alignItems: "center",
      justifyContent: "center",
    }}
  >
    <ImageContainer index={index}>
      <PageImage
        buttonsPage={buttonsPage}
        source={image}
        resizeMode="contain"
      />
    </ImageContainer>
    <TextContainer
      buttonsPage={buttonsPage}
      specialCase={specialCase}
      index={index}
    >
      <PageTitle
        buttonsPage={buttonsPage}
        specialCase={specialCase}
        index={index}
      >
        {title}
      </PageTitle>
      <PageText
        buttonsPage={buttonsPage}
        specialCase={specialCase}
        index={index}
      >
        {text}
      </PageText>
      <ButtonsCol buttonsPage={buttonsPage}>{children}</ButtonsCol>
    </TextContainer>
  </Animated.View>
);

export default TutorialPage;
