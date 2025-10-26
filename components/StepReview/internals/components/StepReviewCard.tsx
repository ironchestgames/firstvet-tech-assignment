import Container from "@/components/Container";
import useViewStyles from "@/hooks/useViewStyles";
import { useMemo } from "react";
import { View } from "react-native";
import stepReviewCardStyles from "./StepReviewCard.styles";

type StepReviewCardProps = {
  children: React.ReactNode;
  hasAnswer: boolean;
  hasQuestion: boolean;
};

const StepReviewCard = ({
  children,
  hasAnswer,
  hasQuestion,
}: StepReviewCardProps) => {
  const styles = useViewStyles(stepReviewCardStyles);

  const replyStyle = useMemo(() => {
    if (!hasQuestion) {
      return undefined;
    }
    if (!hasAnswer) {
      return styles.missingReply;
    }
    return styles.hasReply;
  }, [hasAnswer, hasQuestion, styles]);

  return (
    <Container.Padded>
      <View style={[styles.card, replyStyle]}>{children}</View>
    </Container.Padded>
  );
};

export default StepReviewCard;
