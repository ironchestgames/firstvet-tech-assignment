import Container from "@/components/Container";
import Paragraph from "@/components/Paragraph";
import { Step } from "@/components/Step/internals/Step.types";
import {
  MultipleChoiceReply,
  RatingReply,
  Reply,
  ReplyType,
  SingleChoiceReply,
  TextInputReply,
} from "@/store/surveySlice";
import { useRouter } from "expo-router";
import { Pressable } from "react-native";
import ReplyStatusIcon from "./components/ReplyStatusIcon";
import StepReviewCard from "./components/StepReviewCard";
import StepReviewImage from "./components/StepReviewImage";
import StepReviewMultipleChoice from "./components/StepReviewMultipleChoice";
import StepReviewParagraph from "./components/StepReviewParagraph";
import StepReviewRating from "./components/StepReviewRating";
import StepReviewSingleChoice from "./components/StepReviewSingleChoice";
import StepReviewTextInput from "./components/StepReviewTextInput";
import StepReviewTitle from "./components/StepReviewTitle";

type StepReviewProps = {
  stepIndex: number;
  step: Step;
  reply?: Reply;
};

const isMultipleChoiceReply = (reply: Reply): reply is MultipleChoiceReply => {
  return reply.type === "multiple_choice";
};

const isSingleChoiceReply = (reply: Reply): reply is SingleChoiceReply => {
  return reply.type === "single_choice";
};

const isRatingReply = (reply: Reply): reply is RatingReply => {
  return reply.type === "rating";
};

const isTextInputReply = (reply: Reply): reply is TextInputReply => {
  return reply.type === "text_input";
};

const isReplyType = (type: string): type is ReplyType => {
  return (
    type === "single_choice" ||
    type === "multiple_choice" ||
    type === "rating" ||
    type === "text_input"
  );
};

const StepReview = ({ stepIndex, step, reply }: StepReviewProps) => {
  const router = useRouter();

  const hasQuestion = step.elements.some((element) =>
    isReplyType(element.type)
  );
  const hasAnswer = reply !== undefined;

  const onPress = () => {
    router.push({
      pathname: `/step/[stepIndex]`,
      params: {
        stepIndex: stepIndex,
        isReviewing: "true",
      },
    });
  };

  return (
    <Pressable onPress={onPress}>
      <Container.Padded>
        <Paragraph>{`Step ${stepIndex + 1}`}</Paragraph>
      </Container.Padded>
      <StepReviewCard hasAnswer={hasAnswer} hasQuestion={hasQuestion}>
        {hasQuestion && <ReplyStatusIcon hasReply={hasAnswer} />}
        {step.elements.map((element) => {
          switch (element.type) {
            case "paragraph":
              return (
                <StepReviewParagraph
                  key={element.id}
                  content={element.data.content}
                />
              );

            case "title":
              return (
                <StepReviewTitle
                  key={element.id}
                  content={element.data.content}
                />
              );

            case "image":
              return (
                <StepReviewImage
                  key={element.id}
                  src={element.data.src}
                  accessibilityLabel={element.data.accessibilityLabel}
                />
              );

            case "multiple_choice":
              return (
                <StepReviewMultipleChoice
                  key={element.id}
                  options={element.data.options}
                  reply={
                    reply && isMultipleChoiceReply(reply) ? reply : undefined
                  }
                />
              );

            case "single_choice":
              return (
                <StepReviewSingleChoice
                  key={element.id}
                  options={element.data.options}
                  reply={
                    reply && isSingleChoiceReply(reply) ? reply : undefined
                  }
                />
              );

            case "rating":
              return (
                <StepReviewRating
                  key={element.id}
                  max={element.data.max}
                  reply={reply && isRatingReply(reply) ? reply : undefined}
                />
              );

            case "text_input":
              return (
                <StepReviewTextInput
                  key={element.id}
                  reply={reply && isTextInputReply(reply) ? reply : undefined}
                />
              );
          }
        })}
      </StepReviewCard>
    </Pressable>
  );
};

export default StepReview;
