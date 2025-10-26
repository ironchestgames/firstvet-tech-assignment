import { Theme } from "@/components/Theme";
import { StyleSheet } from "react-native";

const stepReviewCardStyles = (theme: Theme) =>
  StyleSheet.create({
    card: {
      backgroundColor: theme.colors.background.elevated,
      borderRadius: theme.layout.borderRadius.level1,
      borderWidth: 2,
      borderColor: theme.colors.border.neutral,
      marginBottom: theme.layout.spacing.normal,
      padding: theme.layout.spacing.normal,
    },
    hasReply: {
      borderColor: theme.colors.element.positive,
    },
    missingReply: {
      borderColor: theme.colors.element.negative,
    },
  });

export default stepReviewCardStyles;
