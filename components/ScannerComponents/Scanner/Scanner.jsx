import React, { useEffect, useState, useCallback } from "react";
import {
  View,
  StyleSheet,
  InteractionManager,
  Dimensions,
  ActivityIndicator,
} from "react-native";
import { Camera } from "expo-camera";
import { BarCodeScanner } from "expo-barcode-scanner";
import { useFocusEffect } from "@react-navigation/native";

import { useSelector } from "react-redux";
import Colors from "../../../constants/Colors";
import {
  CameraContainer,
  ContentContainer,
  QrMark,
  ScannerContainer,
  SquareRow,
} from "./Scanner.styles";
import { Title } from "../../../styles/common.styles";
import GradientButton from "../../Common/GradientButton/GradientButton";
import { colors } from "../../../styles/styleGuide";
import useSound from "../../../hooks/useSound";

const { width } = Dimensions.get("window");
const smallScreen = width <= 480;

const mockedItems = {
  7891035617959: {
    name: "SBP Multi inseticida",
    price: "10.99",
    weight: "0.3",
    isEligibleInPrizePromotion: false,
  },
};

const Scanner = ({
  addItemOnList,
  setModalVisible,
  readQR,
  weightFormat,
  setWinningModalVisible,
  winningModalVisible,
  limitAlertVisible,
  setProductLoading,
}) => {
  const [hasPermission, setHasPermission] = useState("asking");
  const [scanned, setScanned] = useState(false);
  const [isFocused, setIsFocused] = useState(false);

  const playSound = useSound();

  const market = useSelector((state) => state.cartReducer.market);
  const cartList = useSelector((state) => state.cartReducer.cartList);

  const askCameraForPermission = useCallback(() => {
    InteractionManager.runAfterInteractions(() => {
      (async () => {
        const { status } = await Camera.requestCameraPermissionsAsync();
        setHasPermission(status);
      })();
    });
  }, []);

  useEffect(() => {
    askCameraForPermission();
  }, [askCameraForPermission]);

  useFocusEffect(
    useCallback(() => {
      setIsFocused(true);
      return () => {
        setIsFocused(false);
      };
    }, [])
  );

  const checkItemAlreadyInCart = useCallback(
    (barcode) => {
      return !!cartList[barcode];
    },
    [cartList]
  );

  const handleBarCodeScanned = useCallback(
    (barcode) => {
      setScanned(true);
      if (checkItemAlreadyInCart(barcode.data)) {
        if (barcode.data.slice(0, 2) === "20") {
          setTimeout(() => setScanned(false), 1500);
          return;
        }
        playSound("bip");
        addItemOnList(cartList[barcode.data]);
        setTimeout(() => setScanned(false), 1500);
        return;
      }
      playSound("bip");
      setProductLoading(true);
      if(!mockedItems[barcode.data]) {
        setModalVisible(true);
        setTimeout(() => setScanned(false), 1500);
        return;
      }
      const { name, price, weight } =
        mockedItems[barcode.data];
      addItemOnList({
        barcode: barcode.data,
        name,
        price,
        weight: weight ? weightFormat(weight) : false,
        imageUrl: `https://kipkart-images-db.s3.sa-east-1.amazonaws.com/${barcode.data}.png`,
      });
      setTimeout(() => setScanned(false), 1500);
    },
    [
      addItemOnList,
      cartList,
      checkItemAlreadyInCart,
      market.id,
      playSound,
      setModalVisible,
      setProductLoading,
      setWinningModalVisible,
      weightFormat,
    ]
  );

  if (hasPermission === "asking") {
    return (
      <ScannerContainer style={{ backgroundColor: colors.secondary }}>
        <ActivityIndicator size={42} color={Colors.primary} />
      </ScannerContainer>
    );
  }

  if (hasPermission !== "granted") {
    return (
      <ScannerContainer>
        <CameraContainer hasPermission={hasPermission}>
          <ContentContainer>
            <Title
              color={Colors.secondary}
              style={{ width: smallScreen ? "90%" : "70%" }}
            >
              Nós precisamos utilizar a camera do seu celular para escanear os
              produtos, clique abaixo e permita o acesso
            </Title>
            <GradientButton
              buttonWidth="60%"
              style={{ marginTop: smallScreen ? 16 : 32 }}
              onPress={askCameraForPermission}
            >
              permitir acesso
            </GradientButton>
          </ContentContainer>
        </CameraContainer>
      </ScannerContainer>
    );
  }

  return (
    <ScannerContainer>
      <QrMark>
        <SquareRow>
          <View
            style={{
              ...styles.square,
              borderLeftColor: "red",
              borderTopColor: "red",
              borderLeftWidth: 2,
              borderTopWidth: 2,
            }}
          />
          <View
            style={{
              ...styles.square,
              borderRightColor: "red",
              borderTopColor: "red",
              borderTopWidth: 2,
              borderRightWidth: 2,
            }}
          />
        </SquareRow>
        <SquareRow style={{ alignItems: "flex-end" }}>
          <View
            style={{
              ...styles.square,
              borderLeftColor: "red",
              borderBottomColor: "red",
              borderLeftWidth: 2,
              borderBottomWidth: 2,
            }}
          />
          <View
            style={{
              ...styles.square,
              borderRightColor: "red",
              borderBottomColor: "red",
              borderRightWidth: 2,
              borderBottomWidth: 2,
            }}
          />
        </SquareRow>
      </QrMark>
      <CameraContainer>
        {isFocused && (
          <Camera
            onBarCodeScanned={
              limitAlertVisible ||
              winningModalVisible ||
              scanned
                ? undefined
                : handleBarCodeScanned
            }
            style={styles.camera}
            ratio="4:3"
            barCodeScannerSettings={{
              barCodeTypes: readQR
                ? [
                    BarCodeScanner.Constants.BarCodeType.ean13,
                    BarCodeScanner.Constants.BarCodeType.ean8,
                    BarCodeScanner.Constants.BarCodeType.qr,
                  ]
                : [
                    BarCodeScanner.Constants.BarCodeType.ean13,
                    BarCodeScanner.Constants.BarCodeType.ean8,
                  ],
            }}
          />
        )}
      </CameraContainer>
    </ScannerContainer>
  );
};

const styles = StyleSheet.create({
  instructionText: {
    textAlign: "center",
  },

  camera: {
    flex: 1,
  },

  buttonContainer: {
    width: 200,
    backgroundColor: Colors.tertiary,
    borderColor: "white",
  },

  buttonText: {
    color: "white",
    fontSize: 20,
  },

  square: {
    height: 60,
    width: 60,
    backgroundColor: "transparent",
  },
});

export default Scanner;
