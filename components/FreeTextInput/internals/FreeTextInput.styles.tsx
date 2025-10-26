import { Theme } from "@/components/Theme";
import { StyleSheet } from "react-native";

const freeTextInputStyles = (theme: Theme) =>
  StyleSheet.create({
    textInput: {
      fontSize: theme.typography.fontSize.paragraph,
      fontWeight: theme.typography.fontWeight.paragraph,
      color: theme.colors.text.neutral,
      textAlignVertical: "top",
    },
  });

export default freeTextInputStyles;
