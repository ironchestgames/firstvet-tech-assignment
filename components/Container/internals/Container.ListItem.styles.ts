import { Theme } from "@/components/Theme";
import { StyleSheet } from "react-native";

const CONTAINER_LIST_ITEM_BOTTOM_BORDER_WIDTH = 2;

const containerStyles = (theme: Theme) =>
  StyleSheet.create({
    containerListItem: {
      marginBottom: theme.layout.spacing.compact1,
      borderBottomWidth: CONTAINER_LIST_ITEM_BOTTOM_BORDER_WIDTH,
      borderBottomColor: theme.colors.element.listItemBottom,
      alignSelf: "stretch",
      justifyContent: "space-between",
      alignItems: "stretch",
      flexDirection: "row",
      backgroundColor: theme.colors.background.elevated,
      padding: theme.layout.spacing.normal,
      gap: theme.layout.spacing.normal,
      overflow: "hidden",
    },
  });

export default containerStyles;
