import { useTheme } from "@/components/Theme";
import { Text } from "react-native";

type StepReviewTitleProps = {
  content: string;
};

const StepReviewTitle = ({ content }: StepReviewTitleProps) => {
  const { theme } = useTheme();

  return (
    <Text
      style={{
        marginBottom: theme.layout.spacing.compact1,
        fontSize: theme.typography.fontSize.preview,
        fontWeight: theme.typography.fontWeight.title,
        color: theme.colors.text.neutral,
      }}
    >
      {content}
    </Text>
  );
};

export default StepReviewTitle;
