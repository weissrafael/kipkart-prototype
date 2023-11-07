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
import GenericErrorModal from "../../components/Common/Modals/GenericErrorModal/GenericErrorModal";
import { ActivityIndicatorContainer } from "../../components/SelectMarket/OutsideMarketPage/OutsideMarketPage.styles";
import { resetAll } from "../../store/actions/cart";
import Icon from "../../components/Common/Icon/Icon";
import {colors} from "../../styles/styleGuide";

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

  const purchaseList = () => {
    setLoading(true);
    setTimeout(() => {
      setLoading(false);
      setSuccess(true);
      dispatch(resetAll());
      setTimeout(() => {
        navigation.navigate("Scanner");
        setSuccess(false);
      }, 2500);
    }, 2500);
  };

  function timeConversion() {
    if (timeCount < 60) {
      return (
        <InfoText>
          <Icon size={14} color={colors.forestBlues} name="clock" />
          {` `}{timeCount} segundos
        </InfoText>
      );
    }
    return (
      <InfoText>
        <Icon size={14} color={colors.forestBlues} name="clock" />
        {` `}{(timeCount / 60).toFixed(0)} minutos
      </InfoText>
    );
  }

  return (
    <Page>
      <GreenBlock>
        <TitleContainer>
          <PageTitle>Revise suas compras!</PageTitle>
        </TitleContainer>
        <CircleContainer>
          <TotalTitle>R$ {total.toFixed(2)}</TotalTitle>
        </CircleContainer>
      </GreenBlock>
      <DarkGreenBlock>
        {!loading && !success && (
          <>
            <InfoContainer>
              {timeConversion()}
              <InfoText>
                {itemCount} itens{` `}
                <Icon name="food-apple" color={colors.forestBlues} size={20} />
              </InfoText>
            </InfoContainer>
            <ButtonsContainer>
              <FinishButton
                onPress={() => {
                  navigation.pop(1);
                }}
              >
                <ButtonText>Voltar</ButtonText>
              </FinishButton>
              <MainButton onPress={purchaseList}>
                <FinishButtonText>Finalizar</FinishButtonText>
              </MainButton>
            </ButtonsContainer>
            <ScrollView contentContainerStyle={{ justifyContent: "center" }}>
              <FinalList list={cartList} />
            </ScrollView>
          </>

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
            <ActivityIndicator size="large" color={colors.forestBlues} />
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
