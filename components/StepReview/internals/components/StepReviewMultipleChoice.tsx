import { MultipleChoiceOption } from "@/components/MultipleChoice/internals/MultipleChoice";
import { useTheme } from "@/components/Theme";
import { MultipleChoiceReply } from "@/store/surveySlice";
import { Text } from "react-native";

type StepReviewMultipleChoiceProps = {
  options: MultipleChoiceOption[];
  reply?: MultipleChoiceReply;
};

const StepReviewMultipleChoice = ({
  options,
  reply,
}: StepReviewMultipleChoiceProps) => {
  const { theme } = useTheme();

  return (
    <>
      {options.map((option) => (
        <Text
          key={option.id}
          style={{
            marginBottom: theme.layout.spacing.compact1,
            fontSize: theme.typography.fontSize.preview,
            color: reply?.selectedIds.includes(option.id)
              ? theme.colors.text.neutral
              : theme.colors.text.muted,
            textDecorationLine: reply?.selectedIds.includes(option.id)
              ? "underline"
              : "none",
          }}
        >
          {option.label}
        </Text>
      ))}
    </>
  );
};

export default StepReviewMultipleChoice;
