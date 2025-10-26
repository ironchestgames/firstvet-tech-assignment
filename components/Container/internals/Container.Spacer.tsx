import useViewStyles from "@/hooks/useViewStyles";
import { View } from "react-native";
import containerSpacerStyles from "./Container.Spacer.styles";

const Spacer = () => {
  const styles = useViewStyles(containerSpacerStyles);

  return <View style={styles.containerSpacer} />;
};

Spacer.displayName = "Container.Spacer";

export default Spacer;
