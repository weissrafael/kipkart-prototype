import FullScreenModal from "../../FullScreenModal/FullScreenModal";
import BackButton from "../../BackButton/BackButton";
import { colors } from "../../../../styles/styleGuide";
import React from "react";
import {
  Container,
  ModalContainer,
  RulesModalText,
  RulesTitle,
} from "./RulesModal.styles";
import { Dimensions } from "react-native";

function RulesModal({ modalOpen, setModalOpen }) {
  return (
    <FullScreenModal
      styles={{ width: Dimensions.get("window").width * 0.9, padding: 0 }}
      height={`${Dimensions.get("window").width * 1.2}px`}
      backdrop
      modalVisible={modalOpen}
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
            onPress={() => setModalOpen(false)}
          />
          <RulesTitle>Regras da promoção.</RulesTitle>
          <RulesModalText>
            {`A promoção do aplicativo KipKart tem prazo de validade de 01/09/2021 até 10/10/2021.

Para concorrer ao prêmio de R$100,00 
reais(Cem Reais) em produtos dentro do 
supermercado, o usuário deverá primeiramente baixar o aplicativo 
na Play Store ou na App Store.

Feito isso, o usuário começa a usar o 
aplicativo e durante o uso do mesmo, 
ao escanear o código de barra dos produtos, ele poderá ser contemplado com um aviso 
dizendo que ele foi o ganhador do premio de R$100,00 reais em produtos do supermercado.

A premiação só é válida se o usuário estiver dentro do supermercado e é imprescindível 
que o usuário ganhador mostre a tela com o aviso informando que ele é o ganhador. 

Nos casos onde o ganhador sem querer fechar o modal de premiação, o usuário 
poderá deixar o numero do telefone premiado com o gerente do mercado, que fará a verificação da veracidade da 
informação e entrará em contato com o ganhador posteriormente, garantindo a premiação.`}
          </RulesModalText>
        </Container>
      </ModalContainer>
    </FullScreenModal>
  );
}

export default RulesModal;
