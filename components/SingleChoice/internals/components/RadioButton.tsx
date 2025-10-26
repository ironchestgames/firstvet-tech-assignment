import useViewStyles from "@/hooks/useViewStyles";
import { View } from "react-native";
import radioButtonStyles from "./RadioButton.styles";

type RadioButtonProps = {
  selected: boolean;
};

const RadioButton = ({ selected }: RadioButtonProps) => {
  const styles = useViewStyles(radioButtonStyles);

  return (
    <View style={styles.radioButton}>
      {selected && <View style={styles.radioButtonCheck} />}
    </View>
  );
};

export default RadioButton;
