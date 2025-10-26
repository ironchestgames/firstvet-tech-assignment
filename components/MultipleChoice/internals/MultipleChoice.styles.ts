import { Theme } from "@/components/Theme";
import { StyleSheet } from "react-native";

const multipleChoiceStyles = (theme: Theme) =>
  StyleSheet.create({
    multipleChoiceContainer: {
      marginVertical: theme.layout.spacing.compact1,
    },
  });

export default multipleChoiceStyles;
