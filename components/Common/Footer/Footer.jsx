import React from "react";
import { FontAwesome5, MaterialIcons, Feather } from '@expo/vector-icons';
import { colors } from "../../../styles/styleGuide";

import {
  FooterButton,
  FooterContainer
} from "./Footer.styles";
import {useNavigation} from "@react-navigation/native";

function Footer({ bgColor }) {
  const navigation = useNavigation();

  return (
    <FooterContainer bgColor={bgColor}>
      <FooterButton onPress={() => navigation.navigate("Promotions")}>
        <MaterialIcons name="attach-money" size={34} color={bgColor ? colors.white : colors.forestBlues} />
      </FooterButton>
      <FooterButton onPress={() => navigation.navigate("History")}>
        <MaterialIcons name="history" size={34} color={bgColor ? colors.white : colors.forestBlues} />
      </FooterButton>
      <FooterButton onPress={() => navigation.navigate("Scanner")}>
        <Feather name="shopping-cart" size={34} color={bgColor ? colors.white : colors.forestBlues} />
      </FooterButton>
      <FooterButton onPress={() => navigation.navigate("Scanner")}>
        <FontAwesome5 name="user" size={34} color={bgColor ? colors.white : colors.forestBlues} />
      </FooterButton>
    </FooterContainer>
  );
}
export default Footer;
