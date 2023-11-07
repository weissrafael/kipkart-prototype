import React, { useEffect, useState } from "react";
import { useSelector } from "react-redux";
import { StatusBar } from "react-native";
import {
  CameraSpacing,
  ListContainer,
  Page, PageTitle, SearchContainer,
  StyledErrorContainer,
} from "./History.styles";
import { colors } from "../../styles/styleGuide";
import SearchBar from "../../components/Common/SearchBar/SearchBar";
import PurchaseCard from "../../components/History/ListRow/PurchaseCard";
import {
  LoaderContainer,
  LoaderImage,
} from "../HistoryDetails/HistoryDetails.styles";
import {
  ErrorImage,
  ErrorWrapper,
} from "../../components/Common/Modals/GenericErrorModal/GenericErrorModal.styles";
import {BoldTitle, ErrorSubtitle, Title} from "../../styles/common.styles";
import Colors from "../../constants/Colors";
import Button from "../../components/Common/Button/Button";
import EmptyHistory from "../../components/History/EmptyHistory/EmptyHistory";
import EmptySearchResult from "../../components/History/EmptySearchResult/EmptySearchResult";
import Footer from "../../components/Common/Footer/Footer";
import {Spacing} from "../../components/Common/Menu/Menu.styles";

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
    const lists = [
      {
        id: 1,
        name: "Lista de compras do mês",
        total: 108.90,
        timeSpent: "1 hora e 25 minutos",
        amountOfItems: 10,
        marketLogoImage: 'assets/marketLogos/bazinho.png',
        createdAt: "08 / 02 / 2023",
        items: [
          {
            name: "Toddynho",
            quantity: 2,
            price: 10.7,
            barcode: 7894321722016,
          },
          {
            name: "Desodorante Rexona Invisible",
            price: 6.5,
            quantity: 3,
            barcode: 7791293022635
          },
          {
            name: "SBP Multi inseticida",
            price: 12.5,
            quantity: 1,
            barcode: 7891035617959
          },
          {
            name: "Coca-Cola lata 350ml",
            price: 4.5,
            quantity: 6,
            barcode: 7894900010015
          },
        ],
      },
      {
        id: 2,
        name: "Lista da Dona Maria",
        total: 587.55,
        amountOfItems: 32,
        timeSpent: "1 hora e 25 minutos",
        marketLogoImage: 'assets/marketLogos/bazinho.png',
        createdAt: "08 / 01 / 2023",
        items: [
          {
            name: "Toddynho",
            quantity: 2,
            price: 10.7,
            barcode: 7894321722016,
          },
          {
            name: "Desodorante Rexona Invisible",
            price: 6.5,
            quantity: 3,
            barcode: 7791293022635
          },
          {
            name: "SBP Multi inseticida",
            price: 12.5,
            quantity: 1,
            barcode: 7891035617959
          },
          {
            name: "Coca-Cola lata 350ml",
            price: 4.5,
            quantity: 6,
            barcode: 7894900010015
          },
        ],
      },
      {
        id: 3,
        name: "Compras do Natal",
        total: 110.95,
        amountOfItems: 18,
        timeSpent: "1 hora e 25 minutos",
        marketLogoImage: 'assets/marketLogos/bazinho.png',
        createdAt: "20 / 12 / 2022",
        items: [
          {
            name: "Toddynho",
            quantity: 2,
            price: 10.7,
            barcode: 7894321722016,
          },
          {
            name: "Desodorante Rexona Invisible",
            price: 6.5,
            quantity: 3,
            barcode: 7791293022635
          },
          {
            name: "SBP Multi inseticida",
            price: 12.5,
            quantity: 1,
            barcode: 7891035617959
          },
          {
            name: "Coca-Cola lata 350ml",
            price: 4.5,
            quantity: 6,
            barcode: 7894900010015
          },
        ],
      },
      {
        id: 4,
        name: "Churrasco do fim de semana",
        total: 129.30,
        amountOfItems: 13,
        timeSpent: "1 hora e 25 minutos",
        marketLogoImage: 'assets/marketLogos/bazinho.png',
        createdAt: "13 / 12 / 2022",
        items: [
          {
            name: "Toddynho",
            quantity: 2,
            price: 10.7,
            barcode: 7894321722016,
          },
          {
            name: "Desodorante Rexona Invisible",
            price: 6.5,
            quantity: 3,
            barcode: 7791293022635
          },
          {
            name: "SBP Multi inseticida",
            price: 12.5,
            quantity: 1,
            barcode: 7891035617959
          },
          {
            name: "Coca-Cola lata 350ml",
            price: 4.5,
            quantity: 6,
            barcode: 7894900010015
          },
        ],
      }
    ]
    setMyLists(lists);
    setMyFilteredLists(lists);
    setLoading(false);
    setError(false);
  }

  return (
    <Page>
      <StatusBar hidden />
      <CameraSpacing />
      {myLists.length !== 0 && (
        <SearchContainer>
          <PageTitle color={colors.white}>Histórico</PageTitle>
          <Spacing />
          <Spacing />
          <Spacing />
          <Spacing />
          <Spacing />
          <SearchBar
            onChange={filterOptions}
            placeholder="Pesquisar"
            textColor={colors.forestBlues}
            bgColor={colors.white}
            placeHolderTextColor={colors.forestBlues}
          />
        </SearchContainer>
      )}
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
