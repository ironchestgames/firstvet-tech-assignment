import useViewStyles from "@/hooks/useViewStyles";
import { View } from "react-native";
import containerStyles from "./Container.ListItem.styles";

const ListItem = ({ children }: { children: React.ReactNode }) => {
  const styles = useViewStyles(containerStyles);

  return <View style={styles.containerListItem}>{children}</View>;
};

ListItem.displayName = "Container.ListItem";

export default ListItem;
