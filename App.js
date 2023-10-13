import React, { useRef, useState } from "react";
import * as Fonts from "expo-font";
import { createStore } from "redux";
import { enableScreens } from "react-native-screens";
import { Provider } from "react-redux";
import { persistStore, persistReducer } from "redux-persist";
import { PersistGate } from "redux-persist/integration/react";
import { NavigationContainer } from "@react-navigation/native";
import AsyncStorage from "@react-native-async-storage/async-storage";
import { Platform, StatusBar, Text } from "react-native";

import AppLoading from "expo-app-loading";
import rootReducer from "./store/reducers/rootReducer";
import { KipKartNavigator } from "./navigation/KipKartNavigator";
import getCredentials from "./utils/getCredentials";
import { fireCurrentScreen, setClientId } from "./utils/analytics";

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

export default function App() {
  const [appIsReady, setAppIsReady] = useState(false);
  const [firstPage, setFirstPage] = useState("Tutorial");
  const navigationRef = useRef();
  const routeNameRef = useRef();

  async function prepare() {
    try {
      await Fonts.loadAsync({
        "montserrat-regular": require("./assets/fonts/Montserrat-Regular.ttf"),
        "montserrat-bold": require("./assets/fonts/Montserrat-Bold.ttf"),
      });
      const { alreadyReadTutorial } = await getCredentials();
      await setClientId("dev-123");
      await new Promise((resolve) => setTimeout(resolve, 2000));
      if (alreadyReadTutorial) {
        setFirstPage("SelectMarket");
      }
    } catch (e) {
      console.warn(e);
    } finally {
      setAppIsReady(true);
    }
  }

  if (!appIsReady) {
    return (
      <AppLoading
        startAsync={prepare}
        onFinish={() => setAppIsReady(true)}
        onError={console.warn}
      />
    );
  }

  return (
    <Provider store={store}>
      <PersistGate loading={null} persistor={persistor}>
        <NavigationContainer
          ref={navigationRef}
          onReady={() => {
            routeNameRef.current = navigationRef.current.getCurrentRoute().name;
          }}
          onStateChange={async () => {
            const previousRouteName = routeNameRef.current;
            const currentRouteName =
              navigationRef.current.getCurrentRoute().name;
            if (previousRouteName !== currentRouteName) {
              await fireCurrentScreen(currentRouteName);
            }
            routeNameRef.current = currentRouteName;
          }}
        >
          <KipKartNavigator initialRouteName={firstPage} />
        </NavigationContainer>
      </PersistGate>
    </Provider>
  );
}
