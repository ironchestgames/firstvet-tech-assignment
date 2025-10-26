import { Theme } from "@/components/Theme";
import { StyleSheet } from "react-native";

const buttonStyles = (theme: Theme) =>
  StyleSheet.create({
    pressable: {
      backgroundColor: theme.colors.cta.primary,
      padding: theme.layout.spacing.normal,
      borderRadius: theme.layout.borderRadius.level1,
    },
    text: {
      fontSize: theme.typography.fontSize.cta,
      color: theme.colors.text.cta_primary,
      textAlign: "center",
      fontWeight: theme.typography.fontWeight.cta,
    },
  });

export default buttonStyles;
