import { Theme } from "@/components/Theme";
import { StyleSheet } from "react-native";

const containerSpacerStyles = (theme: Theme) =>
  StyleSheet.create({
    containerSpacer: {
      paddingBottom: theme.layout.spacing.normal,
      paddingHorizontal: theme.layout.spacing.normal,
    },
  });

export default containerSpacerStyles;
