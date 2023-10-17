import React, { useCallback, useEffect, useRef, useState } from "react";
import { ActivityIndicator, StyleSheet } from "react-native";
import { useKeepAwake } from "expo-keep-awake";
import { TouchableOpacity } from "react-native-gesture-handler";
import { useSelector, useDispatch } from "react-redux";
import { AntDesign, Entypo, MaterialCommunityIcons } from "@expo/vector-icons";
import Scanner from "../../components/ScannerComponents/Scanner/Scanner";
import {
  TabsRow,
  TotalValueText,
  Screen,
  FinishButton,
  ButtonText,
  FinishContainer,
  TabsContainer,
  AlertTitle,
  TotalText,
  LogoutTitle,
} from "./ScannerScreen.styles";
import ScrollToTopButton from "../../components/Common/ScrollToTopButton/ScrollToTopButton";
import ShoppingList from "../../components/ScannerComponents/ShoppingList/ShoppingList";
import LimitSetter from "../../components/ScannerComponents/LimitSetter/LimitSetter";
import { colors } from "../../styles/styleGuide";
import ErrorModal from "../../components/Common/ErrorModal/ErrorModal";
// import AdBanner from '../../components/Common/AdBanner/AdBanner'
import AdBubble from "../../components/Common/AdBubble/AdBubble";
import Menu from "../../components/Common/Menu/Menu";
import Icon from "../../components/Common/Icon/Icon";
import {
  addNewProduct,
  addProduct,
  removeFromList,
  removeFromMissing,
  removeProduct,
  resetAll,
  resetCart,
  resetLimit,
  resetMissingList,
  setLimit,
} from "../../store/actions/cart";
import Colors from "../../constants/Colors";
import GradientButton from "../../components/Common/GradientButton/GradientButton";
import GenericErrorModal from "../../components/Common/Modals/GenericErrorModal/GenericErrorModal";
import AlertModal from "../../components/Common/Modals/AlertModal/AlertModal";
import { logout } from "../../store/actions/user";
import TypeBarcodeButton from "../../components/ScannerComponents/ShoppingList/TypeBarcodeButton/TypeBarcodeButton";
import InputModal from "../../components/Common/Modals/InputModal/InputModal";
import api from "../../api/api";
import useKeyboardIsOpen from "../../hooks/useKeyboardIsOpen";
import { fireEvent } from "../../utils/analytics";
import WinningModal from "../../components/Common/Modals/WinningModal/WinningModal";
import AdModal from "../../components/Common/Modals/AdModal/AdModal";
import useSound from "../../hooks/useSound";
import ScannerSwitchButton from "../../components/Common/ScannerSwitchButton/ScannerSwitchButton";
import {
  IndicatorText,
  IndicatorTextContainer,
} from "../../components/ScannerComponents/ShoppingList/ShoppingList.styles";

const cashLimit = require("../../assets/menu-images/cashLimit.png");
const inventory = require("../../assets/menu-images/inventory.png");
const historyImage = require("../../assets/menu-images/clock.png");
const profile = require("../../assets/menu-images/profile.png");
const alertImage = require("../../assets/gifs/limitalert.gif");
const confirmLogout = require("../../assets/confirmLogout.png");
const signupImage = require("../../assets/signupImage.png");

const mockedItems = {
  7891035617959: {
    name: "SBP Multi inseticida",
    price: 10,
    isEligibleInPrizePromotion: false,
  },
  7894321722016: {
    name: "Toddynho",
    price: 12.5,
    isEligibleInPrizePromotion: false,
  },
};

function ScannerScreen({ navigation, route }) {
  const [isActive, setIsActive] = useState(false);
  const [total, setTotal] = useState(0);
  const [timeCount, setTimeCount] = useState(0); // in seconds
  const [activeTab, setActiveTab] = useState("list");
  const [inputValue, setInputValue] = useState("");
  const [isToTopVisible, setIsToTopVisible] = useState(false);
  const [modalVisible, setModalVisible] = useState(false);
  const [limitAlertVisible, setLimitAlertVisible] = useState(false);
  const [confirmLogoutModal, setConfirmLogoutModal] = useState(false);
  const [limitPageFocused, setLimitPageFocused] = useState(false);
  const [genericError, setGenericError] = useState(false);
  const [loginModal, setLoginModal] = useState(false);
  const [typeBarcodeModal, setTypeBarcodeModal] = useState(false);
  const [barcodeValue, setBarcodeValue] = useState("");
  const [barcodeError, setBarcodeError] = useState("");
  const [winningModal, setWinningModal] = useState(false);
  const [adModal, setAdModal] = useState(true);
  const [disabledButton, setDisabledButton] = useState(false);
  const [barcodeButtonLoading, setBarcodeButtonLoading] = useState(false);
  const [productIsLoading, setProductIsLoading] = useState(false);
  const [scanner, setScanner] = useState(true);

  const cartList = useSelector((state) => state.cartReducer.cartList);
  const limit = useSelector((state) => state.cartReducer.limit);
  const missingItems = useSelector((state) => state.cartReducer.missingItems);
  const user = useSelector((state) => state.userReducer.user);
  const market = useSelector((state) => state.cartReducer.market);
  const dispatch = useDispatch();

  const keyboardShown = useKeyboardIsOpen();
  const playSound = useSound();

  const resetValues = useCallback(() => {
    setTimeCount(0);
    dispatch(resetLimit());
    setInputValue("");
    dispatch(resetCart());
    dispatch(resetMissingList());
  }, [dispatch]);

  useKeepAwake();

  useEffect(() => {
    const list = Object.values(cartList);
    if (list.length > 0) {
      setIsActive(true);
      let newTotal = 0;
      list.forEach((item) => {
        const itemTotal = item.quantity * item.price;
        newTotal += itemTotal;
      });
      if (newTotal > limit) {
        setLimitAlertVisible(true);
      }
      setTotal(newTotal);
    } else {
      setTotal(0);
      setIsActive(false);
    }
  }, [cartList, limit]);

  useEffect(() => {
    if (route && route.params && route.params.shouldReset) resetValues();
  }, [resetValues, route, route.params]);

  useEffect(() => {
    const newTimer = setInterval(
      () => setTimeCount((OldTimeCount) => OldTimeCount + 1),
      1000
    );
    return () => {
      clearInterval(newTimer);
    };
  }, []);

  const scroll = useRef();

  const toTopHandler = useCallback(
    () => scroll.current.scrollToOffset({ offset: 0, animated: true }),
    []
  );

  const finishHandler = useCallback(() => {
    if (total !== 0) {
      const itemsArray = Object.values(cartList);
      let itemCount = 0;
      itemsArray.map((item) => {
        const { quantity, weight } = item;
        weight ? itemCount++ : (itemCount += quantity);
      });
      return navigation.navigate("Overview", {
        total,
        timeCount,
        itemCount,
      });
    }
    return null;
  }, [user, total, cartList, navigation, timeCount]);

  const scrollHandler = useCallback((event) => {
    if (event.nativeEvent.contentOffset.y > 150) {
      setIsToTopVisible(true);
    } else {
      setIsToTopVisible(false);
    }
  }, []);

  const addToList = useCallback(
    async (product) => {
      fireEvent(
        "product_scanned",
        "Scanner",
        "success",
        "User scanned a product",
        product
      );
      setActiveTab("list");
      dispatch(addNewProduct(product));
      setProductIsLoading(false);
      if (missingItems[product.barcode]) {
        dispatch(removeFromMissing(product));
      }
    },
    [dispatch, missingItems]
  );

  const addItem = useCallback(
    (item) => {
      const { barcode } = item;
      fireEvent(
        "product_added",
        "Scanner",
        "success",
        "User added a product via the plus button",
        item
      );
      dispatch(addProduct(barcode));
      if (missingItems[barcode]) {
        dispatch(removeFromMissing(barcode));
      }
    },
    [dispatch, missingItems]
  );

  const removeItem = useCallback(
    (item) => {
      const { barcode } = item;
      fireEvent(
        "product_removed",
        "Scanner",
        "success",
        "User removed a product via the minus button",
        item
      );
      dispatch(removeProduct(barcode));
    },
    [dispatch]
  );

  const removeItemFromList = useCallback(
    (item) => {
      const { barcode } = item;
      fireEvent(
        "product_removed_from_list",
        "Scanner",
        "success",
        "User removed a product via the trash icon",
        item
      );
      dispatch(removeFromList(barcode));
    },
    [dispatch]
  );

  const setNewLimit = useCallback(
    (newLimit) => {
      dispatch(setLimit(newLimit));
    },
    [dispatch]
  );

  const selectNewMarket = useCallback(() => {
    dispatch(resetCart());
    navigation.navigate("SelectMarket");
  }, [dispatch, navigation]);

  const handleLogout = useCallback(async () => {
    try {
      dispatch(resetAll());
      dispatch(logout());
      await navigation.navigate("Login");
      setConfirmLogoutModal(false);
    } catch (e) {
      setGenericError(true);
    }
  }, [dispatch, navigation]);

  const openLogoutModal = useCallback(() => {
    setConfirmLogoutModal(true);
  }, []);

  const openLimitTab = useCallback(() => {
    setActiveTab("limit");
  }, []);

  const weightFormat = useCallback((w) => {
    let newWeight;
    if (w >= 1) {
      newWeight = (Math.floor(100 * w) / 100).toFixed(2);
      return `${newWeight}kg`;
    }
    [, newWeight] = w.split(".");
    return `${newWeight}g`;
  }, []);

  const checkItemAlreadyInCart = useCallback(
    (barcode) => {
      return !!cartList[barcode];
    },
    [cartList]
  );

  const addItemByBarcode = useCallback(
    (barcode) => {
      // const marketId = market.id;
      if (disabledButton) {
        return;
      }
      if (checkItemAlreadyInCart(barcode) && barcode.slice(0, 2) === "20") {
        return;
      }
      setBarcodeButtonLoading(true);
      setDisabledButton(true);
      // api
      //   .get(`/api/v1/products/${barcode}?marketId=${marketId}`)
      //   .then((resp) => {
      setBarcodeError("");
      setTimeout(() => {
        setDisabledButton(false);
      }, 2000);
      const { name, price, weight, isEligibleInPrizePromotion } =
        mockedItems[barcode];
      if (isEligibleInPrizePromotion) {
        setWinningModal(true);
        playSound("prize");
      } else {
        playSound("bip");
      }
      setTypeBarcodeModal(false);
      setBarcodeButtonLoading(false);

      addToList({
        barcode,
        name,
        price,
        weight: weight ? weightFormat(weight) : false,
        imageUrl: `https://kipkart-images-db.s3.sa-east-1.amazonaws.com/${barcode}.jpg`,
      })
        .then(() => {
          setBarcodeValue("");
        })
        .catch(() => {
          setBarcodeButtonLoading(false);
        });
      // })
      // .catch((error) => {
      //   setDisabledButton(false);
      //   setBarcodeButtonLoading(false);
      //   if (error.response.data.result.includes("Barcode")) {
      //     setBarcodeError("Produto não encontrado");
      //   }
      // });
    },
    [
      addToList,
      checkItemAlreadyInCart,
      disabledButton,
      market.id,
      playSound,
      weightFormat,
    ]
  );

  const menuOptions = [
    {
      id: 1,
      name: "Limite de Gastos",
      onPress: openLimitTab,
      image: cashLimit,
    },
    {
      id: 2,
      name: "Últimas Compras",
      onPress: () => navigation.navigate("History"),
      image: historyImage,
    },
    {
      id: 3,
      name: "Trocar Mercado",
      onPress: selectNewMarket,
      image: inventory,
    },
    {
      id: 4,
      name: user ? "Trocar Usuário" : "Fazer Login",
      onPress: openLogoutModal,
      image: profile,
    },
  ];

  const limitModalText = (
    <AlertTitle fontSize={22} color={Colors.secondary}>
      Opa, você ja gastou
      <TotalText>
        {" "}
        R$
        {Number(total.toString().match(/^\d+(?:\.\d{0,2})?/))}
      </TotalText>
    </AlertTitle>
  );

  return (
    <Screen activeTab={activeTab}>
      {/* <AdBanner visible={adVisible} text="Amaciante Ypê Delicado" subText="para peles sensíveis - apenas 18,49" /> */}
      {/*<AdBubble />*/}
      <GenericErrorModal
        show={genericError}
        setGenericError={setGenericError}
      />
      {/* LOGOUT MODAL */}
      <AlertModal
        setModal={setConfirmLogoutModal}
        modalImage={confirmLogout}
        textComponent={<LogoutTitle>Tem certeza que deseja sair?</LogoutTitle>}
        isOpen={confirmLogoutModal}
      >
        <GradientButton
          color1={colors.primary}
          color2={colors.blueGrotto}
          textColor={colors.secondary}
          style={{ flex: 1, marginRight: 16 }}
          onPress={handleLogout}
        >
          Confirmar
        </GradientButton>
        <GradientButton
          color1={colors.primary}
          color2={colors.blueGrotto}
          textColor={colors.secondary}
          style={{ flex: 1 }}
          onPress={() => {
            setConfirmLogoutModal(false);
          }}
        >
          Cancelar
        </GradientButton>
      </AlertModal>
      {/* LIMIT MODAL */}
      <AlertModal
        modalImage={alertImage}
        isOpen={limitAlertVisible}
        textComponent={limitModalText}
        setModal={setLimitAlertVisible}
      >
        <GradientButton
          onPress={() => {
            dispatch(resetLimit());
            setInputValue("");
            setLimitAlertVisible(false);
          }}
          style={{ marginRight: 16, flex: 1 }}
        >
          continuar
        </GradientButton>
        <GradientButton
          onPress={() => {
            setModalVisible(false);
            dispatch(resetLimit());
            setLimitAlertVisible(false);
            finishHandler();
          }}
          style={{ flex: 1 }}
        >
          finalizar
        </GradientButton>
      </AlertModal>
      {/* LOGIN AND SIGNUP MODAL */}
      <AlertModal
        modalImage={signupImage}
        isOpen={loginModal}
        setModal={setLoginModal}
        textComponent={
          <AlertTitle>
            Antes de continuar, você precisa entrar com uma conta.
          </AlertTitle>
        }
      >
        <GradientButton
          color1={colors.primary}
          color2={colors.blueGrotto}
          textColor={colors.secondary}
          onPress={() => {
            setLoginModal(false);
            navigation.navigate("Login");
          }}
          style={{ marginRight: 16, flex: 1 }}
        >
          Entrar
        </GradientButton>
        <GradientButton
          color1={colors.primary}
          color2={colors.blueGrotto}
          textColor={colors.secondary}
          onPress={() => {
            setLoginModal(false);
            navigation.navigate("Signup");
          }}
          style={{ flex: 1 }}
        >
          Cadastrar
        </GradientButton>
      </AlertModal>
      <ErrorModal
        isOpen={modalVisible}
        closeModal={() => setModalVisible(false)}
        title="Oops!"
        text="Ocorreu um erro, tente novamente. Se os problemas persistirem,
              procure um gerente"
      />

      {/* TYPEBARCODE MODAL */}
      <InputModal
        setModalVisible={setTypeBarcodeModal}
        text="Digite abaixo o codigo de barras do produto:"
        isOpen={typeBarcodeModal}
        inputValue={barcodeValue}
        setInputValue={setBarcodeValue}
        barcodeError={barcodeError}
      >
        <GradientButton
          color1={colors.primary}
          color2={colors.blueGrotto}
          textColor={colors.secondary}
          disabled={disabledButton}
          onPress={() => {
            setTypeBarcodeModal(false);
            setBarcodeValue("");
            setBarcodeError("");
          }}
          style={{ marginRight: 16, flex: 1 }}
        >
          Cancelar
        </GradientButton>
        <GradientButton
          color1={colors.primary}
          color2={colors.blueGrotto}
          textColor={colors.secondary}
          onPress={() => addItemByBarcode(barcodeValue, setDisabledButton)}
          style={{ flex: 1 }}
        >
          {barcodeButtonLoading ? (
            <ActivityIndicator size="large" color={Colors.secondary} />
          ) : (
            "Confirmar"
          )}
        </GradientButton>
      </InputModal>

      {/* WINNER WINNER CHICKEN DINNER */}

      <WinningModal setModal={setWinningModal} isOpen={winningModal} />
      <AdModal setModal={setAdModal} isOpen={adModal} />
      {/* SCREEN */}
      {scanner && (
        <Screen>
          <Scanner
            addItemOnList={addToList}
            setModalVisible={setModalVisible}
            limitAlertVisible={limitAlertVisible}
            winningModalVisible={winningModal}
            setWinningModalVisible={setWinningModal}
            confirmLogoutModal={confirmLogoutModal}
            isScrolledDown={isToTopVisible}
            setProductLoading={setProductIsLoading}
            weightFormat={weightFormat}
          />
        </Screen>
      )}

      <TabsContainer scanner={scanner} activeTab={activeTab}>
        <TabsRow>
          <TouchableOpacity
            style={{
              ...styles.tab,
              ...styles.promotionTag,
              ...{ backgroundColor: colors.tertiary },
            }}
            onPress={() => navigation.navigate("Promotions")}
          >
            <Entypo name="price-tag" size={36} color="white" />
          </TouchableOpacity>
          <TouchableOpacity
            style={{
              ...styles.tab,
              ...styles.limitTab,
              ...{ backgroundColor: colors.secondary },
            }}
            onPress={() => setActiveTab("menu")}
          >
            {!limitPageFocused && <Icon name="menu" color="white" size={36} />}
            {limitPageFocused && (
              <MaterialCommunityIcons
                name="backburger"
                size={36}
                color="white"
              />
            )}
          </TouchableOpacity>
          <TouchableOpacity
            style={{
              ...styles.tab,
              ...{ backgroundColor: "white" },
            }}
            onPress={() => setActiveTab("list")}
            isActive={activeTab === "list"}
          >
            <TotalValueText isActive={total > 0}>
              R$ {total.toFixed(2)}
            </TotalValueText>
          </TouchableOpacity>
        </TabsRow>
        {activeTab === "list" && (
          <ShoppingList
            list={cartList}
            simultaneousHandlers={scroll}
            addItem={addItem}
            removeItem={removeItem}
            removeItemFromList={removeItemFromList}
            missingItems={missingItems}
            keyboardShown={keyboardShown}
            scrollRef={scroll}
            scrollHandler={scrollHandler}
            productIsLoading={productIsLoading}
          />
        )}
        {activeTab === "limit" && (
          <LimitSetter
            limit={limit}
            inputValue={inputValue}
            setInputValue={setInputValue}
            setLimit={setNewLimit}
            setActiveTab={setActiveTab}
            setLimitPageFocused={setLimitPageFocused}
          />
        )}
        {activeTab === "menu" && (
          <Menu
            setLoginModal={setLoginModal}
            user={user}
            options={menuOptions}
          />
        )}
      </TabsContainer>
      {activeTab === "list" && Object.keys(cartList).length > 0 && (
        <FinishContainer keyboardShown={keyboardShown}>
          <FinishButton onPress={finishHandler} isActive={isActive}>
            <ButtonText>Finalizar lista</ButtonText>
          </FinishButton>
          {isToTopVisible && <ScrollToTopButton toTopHandler={toTopHandler} />}
          <ScannerSwitchButton setScanner={setScanner} />
        </FinishContainer>
      )}
      {activeTab === "list" && (
        <TypeBarcodeButton setModalVisible={setTypeBarcodeModal} />
      )}
      {activeTab === "list" &&
        Object.entries(cartList).length <= 0 &&
        Object.entries(missingItems).length <= 0 && (
          <IndicatorTextContainer>
            <AntDesign name="arrowleft" size={32} color={colors.secondary} />
            <IndicatorText>
              ou aperte o botão para digitar o cód. de barras
            </IndicatorText>
          </IndicatorTextContainer>
        )}
    </Screen>
  );
}

const styles = StyleSheet.create({
  tab: {
    height: 60,
    justifyContent: "center",
    minWidth: 100,
    alignItems: "center",
    borderTopLeftRadius: 20,
  },
  limitTab: {
    position: "relative",
    left: 20,
    paddingRight: 20,
  },
  promotionTag: {
    position: "relative",
    left: 45,
    paddingRight: 20,
  },
});

export default ScannerScreen;
