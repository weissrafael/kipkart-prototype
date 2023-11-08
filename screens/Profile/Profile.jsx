import React from "react";
import { Text } from "react-native";
import {
  Header,
  HeaderTitle, InfoContainer, InfoLabel, InfoRow,
  Page, SettingLabel, SettingRow, SettingsContainer,
} from "./Profile.styles";
import Footer from "../../components/Common/Footer/Footer";
import {colors} from "../../styles/styleGuide";
import {FontAwesome5} from "@expo/vector-icons";
import { FontAwesome } from '@expo/vector-icons';
import { AntDesign } from '@expo/vector-icons';
import { MaterialCommunityIcons } from '@expo/vector-icons';
import { Feather } from '@expo/vector-icons';
import Icon from "../../components/Common/Icon/Icon";




function Profile({ navigation }) {
  return (
    <Page>
      <Header>
        <HeaderTitle>Minha Conta</HeaderTitle>
      </Header>
      <SettingsContainer>
        <InfoContainer>
          <InfoRow>
            <FontAwesome5 name="user" size={14} color={colors.white} />
            <InfoLabel>{'  '}Maria de Fatima</InfoLabel>
          </InfoRow>
          <InfoRow>
            <Feather name="clock" size={14} color={colors.white} />
            <InfoLabel>{'  '}124 horas e 15 minutos</InfoLabel>
          </InfoRow>
          <InfoRow>
            <MaterialCommunityIcons name="food-apple-outline" size={14} color={colors.white} />
            <InfoLabel>{'  '}2580 itens comprados</InfoLabel>
          </InfoRow>
        </InfoContainer>
        <SettingRow>
          <Feather name="credit-card" size={14} color={colors.white} />
          <SettingLabel>{'  '}Meus cartões</SettingLabel>
        </SettingRow>
        <SettingRow>
          <Feather name="unlock" size={14} color={colors.white} />
          <SettingLabel>{'  '}Trocar senha</SettingLabel>
        </SettingRow>
        <SettingRow>
          <MaterialCommunityIcons name="logout" size={14} color={colors.white} />
          <SettingLabel>{'  '}Sair</SettingLabel>
        </SettingRow>
      </SettingsContainer>
      <Footer bgColor={colors.forestBlues} />
    </Page>
  );
}

export default Profile;
