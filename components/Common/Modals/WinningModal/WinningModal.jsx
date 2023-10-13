import React from "react";

import FullScreenModal from "../../FullScreenModal/FullScreenModal";
import BackButton from "../../BackButton/BackButton";
import {
  ModalContainer,
  ImageContainer,
  Container,
  ModalImage,
  ArcBackground,
  Logo,
  ConfettiBackground,
  WinningModalText,
  TextContainer,
  BackContainer,
  WinningModalTitle,
} from "./WinningModal.styles";
import { colors } from "../../../../styles/styleGuide";

const logokip = require("../../../../assets/logokip.png");
const marketLogo = require("../../../../assets/marketLogos/bazinho.png");
const confetti = require("../../../../assets/confetti.png");

function WinningModal({ isOpen, setModal }) {
  return (
    <FullScreenModal height="450px" backdrop modalVisible={isOpen}>
      <ModalContainer>
        <Container>
          <ArcBackground />
          <ConfettiBackground source={confetti} resizeMode="cover" />
          <BackButton
            styles={{
              backgroundColor: colors.primary,
              width: 60,
              height: 60,
              borderRadius: 30,
              justifyContent: "center",
              alignItems: "center",
              top: 10,
              left: 10,
            }}
            onPress={() => setModal(false)}
          />
          <ImageContainer>
            <Logo source={logokip} resizeMode="contain" />
            <ModalImage source={marketLogo} resizeMode="contain" />
          </ImageContainer>
          <TextContainer>
            <WinningModalTitle>PARABÉNS</WinningModalTitle>
            <WinningModalText>
              Você acabou de ganhar o PREMIO, não feche esta mensagem! Vá até a
              recepção e resgate seu prêmio{" "}
            </WinningModalText>
          </TextContainer>
        </Container>
      </ModalContainer>
    </FullScreenModal>
  );
}

export default WinningModal;
