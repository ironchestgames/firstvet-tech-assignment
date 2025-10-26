import useViewStyles from "@/hooks/useViewStyles";
import { View } from "react-native";
import checkboxStyles from "./Checkbox.styles";

const Checkbox = ({ checked }: { checked: boolean }) => {
  const styles = useViewStyles(checkboxStyles);

  return (
    <View style={styles.checkbox}>
      {checked && <View style={styles.checkboxCheck} />}
    </View>
  );
};

export default Checkbox;
