import * as Analytics from "expo-firebase-analytics";

export async function setClientId(clientId) {
  await Analytics.setClientId(clientId);
}

export async function fireUser(user) {
  await Analytics.setUserId(user.id);
  await Analytics.setUserProperties(user);
}

export async function fireLogin() {
  await Analytics.logEvent("login");
}

export async function fireSearch(term) {
  await Analytics.logEvent("search", term);
}

export async function tutorialBegin() {
  await Analytics.logEvent("tutorial_begin");
}

export async function tutorialComplete() {
  await Analytics.logEvent("tutorial_complete");
}

export async function fireEvent(name, screen, type, purpose, additionalParams) {
  await Analytics.logEvent(name, {
    name,
    screen,
    type,
    purpose,
    ...additionalParams,
  });
}

export async function fireCurrentScreen(screenName) {
  await Analytics.setCurrentScreen(screenName);
}
