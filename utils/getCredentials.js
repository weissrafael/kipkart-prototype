import AsyncStorage from "@react-native-async-storage/async-storage";

export default async function getCredentials() {
  try {
    const alreadyReadTutorial = await AsyncStorage.getItem(
      "alreadyReadTutorial"
    );
    return {
      alreadyReadTutorial,
    };
  } catch (e) {
    return {};
  }
}
