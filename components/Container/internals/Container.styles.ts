import { Theme } from "@/components/Theme";
import { StyleSheet } from "react-native";

const containerStyles = (theme: Theme) =>
  StyleSheet.create({
    container: {
      backgroundColor: theme.colors.background.base,
      height: "100%",
      width: "100%",
    },
  });

export default containerStyles;
