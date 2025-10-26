import useViewStyles from "@/hooks/useViewStyles";
import { View } from "react-native";
import Content from "./Container.Content";
import ListItem from "./Container.ListItem";
import Padded from "./Container.Padded";
import Spacer from "./Container.Spacer";
import containerStyles from "./Container.styles";

const Container = ({ children }: { children: React.ReactNode }) => {
  const styles = useViewStyles(containerStyles);

  return <View style={styles.container}>{children}</View>;
};

Container.Padded = Padded;
Container.Content = Content;
Container.ListItem = ListItem;
Container.Spacer = Spacer;

export default Container;
