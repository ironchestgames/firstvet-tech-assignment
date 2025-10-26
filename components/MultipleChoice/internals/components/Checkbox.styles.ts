import { Theme } from "@/components/Theme";
import { StyleSheet } from "react-native";

const CHECKBOX_SIZE = 16;
const CHECKBOX_BORDER_WIDTH = 1;
const CHECKBOX_CHECK_SIZE = 10;

const checkboxStyles = (theme: Theme) =>
  StyleSheet.create({
    checkbox: {
      width: CHECKBOX_SIZE,
      height: CHECKBOX_SIZE,
      borderWidth: CHECKBOX_BORDER_WIDTH,
      borderColor: theme.colors.element.checkbox,
      alignItems: "center",
      alignSelf: "center",
      justifyContent: "center",
    },
    checkboxCheck: {
      width: CHECKBOX_CHECK_SIZE,
      height: CHECKBOX_CHECK_SIZE,
      backgroundColor: theme.colors.element.checkbox,
    },
  });

export default checkboxStyles;
