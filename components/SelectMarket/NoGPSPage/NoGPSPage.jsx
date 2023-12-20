import {
  Linking,
  Platform,
  FlatList,
  SafeAreaView,
  ActivityIndicator,
} from "react-native";
import * as IntentLauncher from "expo-intent-launcher";
import React, { useState } from "react";

import { useNavigation } from "@react-navigation/native";
import { useDispatch } from "react-redux";
import GradientButton from "../../Common/GradientButton/GradientButton";
import {
  NoGPSContainer,
  NoGPSImage,
  NoGPSTitle,
  FooterImage,
  IndicatorContainer,
} from "./NoGPSPage.styles";

import CityRow from "./CityRow/CityRow";
import FullScreenModal from "../../Common/FullScreenModal/FullScreenModal";
import ModalHeader from "../../Common/ModalHeader/ModalHeader";
import { colors } from "../../../styles/styleGuide";
import api from "../../../api/api";
import { selectMarket } from "../../../store/actions/cart";
import MarketCard from "../MarketCard/MarketCard";
import Colors from "../../../constants/Colors";
import GenericErrorModal from "../../Common/Modals/GenericErrorModal/GenericErrorModal";

const noLocationImage = require("../../../assets/locationNotFound.png");
const footerCity = require("../../../assets/citybg2.png");

const NoGPSPage = ({ resetMarketSelectionSettings, market }) => {
  const [markets, setMarkets] = useState([]);
  const [loading, setLoading] = useState(false);
  const [genericError, setGenericError] = useState(false);
  const [selectedCity, setSelectedCity] = useState({
    name: "",
    cityId: "",
  });
  const [cityModalIsOpen, setCityModalIsOpen] = useState(false);
  const [marketModalIsOpen, setMarketModalIsOpen] = useState(false);
  const navigation = useNavigation();
  const dispatch = useDispatch();

  const renderCity = ({ item }) => (
    <CityRow
      onPress={() => {
        setCityModalIsOpen(false);
        setSelectedCity(item);
        fetchMarkets(item.id);
        setMarketModalIsOpen(true);
      }}
      cityName={item.name}
    />
  );

  function fetchMarkets(id) {
    setLoading(true);
    api
      .get(`/api/v1/markets?cityId=${id}`)
      .then((resp) => {
        setMarkets(resp.data.result);
        setLoading(false);
        setGenericError(false);
      })
      .catch(() => {
        setLoading(false);
        setGenericError(true);
        setMarketModalIsOpen(false);
      });
  }

  const renderMarket = ({ item }) => (
    <MarketCard
      onPress={() => {
        dispatch(selectMarket(item));
        setMarketModalIsOpen(false);
        navigation.navigate("Scanner");
      }}
      market={item}
    />
  );

  const cities = [{ name: "Muriaé", id: "3143906" }];

  return (
    <>
      <FullScreenModal
        setModalVisible={setCityModalIsOpen}
        modalVisible={cityModalIsOpen}
      >
        <ModalHeader setModalVisible={setCityModalIsOpen}>Cidades:</ModalHeader>
        <SafeAreaView
          style={{
            width: "100%",
            paddingBottom: 160,
          }}
        >
          <FlatList
            data={cities}
            renderItem={renderCity}
            keyExtractor={(item) => item.id}
          />
        </SafeAreaView>
        <FooterImage source={footerCity} />
      </FullScreenModal>
      <FullScreenModal
        overFooter
        setModalVisible={setMarketModalIsOpen}
        modalVisible={marketModalIsOpen}
      >
        <ModalHeader dark setModalVisible={setMarketModalIsOpen}>
          Mercados de {selectedCity.name}:
        </ModalHeader>
        <SafeAreaView
          style={{
            width: "100%",
            height: "100%",
            paddingBottom: 200,
            backgroundColor: colors.secondary,
          }}
        >
          {loading ? (
            <IndicatorContainer>
              <ActivityIndicator size="large" color={Colors.primary} />
            </IndicatorContainer>
          ) : (
            <FlatList
              data={markets}
              renderItem={renderMarket}
              keyExtractor={(item) => item.id}
            />
          )}
        </SafeAreaView>
        <FooterImage source={footerCity} />
      </FullScreenModal>
      <NoGPSContainer>
        <NoGPSImage resizeMode="contain" source={noLocationImage} />
        <NoGPSTitle>
          Opa, não conseguimos localizar sua área, parece que seu GPS não está
          ativo!
        </NoGPSTitle>
        {/* <PickersContainer> */}
        <GradientButton
          onPress={() => {
            resetMarketSelectionSettings();
            Platform.OS === "android"
              ? IntentLauncher.startActivityAsync(
                  IntentLauncher.ACTION_LOCATION_SOURCE_SETTINGS
                )
              : Linking.openURL("app-settings:");
          }}
          icon="map-marker-radius"
          resizeMode="contain"
          color1={colors.primary}
          color2={colors.blueGrotto}
          textColor={colors.secondary}
          style={{
            marginBottom: 32,
          }}
        >
          ativar meu gps
        </GradientButton>
        {/*    <Divider>
          <DividerText>Ou</DividerText>
        </Divider> */}
        <GradientButton
          onPress={() => setCityModalIsOpen(true)}
          icon="map-search"
          resizeMode="contain"
          color1={colors.primary}
          color2={colors.blueGrotto}
          textColor={colors.secondary}
        >
          selecionar cidade
        </GradientButton>
      </NoGPSContainer>
      <GenericErrorModal
        show={genericError}
        setGenericError={setGenericError}
      />
    </>
  );
};

export default NoGPSPage;
