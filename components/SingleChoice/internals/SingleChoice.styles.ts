import { Theme } from "@/components/Theme";
import { StyleSheet } from "react-native";

const singleChoiceStyles = (theme: Theme) =>
  StyleSheet.create({
    singleChoiceContainer: {
      marginVertical: theme.layout.spacing.compact1,
    },
  });

export default singleChoiceStyles;
