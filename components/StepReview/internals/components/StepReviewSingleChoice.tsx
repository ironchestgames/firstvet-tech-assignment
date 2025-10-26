import { SingleChoiceOption } from "@/components/SingleChoice/internals/SingleChoice";
import { useTheme } from "@/components/Theme";
import { SingleChoiceReply } from "@/store/surveySlice";
import { Text } from "react-native";

type StepReviewSingleChoiceProps = {
  options: SingleChoiceOption[];
  reply?: SingleChoiceReply;
};

const StepReviewSingleChoice = ({
  options,
  reply,
}: StepReviewSingleChoiceProps) => {
  const { theme } = useTheme();

  return (
    <>
      {options.map((option) => (
        <Text
          key={option.id}
          style={{
            marginBottom: theme.layout.spacing.compact1,
            fontSize: theme.typography.fontSize.preview,
            color:
              reply?.selectedId === option.id
                ? theme.colors.text.neutral
                : theme.colors.text.muted,
            textDecorationLine:
              reply?.selectedId === option.id ? "underline" : "none",
          }}
        >
          {option.label}
        </Text>
      ))}
    </>
  );
};

export default StepReviewSingleChoice;
