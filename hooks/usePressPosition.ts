import { useState } from "react";
import { GestureResponderEvent } from "react-native";

const usePressPosition = () => {
  const [pressPosition, setPressPosition] = useState({ x: 0, y: 0 });

  const onPressPosition = (e: GestureResponderEvent) => {
    const { locationX, locationY } = e.nativeEvent;
    setPressPosition({ x: locationX, y: locationY });
  };

  return { pressPosition, onPressPosition };
};

export default usePressPosition;
