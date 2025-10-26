import { useTheme } from "@/components/Theme";
import { TextInputReply } from "@/store/surveySlice";
import { Text } from "react-native";

type StepReviewTextInputProps = {
  reply: TextInputReply | undefined;
};

const StepReviewTextInput = ({ reply }: StepReviewTextInputProps) => {
  const { theme } = useTheme();

  const isEmpty = !reply || reply.text.trim() === "";

  return (
    <Text
      style={{
        marginBottom: theme.layout.spacing.compact1,
        fontSize: theme.typography.fontSize.preview,
        fontStyle: "italic",
        color: isEmpty ? theme.colors.text.muted : theme.colors.text.neutral,
      }}
    >
      {isEmpty ? "No response" : reply?.text}
    </Text>
  );
};

export default StepReviewTextInput;
