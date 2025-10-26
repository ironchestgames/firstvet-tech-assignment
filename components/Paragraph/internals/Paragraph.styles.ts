import { Theme } from "@/components/Theme";
import { StyleSheet } from "react-native";

const paragraphStyles = (theme: Theme) =>
  StyleSheet.create({
    text: {
      color: theme.colors.text.neutral,
      fontSize: theme.typography.fontSize.paragraph,
      fontWeight: theme.typography.fontWeight.paragraph,
      flexShrink: 1,
    },
  });

export default paragraphStyles;
