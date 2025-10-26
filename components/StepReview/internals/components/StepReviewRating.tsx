import { useTheme } from "@/components/Theme";
import { RatingReply } from "@/store/surveySlice";
import { Text } from "react-native";

type StepReviewRatingProps = {
  max: number;
  reply: RatingReply | undefined;
};

const StepReviewRating = ({ max, reply }: StepReviewRatingProps) => {
  const { theme } = useTheme();

  return (
    <Text
      style={{
        alignSelf: "center",
        marginBottom: theme.layout.spacing.compact1,
        fontSize: theme.typography.fontSize.preview,
        fontWeight: theme.typography.fontWeight.title,
        color: theme.colors.text.neutral,
      }}
    >
      {`${reply?.rating || 0} / ${max}`}
    </Text>
  );
};

export default StepReviewRating;
