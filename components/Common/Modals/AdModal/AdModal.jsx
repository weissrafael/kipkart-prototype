import FullScreenModal from "../../FullScreenModal/FullScreenModal";
import BackButton from "../../BackButton/BackButton";
import { colors } from "../../../../styles/styleGuide";
import React, { useState } from "react";
import {
  AdImage,
  Container,
  ModalContainer,
  OpenRulesButton,
  RulesText,
} from "./AdModal.styles";
import { Dimensions } from "react-native";
import RulesModal from "../RulesModal/RulesModal";

const modalPrize = require("../../../../assets/adsImages/modalPrizePromotion.png");

function AdModal({ isOpen, setModal }) {
  const [rulesModal, setRulesModal] = useState(false);

  function closeRulesModal() {
    setRulesModal(true);
  }
  return (
    <FullScreenModal
      styles={{ width: Dimensions.get("window").width * 0.9, padding: 0 }}
      height={`${Dimensions.get("window").width * 1.2}px`}
      backdrop
      modalVisible={isOpen}
    >
      <ModalContainer>
        <Container>
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
          <AdImage source={modalPrize} resizeMode="contain" />
          <OpenRulesButton onPress={closeRulesModal}>
            <RulesText>Clique aqui para ler as regras.</RulesText>
          </OpenRulesButton>
        </Container>
      </ModalContainer>
      <RulesModal modalOpen={rulesModal} setModalOpen={setRulesModal} />
    </FullScreenModal>
  );
}

export default AdModal;
