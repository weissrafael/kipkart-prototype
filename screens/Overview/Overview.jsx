import React, { useState } from "react";
import { ActivityIndicator, ScrollView } from "react-native";
import { useDispatch, useSelector } from "react-redux";
import {
  Page,
  MainButton,
  FinishButton,
  ButtonsContainer,
  CircleContainer,
  DarkGreenBlock,
  GreenBlock,
  InfoContainer,
  InfoText,
  PageTitle,
  TotalTitle,
  ButtonText,
  FinishButtonText,
  TitleContainer,
  PurchaseSuccessContainer,
  PurchaseSuccessText,
  PurchaseSuccessImage,
} from "./Overview.styles";
import FinalList from "../../components/Overview/FinalList/FinalList";
import api from "../../api/api";
import GenericErrorModal from "../../components/Common/Modals/GenericErrorModal/GenericErrorModal";
import Colors from "../../constants/Colors";
import { ActivityIndicatorContainer } from "../../components/SelectMarket/OutsideMarketPage/OutsideMarketPage.styles";
import { resetAll } from "../../store/actions/cart";
import { fireEvent } from "../../utils/analytics";

const purchaseSuccessImage = require("../../assets/illustrations/successfulPurchase.png");

function Overview({ navigation, route }) {
  const [genericError, setGenericError] = useState(false);
  const [success, setSuccess] = useState(false);
  const [loading, setLoading] = useState(false);
  const dispatch = useDispatch();

  const { total } = route.params;
  const { timeCount } = route.params;
  const { itemCount } = route.params;

  const cartList = useSelector((state) => state.cartReducer.cartList);
  const market = useSelector((state) => state.cartReducer.market);
  const token = useSelector((state) => state.userReducer.token);

  function toHHMMSS(secNum) {
    // const secNum = parseInt(timeInSeconds, 10); // don't forget the second param
    let hours = Math.floor(secNum / 3600);
    let minutes = Math.floor((secNum - hours * 3600) / 60);
    let seconds = secNum - hours * 3600 - minutes * 60;
    if (hours < 10) hours = `0${hours}`;
    if (minutes < 10) minutes = `0${minutes}`;
    if (seconds < 10) seconds = `0${seconds}`;
    return `${hours}:${minutes}:${seconds}`;
  }

  const purchaseList = () => {
    setLoading(true);
    const listData = {
      name: market.name,
      marketId: market.id,
      timeSpent: toHHMMSS(timeCount),
      items: Object.values(cartList).map(
        ({ name, price, quantity, imageUrl }) => ({
          name,
          price,
          imageUrl,
          quantity,
        })
      ),
    };
    api
      .post("/api/v1/purchase-lists", listData, {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      })
      .then(() => {
        setLoading(false);
        setSuccess(true);
        dispatch(resetAll());
        setTimeout(() => {
          navigation.navigate("Scanner");
          setSuccess(false);
        }, 2500);
        fireEvent(
          "purchase_list_success",
          "Overview",
          "success",
          "User successfully purchased a shopping list",
          listData
        );
      })
      .catch((e) => {
        setLoading(false);
        setGenericError(true);
        fireEvent(
          "purchase_list_failed",
          "Overview",
          "system error",
          "Something bad happen when trying to purchase list, API error",
          listData
        );
      });
  };

  function timeConversion() {
    if (timeCount < 60) {
      return <InfoText>Tempo: {timeCount} segundos</InfoText>;
    }
    return <InfoText>Tempo: {(timeCount / 60).toFixed(0)} minutos</InfoText>;
  }

  return (
    <Page>
      <GreenBlock>
        <TitleContainer>
          <PageTitle>Compra Finalizada</PageTitle>
        </TitleContainer>
        <CircleContainer>
          <TotalTitle>R$ {total.toFixed(2)}</TotalTitle>
        </CircleContainer>
      </GreenBlock>
      <DarkGreenBlock>
        {!loading && !success && (
          <ScrollView contentContainerStyle={{ justifyContent: "center" }}>
            <InfoContainer>
              {timeConversion()}
              <InfoText>Total: {itemCount} itens</InfoText>
            </InfoContainer>
            <ButtonsContainer>
              <MainButton
                onPress={() => {
                  fireEvent(
                    "list_not_finalized_yet",
                    "Overview",
                    "neutral",
                    "User wants to add more items to the list and will be redirect to Scanner Page"
                  );
                  navigation.pop(1);
                }}
              >
                <ButtonText>Voltar</ButtonText>
              </MainButton>
              <FinishButton onPress={purchaseList}>
                <FinishButtonText>Concluir</FinishButtonText>
              </FinishButton>
            </ButtonsContainer>
            <FinalList list={cartList} />
          </ScrollView>
        )}
        {!loading && success && (
          <PurchaseSuccessContainer>
            <PurchaseSuccessImage
              source={purchaseSuccessImage}
              resizeMode="contain"
            />
            <PurchaseSuccessText>
              Compra finalizada com sucesso!
            </PurchaseSuccessText>
            {/* <Button onPress={() => navigation.navigate('Scanner')}>Comprar mais</Button> */}
          </PurchaseSuccessContainer>
        )}
        {loading && (
          <ActivityIndicatorContainer>
            <ActivityIndicator size="large" color={Colors.primary} />
          </ActivityIndicatorContainer>
        )}
      </DarkGreenBlock>
      <GenericErrorModal
        show={genericError}
        setGenericError={setGenericError}
      />
    </Page>
  );
}

export default Overview;
