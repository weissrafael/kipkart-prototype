import React from "react";
import { createStackNavigator } from "@react-navigation/stack";
import ScannerScreen from "../screens/Scanner/ScannerScreen";
import Tutorial from "../screens/Tutorial/Tutorial";
import Overview from "../screens/Overview/Overview";
import Login from "../screens/Login/Login";
import History from "../screens/History/History";
import Signup from "../screens/Signup/Signup";
import Profile from "../screens/Profile/Profile";
import HistoryDetails from "../screens/HistoryDetails/HistoryDetails";
import Promotions from "../screens/Promotions/Promotions";

const StackNavigator = createStackNavigator();

export const KipKartNavigator = ({ initialRouteName }) => (
  <StackNavigator.Navigator
    initialRouteName={initialRouteName}
    screenOptions={{ headerShown: false }}
  >
    <StackNavigator.Screen name="Scanner" component={ScannerScreen} />
    <StackNavigator.Screen name="Tutorial" component={Tutorial} />
    <StackNavigator.Screen name="Overview" component={Overview} />
    <StackNavigator.Screen name="Login" component={Login} />
    <StackNavigator.Screen name="History" component={History} />
    <StackNavigator.Screen
      name="HistoryDetails"
      component={HistoryDetails}
    />
    <StackNavigator.Screen name="Signup" component={Signup} />
    <StackNavigator.Screen name="Promotions" component={Promotions} />
    <StackNavigator.Screen name="Profile" component={Profile} />
  </StackNavigator.Navigator>
);
