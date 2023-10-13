import React from "react";

import {
  Page,
  Sky,
  Ground,
  MarketImage,
  LogoImage,
  WelcomeText,
  GroundTitle,
  GroundText,
} from "./TutorialLandingPage.styles";
import NavigationCircles from "../NavigationCircles/NavigationCircles";

const logo = require("../../../assets/logokip.png");
const market = require("../../../assets/tutorial-market.png");

function TutorialLandingPage() {
  return (
    <Page>
      <Sky>
        <LogoImage source={logo} resizeMode="contain" />
        <WelcomeText>Bem vindo ao Bazinho</WelcomeText>
        <MarketImage source={market} resizeMode="contain" />
      </Sky>
      <Ground>
        <GroundTitle>Vamos começar!</GroundTitle>
        <GroundText>
          Para sua comodidade, veja como usar o suporte do celular
        </GroundText>
      </Ground>
      <NavigationCircles activePage={1} />
    </Page>
  );
}

export default TutorialLandingPage;
