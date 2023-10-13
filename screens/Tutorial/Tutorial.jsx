import React, { useEffect, useRef } from "react";
import { FlatList, StatusBar, Animated } from "react-native";
import AsyncStorage from "@react-native-async-storage/async-storage";
import { Screen } from "./Tutorial.styles";
import TutorialPage from "../../components/Tutorial/TutorialPage/TutorialPage";
import Indicators from "../../components/Tutorial/Indicators/Indicators";
import GradientButton from "../../components/Common/GradientButton/GradientButton";
import { colors } from "../../styles/styleGuide";
import { tutorialBegin, tutorialComplete } from "../../utils/analytics";

const Tutorial = ({ navigation }) => {
  const scrollX = useRef(new Animated.Value(0)).current;

  useEffect(() => {
    tutorialBegin();
  }, []);

  const alreadyReadTutorialStorage = async () => {
    try {
      await AsyncStorage.setItem("alreadyReadTutorial", "true");
      await tutorialComplete();
    } catch (e) {
      console.log(e);
    }
  };

  const pages = [
    {
      key: "1",
      image: require("../../assets/tutorial/firstImage.png"),
      title: "Transforme seu celular em um super ajudante de compras.",
      text:
        "O KipKart soma o total colocado no carrinho, te avisa quanto está gastando, guarda seu histórico de " +
        "compras e muito mais!",
      specialCase: false,
    },
    {
      key: "2",
      image: require("../../assets/tutorial/secondImage.png"),
      title: "Simples e prático de usar.",
      text: "Seu celular agora pode escânear os produtos do mercado!",
      specialCase: false,
    },
    {
      key: "3",
      image: require("../../assets/tutorial/thirdImage.png"),
      title: "Veio para facilitar a sua vida.",
      text: " Nós fazemos as contas, você faz as compras.",
      specialCase: false,
    },
    {
      key: "4",
      image: require("../../assets/tutorial/fourthImage.png"),
      title: "Você sempre no controle.",
      text: "Suas compras serão salvas para revê-las quando quiser.",
      specialCase: true,
    },
    {
      key: "5",
      image: require("../../assets/tutorial/fifthImage.png"),
      title: "E para te deixar mais confortável:",
      text:
        "Use o suporte do carrinho. Para isso pegue a sua plaquinha na recepção e cole atrás do seu celular, " +
        "é gratis!",
      specialCase: false,
    },
    {
      key: "6",
      image: require("../../assets/tutorial/sixthImage.png"),
      title: "Ficou ainda mais prático",
      text: "Fixando o seu celular no imã do Holder você pode aproveitar e curtir a sua ida ao mercado.",
      specialCase: false,
    },
  ];

  function renderPage({ item }) {
    if (item.specialCase) {
      return (
        <TutorialPage
          specialCase
          key={item.key}
          index={item.key}
          image={item.image}
          text={item.text}
          title={item.title}
        />
      );
    }
    if (item.key === "6") {
      return (
        <TutorialPage
          buttonsPage
          key={item.key}
          index={item.key}
          image={item.image}
          text={item.text}
          title={item.title}
        >
          <GradientButton
            color1={colors.primary}
            color2={colors.blueGrotto}
            textColor={colors.secondary}
            style={{ marginTop: 32 }}
            onPress={() => {
              alreadyReadTutorialStorage();
              navigation.navigate("SelectMarket");
            }}
          >
            Vamos lá
          </GradientButton>
        </TutorialPage>
      );
    }
    return (
      <TutorialPage
        index={item.key}
        image={item.image}
        text={item.text}
        title={item.title}
      />
    );
  }

  return (
    <Screen>
      <StatusBar hidden />
      <FlatList
        data={pages}
        horizontal
        scrollEventThrottle={32}
        onScroll={Animated.event(
          [{ nativeEvent: { contentOffset: { x: scrollX } } }],
          { useNativeDriver: false }
        )}
        showsHorizontalScrollIndicator={false}
        pagingEnabled
        keyExtractor={(item) => item.key}
        renderItem={renderPage}
      />
      <Indicators scrollX={scrollX} pages={pages} />
    </Screen>
  );
};

export default Tutorial;
