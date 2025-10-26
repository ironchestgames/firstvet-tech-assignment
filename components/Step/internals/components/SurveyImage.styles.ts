import { Theme } from "@/components/Theme";
import { StyleSheet } from "react-native";

const surveyImageStyles = (theme: Theme) =>
  StyleSheet.create({
    image: {
      width: "100%",
      aspectRatio: 1,
      resizeMode: "contain",
      marginBottom: theme.layout.spacing.normal,
    },
  });

export default surveyImageStyles;
