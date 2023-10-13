import { useFocusEffect } from "@react-navigation/native";
import { BackHandler } from "react-native";

function useBackHandler(backAction) {
  useFocusEffect(() => {
    const backHandler = BackHandler.addEventListener(
      "hardwareBackPress",
      backAction
    );

    return () => backHandler.remove();
  });
}

export default useBackHandler;
