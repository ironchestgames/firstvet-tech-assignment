import Container from "@/components/Container";
import Paragraph from "@/components/Paragraph";
import PawPrint from "@/components/PawPrint";
import usePressPosition from "@/hooks/usePressPosition";
import { GestureResponderEvent, Pressable } from "react-native";
import Checkbox from "./Checkbox";

type OptionCheckboxProps = {
  text: string;
  checked: boolean;
  onPress: () => void;
};

const OptionCheckbox = ({ text, checked, onPress }: OptionCheckboxProps) => {
  const { pressPosition, onPressPosition } = usePressPosition();

  const onInternalPress = (e: GestureResponderEvent) => {
    onPressPosition(e);
    onPress();
  };

  return (
    <Pressable
      onPress={onInternalPress}
      accessibilityRole="checkbox"
      accessibilityState={{ checked }}
    >
      <Container.ListItem>
        {checked && <PawPrint x={pressPosition.x} y={pressPosition.y} />}
        <Paragraph>{text}</Paragraph>
        <Checkbox checked={checked} />
      </Container.ListItem>
    </Pressable>
  );
};

export default OptionCheckbox;
