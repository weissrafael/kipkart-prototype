import React, {useCallback, useEffect, useRef, useState} from "react";
import {createStore} from "redux";
import {enableScreens} from "react-native-screens";
import {Provider} from "react-redux";
import {persistReducer, persistStore} from "redux-persist";
import {PersistGate} from "redux-persist/integration/react";
import {NavigationContainer} from "@react-navigation/native";
import AsyncStorage from "@react-native-async-storage/async-storage";
import {Platform, StatusBar, Text, View} from "react-native";
import * as SplashScreen from 'expo-splash-screen';
import * as Fonts from "expo-font";

import rootReducer from "./store/reducers/rootReducer";
import {KipKartNavigator} from "./navigation/KipKartNavigator";

StatusBar.setBarStyle("dark-content");

if (Platform.OS === "android") {
  StatusBar.setTranslucent(true);
  StatusBar.setBackgroundColor("transparent");
}

enableScreens();

Text.defaultProps = {
  ...Text.defaultProps,
  maxFontSizeMultiplier: 1,
};

const persistConfig = {
  key: "root",
  storage: AsyncStorage,
};
const persistedReducer = persistReducer(persistConfig, rootReducer);
const store = createStore(persistedReducer);
const persistor = persistStore(store);

SplashScreen.preventAutoHideAsync();

export default function App() {
  const [appReady, setAppReady] = useState(false)
  const [firstPage, setFirstPage] = useState("Tutorial");
  const navigationRef = useRef();
  const routeNameRef = useRef();

  useEffect(() => {
    (async () => {
      try {
        await Fonts.loadAsync({
          "montserrat-regular": require("./assets/fonts/Montserrat-Regular.ttf"),
          "montserrat-bold": require("./assets/fonts/Montserrat-Bold.ttf"),
        })
        setFirstPage("Login");
        await new Promise((resolve) => setTimeout(resolve, 2000));
      } catch (e) {
        console.warn(e)
      } finally {
        setAppReady(true)
      }
    })()
  }, [])

  const onLayout = useCallback(() => {
    if (appReady) {
      SplashScreen.hideAsync()
    }
  }, [appReady])

  if (!appReady) {
    return null
  }

  return (

    <>
      <Provider store={store}>

        <PersistGate loading={null} persistor={persistor}>

          <NavigationContainer
            ref={navigationRef}
            onReady={() => {
              routeNameRef.current = navigationRef.current.getCurrentRoute().name;
            }}
            onStateChange={async () => {
              const previousRouteName = routeNameRef.current;
              routeNameRef.current = navigationRef.current.getCurrentRoute().name;
            }}
          >

            <KipKartNavigator initialRouteName={firstPage} />

          </NavigationContainer>

        </PersistGate>

      </Provider>
      <View
        onLayout={onLayout}
      />
    </>

  );
}
