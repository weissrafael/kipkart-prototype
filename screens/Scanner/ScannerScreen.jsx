import React, { useCallback, useEffect, useRef, useState } from "react";
import { ActivityIndicator } from "react-native";
import { useKeepAwake } from "expo-keep-awake";
import { useSelector, useDispatch } from "react-redux";
import Scanner from "../../components/ScannerComponents/Scanner/Scanner";
import {
  Screen,
  FinishButton,
  ButtonText,
  FinishContainer,
  ShoppingListTotal,
} from "./ScannerScreen.styles";
import ShoppingList from "../../components/ScannerComponents/ShoppingList/ShoppingList";
import { colors } from "../../styles/styleGuide";
import ErrorModal from "../../components/Common/ErrorModal/ErrorModal";
import {
  addNewProduct,
  addProduct,
  removeFromList,
  removeProduct,
  resetCart,
  resetLimit,
  resetMissingList,
} from "../../store/actions/cart";
import Colors from "../../constants/Colors";
import GradientButton from "../../components/Common/GradientButton/GradientButton";
import GenericErrorModal from "../../components/Common/Modals/GenericErrorModal/GenericErrorModal";
import TypeBarcodeButton from "../../components/ScannerComponents/ShoppingList/TypeBarcodeButton/TypeBarcodeButton";
import InputModal from "../../components/Common/Modals/InputModal/InputModal";
import useKeyboardIsOpen from "../../hooks/useKeyboardIsOpen";
import useSound from "../../hooks/useSound";
import ScannerSwitchButton from "../../components/Common/ScannerSwitchButton/ScannerSwitchButton";
import {
  ListTitle, ShoppingListHeader, TitleContainer, TypeBarcodeWrapper,
} from "../../components/ScannerComponents/ShoppingList/ShoppingList.styles";
import Footer from "../../components/Common/Footer/Footer";
import {Spacing} from "../../components/Common/Menu/Menu.styles";

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
  7791293022635: {
    name: "Desodorante Rexona Invisible",
    price: 12.5,
    isEligibleInPrizePromotion: false,
  },
  7894900010015: {
    name: "Coca-Cola lata 350ml",
    price: 3.19,
    isEligibleInPrizePromotion: false,
  },
};

function ScannerScreen({ navigation, route }) {
  const [isActive, setIsActive] = useState(false);
  const [total, setTotal] = useState(0);
  const [timeCount, setTimeCount] = useState(0); // in seconds
  const [activeTab, setActiveTab] = useState("list");
  const [isToTopVisible, setIsToTopVisible] = useState(false);
  const [modalVisible, setModalVisible] = useState(false);
  const [limitAlertVisible, setLimitAlertVisible] = useState(false);
  const [confirmLogoutModal, setConfirmLogoutModal] = useState(false);
  const [genericError, setGenericError] = useState(false);
  const [typeBarcodeModal, setTypeBarcodeModal] = useState(false);
  const [barcodeValue, setBarcodeValue] = useState("");
  const [barcodeError, setBarcodeError] = useState("");
  const [winningModal, setWinningModal] = useState(false);
  const [disabledButton, setDisabledButton] = useState(false);
  const [barcodeButtonLoading, setBarcodeButtonLoading] = useState(false);
  const [productIsLoading, setProductIsLoading] = useState(false);
  const [scanner, setScanner] = useState(true);

  const cartList = useSelector((state) => state.cartReducer.cartList);
  const limit = useSelector((state) => state.cartReducer.limit);
  const user = useSelector((state) => state.userReducer.user);
  const market = useSelector((state) => state.cartReducer.market);
  const dispatch = useDispatch();

  const keyboardShown = useKeyboardIsOpen();
  const playSound = useSound();

  const resetValues = useCallback(() => {
    setTimeCount(0);
    dispatch(resetLimit());
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

  const addToList = useCallback(
    async (product) => {
      setActiveTab("list");
      dispatch(addNewProduct(product));
      setProductIsLoading(false);
    },
    [dispatch]
  );

  const addItem = useCallback(
    (item) => {
      const { barcode } = item;
      dispatch(addProduct(barcode));
    },
    [dispatch]
  );

  const removeItem = useCallback(
    (item) => {
      const { barcode } = item;
      dispatch(removeProduct(barcode));
    },
    [dispatch]
  );

  const removeItemFromList = useCallback(
    (item) => {
      const { barcode } = item;
      dispatch(removeFromList(barcode));
    },
    [dispatch]
  );

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
      if (disabledButton) {
        return;
      }
      if (checkItemAlreadyInCart(barcode) && barcode.slice(0, 2) === "20") {
        return;
      }
      setBarcodeButtonLoading(true);
      setDisabledButton(true);
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

  const listIsEmpty = Object.keys(cartList).length <= 0;

  return (
    <Screen listIsEmpty={listIsEmpty}>
      <GenericErrorModal
        show={genericError}
        setGenericError={setGenericError}
      />
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
      {!listIsEmpty && (
        <ShoppingListHeader scannerIsOpen={scanner}>
          <ScannerSwitchButton setScanner={setScanner} scannerIsOpen={scanner} />
          <TitleContainer>
            <ListTitle>Meu Carrinho</ListTitle>
          </TitleContainer>
          <ShoppingListTotal>
            R$ {total.toFixed(2)}
          </ShoppingListTotal>
        </ShoppingListHeader>
      )}
      <ShoppingList
        list={cartList}
        addItem={addItem}
        removeItem={removeItem}
        removeItemFromList={removeItemFromList}
        keyboardShown={keyboardShown}
        productIsLoading={productIsLoading}
      />
      <TypeBarcodeWrapper>
        <TypeBarcodeButton
          setModalVisible={setTypeBarcodeModal}
          showFullButton={listIsEmpty}
        />
        {!listIsEmpty && (
          <>
            <Spacing />
            <FinishContainer keyboardShown={keyboardShown}>
              <FinishButton onPress={finishHandler} isActive={isActive}>
                <ButtonText>Finalizar Compra</ButtonText>
              </FinishButton>
            </FinishContainer>
          </>
        )}
      </TypeBarcodeWrapper>
      <Footer bgColor={colors.forestBlues} />
    </Screen>
  );
}

export default ScannerScreen;
