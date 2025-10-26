import useViewStyles from "@/hooks/useViewStyles";
import { View } from "react-native";
import containerContentStyles from "./Container.Content.styles";

const Content = ({ children }: { children: React.ReactNode }) => {
  const styles = useViewStyles(containerContentStyles);

  return <View style={styles.containerContent}>{children}</View>;
};

Content.displayName = "Container.Content";

export default Content;
