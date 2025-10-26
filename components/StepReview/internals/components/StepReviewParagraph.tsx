import { useTheme } from "@/components/Theme";
import { Text } from "react-native";

type StepReviewParagraphProps = {
  content: string;
};

const StepReviewParagraph = ({ content }: StepReviewParagraphProps) => {
  const { theme } = useTheme();

  return (
    <Text
      style={{
        marginBottom: theme.layout.spacing.compact1,
        fontSize: theme.typography.fontSize.preview,
        color: theme.colors.text.neutral,
      }}
    >
      {content}
    </Text>
  );
};

export default StepReviewParagraph;
