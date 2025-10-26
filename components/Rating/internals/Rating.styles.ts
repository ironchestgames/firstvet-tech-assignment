import { Theme } from "@/components/Theme";
import { StyleSheet } from "react-native";

const RATING_CONTAINER_PADDING_BOTTOM = 120;
const RATING_CONTAINER_PADDING_TOP = 32;

const ratingStyles = (theme: Theme) =>
  StyleSheet.create({
    ratingContainer: {
      marginBottom: theme.layout.spacing.normal,
      backgroundColor: theme.colors.background.elevated,
      flexDirection: "row",
      justifyContent: "center",
      paddingBottom: RATING_CONTAINER_PADDING_BOTTOM,
      paddingTop: RATING_CONTAINER_PADDING_TOP,
    },
  });

export default ratingStyles;
