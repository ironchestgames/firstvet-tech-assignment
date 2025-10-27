import { Theme } from "@/components/Theme";
import { StyleSheet } from "react-native";

const bottomSheetStepMenuStyles = (theme: Theme) =>
  StyleSheet.create({
    overlay: {
      flex: 1,
      backgroundColor: theme.colors.element.bottomSheetOverlay,
    },
    sheetContainer: {
      backgroundColor: theme.colors.background.base,
    },
  });

export default bottomSheetStepMenuStyles;
