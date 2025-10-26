import { Theme } from "@/components/Theme";
import { StyleSheet } from "react-native";

const RADIO_BUTTON_SIZE = 16;
const RADIO_BUTTON_CHECK_SIZE = 10;
const RADIO_BUTTON_BORDER_WIDTH = 1;

const radioButtonStyles = (theme: Theme) =>
  StyleSheet.create({
    radioButton: {
      width: RADIO_BUTTON_SIZE,
      height: RADIO_BUTTON_SIZE,
      borderWidth: RADIO_BUTTON_BORDER_WIDTH,
      borderColor: theme.colors.element.radioButton,
      alignItems: "center",
      alignSelf: "center",
      justifyContent: "center",
      borderRadius: RADIO_BUTTON_SIZE,
    },
    radioButtonCheck: {
      width: RADIO_BUTTON_CHECK_SIZE,
      height: RADIO_BUTTON_CHECK_SIZE,
      borderRadius: RADIO_BUTTON_CHECK_SIZE,
      backgroundColor: theme.colors.element.radioButton,
    },
  });

export default radioButtonStyles;
