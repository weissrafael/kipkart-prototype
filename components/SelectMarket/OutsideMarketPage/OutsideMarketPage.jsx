import MapView, { Marker, Polygon } from "react-native-maps";
import {
  ActivityIndicator,
  Dimensions,
  ScrollView,
  StyleSheet,
  Platform,
} from "react-native";
import { useNavigation } from "@react-navigation/native";
import React, { useEffect, useState } from "react";
import { useDispatch } from "react-redux";
import Colors from "../../../constants/Colors";
import {
  ActivityIndicatorContainer,
  ErrorSubtitle,
  ErrorTitle,
  ErrorWrapper,
  ListTitle,
  MarketListContainer,
} from "./OutsideMarketPage.styles";
import MarketCard from "../MarketCard/MarketCard";
import api from "../../../api/api";
import Button from "../../Common/Button/Button";
import { selectMarket } from "../../../store/actions/cart";

function OutsideMarketPage({ userLocation, coordinates, markerImage }) {
  const [markets, setMarkets] = useState([]);
  const [genericError, setGenericError] = useState(false);
  const [loading, setLoading] = useState(false);
  const dispatch = useDispatch();
  const navigation = useNavigation();

  useEffect(() => {
    fetchMarkets();
  }, []);

  function fetchMarkets() {
    setLoading(true);
    // correct url -> `/api/markets/closest?lat=${userLocation.lat}&long=${userLocation.long}&`
    api
      .get("/api/v1/markets")
      .then((resp) => {
        setMarkets(resp.data.result);
        setGenericError(false);
        setLoading(false);
      })
      .catch(() => {
        setGenericError(true);
        setLoading(false);
      });
  }

  function goToScanner(market) {
    dispatch(selectMarket(market));
    navigation.navigate("Scanner");
  }

  return (
    <>
      <MapView
        style={styles.map}
        region={{
          latitude: userLocation.lat,
          longitude: userLocation.long,
          latitudeDelta: 0.03,
          longitudeDelta: 0.03,
        }}
        showsUserLocation
      >
        <Polygon
          coordinates={coordinates}
          fillColor={`${Colors.primary}`}
          strokeColor="white"
        />
        {Platform.OS === "android" && (
          <Marker
            title="Bazinho Barra"
            image={markerImage}
            coordinate={{
              latitude: -21.13039447300178,
              longitude: -42.37661972287598,
            }}
            trackViewChanges={false}
          />
        )}
        {Platform.OS === "ios" && (
          <Marker
            coordinate={{
              latitude: -21.13039447300178,
              longitude: -42.37661972287598,
            }}
            trackViewChanges={false}
          />
        )}
      </MapView>
      <MarketListContainer>
        {!genericError && !loading && (
          <>
            <ListTitle>Selecione abaixo o mercado:</ListTitle>
            <ScrollView contentContainerStyle={{ ...styles.scrollView }}>
              {markets &&
                markets.map((market) => (
                  <MarketCard
                    onPress={() => goToScanner(market)}
                    key={market.id}
                    market={market}
                  />
                ))}
            </ScrollView>
          </>
        )}
        {genericError && !loading && (
          <ErrorWrapper>
            <ErrorTitle>Algo inesperado aconteceu</ErrorTitle>
            <ErrorSubtitle>
              Por favor tente novamente mais tarde ou mande um e-mail para
              atendimento@kipkart.com.br
            </ErrorSubtitle>
            <Button onPress={() => fetchMarkets()}> Recarregar </Button>
          </ErrorWrapper>
        )}
        {loading && (
          <ActivityIndicatorContainer>
            <ActivityIndicator size="large" color={Colors.primary} />
          </ActivityIndicatorContainer>
        )}
      </MarketListContainer>
    </>
  );
}

const styles = StyleSheet.create({
  map: {
    width: Dimensions.get("window").width,
    height: Dimensions.get("window").height / 2,
  },
  scrollView: {
    width: "100%",
    alignItems: "center",
    paddingLeft: 16,
    paddingRight: 16,
  },
});

export default OutsideMarketPage;
