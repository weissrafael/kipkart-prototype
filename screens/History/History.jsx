import React, { useEffect, useState } from "react";
import { useSelector } from "react-redux";
import { StatusBar } from "react-native";
import {
    CameraSpacing,
    EmptySpot,
    Header,
    ListContainer,
    Page,
    StyledErrorContainer,
} from "./History.styles";
import GoBackButton from "../../components/Common/GoBackButton/GoBackButton";
import { colors } from "../../styles/styleGuide";
import SearchBar from "../../components/Common/SearchBar/SearchBar";
import PurchaseCard from "../../components/History/ListRow/PurchaseCard";
import api from "../../api/api";
import {
  LoaderContainer,
  LoaderImage,
} from "../PurchasedListDetails/PurchasedListDetails.styles";
import {
  ErrorImage,
  ErrorWrapper,
} from "../../components/Common/Modals/GenericErrorModal/GenericErrorModal.styles";
import { BoldTitle, ErrorSubtitle } from "../../styles/common.styles";
import Colors from "../../constants/Colors";
import Button from "../../components/Common/Button/Button";
import EmptyHistory from "../../components/History/EmptyHistory/EmptyHistory";
import EmptySearchResult from "../../components/History/EmptySearchResult/EmptySearchResult";
import { fireEvent, fireSearch } from "../../utils/analytics";
import Footer from "../../components/Common/Footer/Footer";

const gif = require("../../assets/gifs/bananaLoader.gif");
const genericErrorImage = require("../../assets/illustrations/generic-error.jpg");

function History({ navigation }) {
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(false);
  const [myLists, setMyLists] = useState([]);
  const [myFilteredLists, setMyFilteredLists] = useState([]);
  const token = useSelector((state) => state.userReducer.token);

  useEffect(() => {
    fetchShoppingLists();
  }, [token]);

  function filterOptions(value) {
    fireSearch(value);
    if (value.length > 0) {
      const newList = myLists.filter(
        (list) =>
          list.name.toLowerCase().includes(value.toLowerCase()) ||
          list.total.toFixed(0).toString() === value ||
          list.amountOfItems.toString() === value
      );
      setMyFilteredLists(newList);
    } else {
      setMyFilteredLists(myLists);
    }
  }

  function fetchShoppingLists() {
    setLoading(true);
    setTimeout(() => {
      const lists = [
        {
            id: 1,
            name: "Lista de compras do mês",
            total: 100,
            timeSpent: "1 hora e 25 minutos",
            amountOfItems: 10,
            marketLogoImage: 'assets/marketLogos/bazinho.png',
            createdAt: "2020-10-10",
            items: [
                {
                    name: "Toddynho",
                    quantity: 2,
                    price: 10.7,
                    barcode: 7894321722016,
                },
          ],
        },
        {
              id: 2,
              name: "Lista da Dona Maria",
              total: 100,
              amountOfItems: 10,
              timeSpent: "1 hora e 25 minutos",
              marketLogoImage: 'assets/marketLogos/bazinho.png',
              createdAt: "2020-10-10",
              items: [
                  {
                      name: "Toddynho",
                      quantity: 2,
                      price: 10.7,
                      barcode: 7894321722016,
                  },
              ],
          },
        {
              id: 3,
              name: "Lista da minha netinha querida",
              total: 100,
              amountOfItems: 10,
              timeSpent: "1 hora e 25 minutos",
              marketLogoImage: 'assets/marketLogos/bazinho.png',
              createdAt: "2020-10-10",
              items: [
                  {
                      name: "Toddynho",
                      quantity: 2,
                      price: 10.7,
                      barcode: 7894321722016,
                  },
              ],
          },
        {
              id: 4,
              name: "Churrasco do fim de semana",
              total: 100,
              amountOfItems: 10,
              timeSpent: "1 hora e 25 minutos",
              marketLogoImage: 'assets/marketLogos/bazinho.png',
              createdAt: "2020-10-10",
              items: [
                  {
                      name: "Toddynho",
                      quantity: 2,
                      price: 10.7,
                      barcode: 7894321722016,
                  },
              ],
          }
      ]
      setMyLists(lists);
      setMyFilteredLists(lists);
      setLoading(false);
      setError(false);
    }, 1700);
  }

  return (
    <Page>
      <StatusBar hidden />
      <CameraSpacing />
      <Header>
        <GoBackButton navigation={navigation} color={colors.darkMistyBlue} />
        {error ? (
          <EmptySpot />
        ) : (
          myLists.length !== 0 && (
            <SearchBar
              onChange={filterOptions}
              placeholder="Pesquisar"
              textColor={colors.mistyBlue}
              bgColor={colors.darkMistyBlue}
              placeHolderTextColor={colors.mistyBlue}
            />
          )
        )}
        <EmptySpot />
      </Header>
      {loading ? (
        <LoaderContainer>
          <LoaderImage source={gif} />
        </LoaderContainer>
      ) : error ? (
        <StyledErrorContainer>
          <ErrorWrapper>
            <ErrorImage source={genericErrorImage} resizeMode="contain" />
            <BoldTitle color={Colors.tertiary}>
              Ops, Não foi possível se conectar
            </BoldTitle>
            <ErrorSubtitle color={Colors.secondary}>
              Por favor verifique sua conexão com a internet e tente novamente
            </ErrorSubtitle>
            <Button
              styles={{
                width: "100%",
              }}
              onPress={fetchShoppingLists}
            >
              Recarregar
            </Button>
          </ErrorWrapper>
        </StyledErrorContainer>
      ) : myLists.length === 0 ? (
        <EmptyHistory />
      ) : myFilteredLists.length === 0 ? (
        <EmptySearchResult />
      ) : (
        <ListContainer>
          {myFilteredLists.map((list) => (
            <PurchaseCard list={list} navigation={navigation} key={list.id} />
          ))}
        </ListContainer>
      )}
      <Footer />
    </Page>
  );
}

export default History;
