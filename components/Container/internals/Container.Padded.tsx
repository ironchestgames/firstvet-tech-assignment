import useViewStyles from "@/hooks/useViewStyles";
import { View } from "react-native";
import containerPaddedStyles from "./Container.Padded.styles";

const Padded = ({ children }: { children: React.ReactNode }) => {
  const styles = useViewStyles(containerPaddedStyles);

  return <View style={styles.containerPadded}>{children}</View>;
};

Padded.displayName = "Container.Padded";

export default Padded;
