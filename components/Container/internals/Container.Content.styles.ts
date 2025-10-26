import { Theme } from "@/components/Theme";
import { StyleSheet } from "react-native";

const containerContentStyles = (theme: Theme) =>
  StyleSheet.create({
    containerContent: {
      backgroundColor: theme.colors.background.elevated,
      marginBottom: theme.layout.spacing.normal,
      padding: theme.layout.spacing.normal,
    },
  });

export default containerContentStyles;
