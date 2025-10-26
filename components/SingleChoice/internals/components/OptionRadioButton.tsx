import Container from "@/components/Container";
import Paragraph from "@/components/Paragraph";
import PawPrint from "@/components/PawPrint";
import usePressPosition from "@/hooks/usePressPosition";
import { GestureResponderEvent, Pressable } from "react-native";
import RadioButton from "./RadioButton";

type OptionRadioButtonProps = {
  text: string;
  selected: boolean;
  onPress: () => void;
};

const OptionRadioButton = ({
  text,
  selected,
  onPress,
}: OptionRadioButtonProps) => {
  const { pressPosition, onPressPosition } = usePressPosition();

  const onInternalPress = (e: GestureResponderEvent) => {
    onPressPosition(e);
    onPress();
  };

  return (
    <Pressable
      onPress={onInternalPress}
      accessibilityRole="radio"
      accessibilityState={{ selected }}
    >
      <Container.ListItem>
        {selected && <PawPrint x={pressPosition.x} y={pressPosition.y} />}
        <Paragraph>{text}</Paragraph>
        <RadioButton selected={selected} />
      </Container.ListItem>
    </Pressable>
  );
};

export default OptionRadioButton;
