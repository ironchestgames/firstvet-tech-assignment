import { Theme } from "@/components/Theme";
import { StyleSheet } from "react-native";

const titleStyles = (theme: Theme) =>
  StyleSheet.create({
    text: {
      color: theme.colors.text.neutral,
      fontSize: theme.typography.fontSize.title,
      fontWeight: theme.typography.fontWeight.title,
    },
  });

export default titleStyles;
