import useViewStyles from "@/hooks/useViewStyles";
import { useRef } from "react";
import { Animated, Pressable, Text } from "react-native";
import buttonStyles from "./Button.styles";

type ButtonProps = {
  label: string;
  onPress: () => void;
};

const Button = ({ label, onPress }: ButtonProps) => {
  const styles = useViewStyles(buttonStyles);

  // TODO: move animation stuff into some reusable place, and also clean up magic numbers
  const animation = useRef(new Animated.Value(1)).current;

  const handlePressIn = () => {
    Animated.spring(animation, {
      toValue: 0.85,
      useNativeDriver: true,
      speed: 50,
      bounciness: 100,
    }).start();
  };

  const handlePressOut = () => {
    Animated.spring(animation, {
      toValue: 1,
      useNativeDriver: true,
      speed: 30,
      bounciness: 10,
    }).start();
  };

  return (
    <Pressable
      onPress={onPress}
      onPressIn={handlePressIn}
      onPressOut={handlePressOut}
      accessibilityRole="button"
    >
      <Animated.View
        style={[
          styles.pressable,
          {
            transform: [{ scale: animation }],
            opacity: animation.interpolate({
              inputRange: [0.85, 1],
              outputRange: [0.7, 1],
            }),
          },
        ]}
      >
        <Text style={styles.text}>{label}</Text>
      </Animated.View>
    </Pressable>
  );
};

export default Button;
