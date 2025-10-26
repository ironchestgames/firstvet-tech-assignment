import { Theme } from "@/components/Theme";
import { StyleSheet } from "react-native";

const containerPaddedStyles = (theme: Theme) =>
  StyleSheet.create({
    containerPadded: {
      paddingBottom: theme.layout.spacing.normal,
      paddingHorizontal: theme.layout.spacing.normal,
    },
  });

export default containerPaddedStyles;
