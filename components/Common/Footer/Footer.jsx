import React from "react";
import { Entypo } from '@expo/vector-icons';

import {
  FooterButton,
  FooterContainer
} from "./Footer.styles";
import {useNavigation} from "@react-navigation/native";

function Footer() {
  const navigation = useNavigation();

  return (
    <FooterContainer>
      <FooterButton onPress={() => navigation.navigate("Scanner")}>
        <Entypo name="shopping-cart" size={24} color="black" />
      </FooterButton>
    </FooterContainer>
  );
}
export default Footer;
