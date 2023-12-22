import React, {useEffect} from "react";
import { FontAwesome5, MaterialIcons, Feather } from '@expo/vector-icons';
import { colors } from "../../../styles/styleGuide";

import {
  FooterButton,
  FooterContainer
} from "./Footer.styles";
import {useNavigation, useRoute} from "@react-navigation/native";

function Footer({ bgColor }) {
  const navigation = useNavigation();
  const route = useRoute();
  const [active, setActive] = React.useState(0);
  console.log(route.name)
  useEffect(() => {
    if (route.name === "Promotions") {
      setActive(0);
    } else if (route.name === "History") {
      setActive(1);
    } else if (route.name === "Scanner") {
      setActive(2);
    } else if (route.name === "Profile") {
      setActive(3);
    }
  }, []);

  return (
    <FooterContainer bgColor={bgColor}>
      <FooterButton onPress={() => navigation.navigate("Promotions")}>
        <MaterialIcons name="attach-money" size={34} color={active === 0 ? colors.melonMelody : colors.white} />
      </FooterButton>
      <FooterButton onPress={() => navigation.navigate("History")}>
        <MaterialIcons name="history" size={34} color={active === 1 ? colors.spray : colors.white} />
      </FooterButton>
      <FooterButton onPress={() => navigation.navigate("Scanner")}>
        <Feather name="shopping-cart" size={34} color={active === 2 ? colors.spray : colors.white} />
      </FooterButton>
      <FooterButton onPress={() => navigation.navigate("Profile")}>
        <FontAwesome5 name="user" size={34} color={active === 3 ? colors.spray : colors.white} />
      </FooterButton>
    </FooterContainer>
  );
}
export default Footer;
