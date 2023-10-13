import { Audio } from "expo-av";
import { useState, useEffect } from "react";

const bipSound = require("../assets/sounds/beep.mp3");
const prizeSound = require("../assets/sounds/prizeSound.mp3");

export default function useSound() {
  const [sound, setSound] = useState(null);

  async function playSound(s) {
    if (s === "prize") {
      const { sound: createdSound } = await Audio.Sound.createAsync(prizeSound);
      setSound(createdSound);
      await createdSound.playAsync();
    } else {
      const { sound: createdSound } = await Audio.Sound.createAsync(bipSound);
      setSound(createdSound);
      await createdSound.playAsync();
    }
  }

  useEffect(
    () =>
      sound
        ? () => {
            sound.unloadAsync();
          }
        : undefined,
    [sound]
  );

  return playSound;
}
