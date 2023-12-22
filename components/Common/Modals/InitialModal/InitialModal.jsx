import React, { useState } from "react";
import FullScreenModal from "../../FullScreenModal/FullScreenModal";
import { colors } from "../../../../styles/styleGuide";
import { Clipboard, TouchableOpacity } from 'react-native';
import { MaterialIcons } from '@expo/vector-icons';
import {
  ModalContainer,
  ModalContent,
  TitleText,
  DescriptionText,
  BarcodeList,
  BarcodeItem,
  GotItButton, ItemName, ItemBarcode, ButtonText, LogoImage
} from "./InitialModal.styles";
import {} from "../../../../screens/Login/Login.styles";
import logo from "../../../../assets/logokip.png";


function InitialModal({ show, closeModal }) {
  const [copied, setCopied] = useState({
    7891035617959: false,
    7894321722016: false,
    7791293022635: false,
    7894900010015: false,
  });
  const mockedItems = [
    {
      name: "SBP Multi inseticida",
      price: 10,
      isEligibleInPrizePromotion: false,
      barcode: '7891035617959',
    },
{
      name: "Toddynho",
      price: 12.5,
      isEligibleInPrizePromotion: false,
      barcode: '7894321722016',
    },
    {
      name: "Desodorante Rexona Invisible",
      price: 12.5,
      isEligibleInPrizePromotion: false,
      barcode: '7791293022635',
    },
    {
      name: "Coca-Cola lata 350ml",
      price: 3.19,
      isEligibleInPrizePromotion: false,
      barcode: '7894900010015',
    },
  ];

  const copyToClipboard = (barcode) => {
    Clipboard.setString(barcode);
    setCopied({
      ...copied,
      [barcode]: true,
    });
    setTimeout(() => setCopied({
      ...copied,
      [barcode]: false,
    }), 2000); // Reset the state after 2 seconds
  };

  return (
    <FullScreenModal
      height="636px"
      backdrop
      modalVisible={show}
      setModalVisible={closeModal}
    >
      <ModalContainer>
        <ModalContent>
          <LogoImage source={logo} resizeMode="contain" />

          <TitleText>Welcome to Kipkart</TitleText>
          <DescriptionText>Since Kipkart is not connected to a market near you, this is a demonstration version.</DescriptionText>
          <DescriptionText>Products from your city will not appear on the list, but you can still use the scanner.</DescriptionText>
          <DescriptionText>Copy one of the barcodes bellow, they are from a local supermarket in Rio, Brazil.</DescriptionText>
          <BarcodeList>
            {mockedItems.map((item, index) => {
              const { barcode, name } = item;
              return (
              <BarcodeItem key={index}>
                <ItemName numberOfLines={1}>{name}</ItemName>
                <ItemBarcode>{barcode}</ItemBarcode>
                <TouchableOpacity onPress={() => copyToClipboard(barcode)}>
                  {copied[barcode] ? (
                    <MaterialIcons name="check-circle" size={24} color={colors.auroraGreen} />
                  ) : (
                    <MaterialIcons name="content-copy" size={24} color={colors.white} />
                  )}
                </TouchableOpacity>
              </BarcodeItem>
            )})}
          </BarcodeList>
          <GotItButton onPress={closeModal}>
            <ButtonText style={{ color: 'white' }}>Start Demonstration</ButtonText>
          </GotItButton>
        </ModalContent>
      </ModalContainer>
    </FullScreenModal>
  );
}

export default InitialModal;
