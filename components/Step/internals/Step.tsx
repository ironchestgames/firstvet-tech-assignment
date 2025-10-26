import Button from "@/components/Button";
import Container from "@/components/Container";
import FreeTextInput from "@/components/FreeTextInput";
import MultipleChoice from "@/components/MultipleChoice";
import Paragraph from "@/components/Paragraph";
import Rating from "@/components/Rating";
import SingleChoice from "@/components/SingleChoice";
import Title from "@/components/Title";
import { addReply } from "@/store/surveySlice";
import { useLocalSearchParams, useRouter } from "expo-router";
import React from "react";
import { useDispatch } from "react-redux";
import SurveyImage from "./components/SurveyImage";
import type { Step as StepType } from "./Step.types";

type StepProps = {
  step: StepType;
  stepIndex: number;
  maxStepIndex: number;
};

const Step = ({ step, stepIndex, maxStepIndex }: StepProps) => {
  const router = useRouter();
  const { isReviewing: isReviewingParam } = useLocalSearchParams<{
    isReviewing?: string;
  }>();

  const isReviewing = isReviewingParam === "true";

  const dispatch = useDispatch();

  const onPressNext = () => {
    if (stepIndex < maxStepIndex) {
      router.push(`/step/${stepIndex + 1}`);
      return;
    }

    router.push("/review");
  };

  const buttonHandlers = {
    next: onPressNext,
  };

  const onMultipleChoiceChange = (selectedOptions: string[]) => {
    dispatch(
      addReply({
        stepId: step.id,
        type: "multiple_choice",
        selectedIds: selectedOptions,
      })
    );
  };

  const onSingleChoiceChange = (selectedOption: string) => {
    dispatch(
      addReply({
        stepId: step.id,
        type: "single_choice",
        selectedId: selectedOption,
      })
    );
  };

  const onRatingChange = (rating: number) => {
    dispatch(
      addReply({
        stepId: step.id,
        type: "rating",
        rating: rating,
      })
    );
  };

  const onFreeTextInputChange = (text: string) => {
    dispatch(
      addReply({
        stepId: step.id,
        type: "text_input",
        text: text,
      })
    );
  };

  return (
    <Container>
      {step.elements.map((element, index) => {
        switch (element.type) {
          case "title":
            return (
              <Container.Padded key={index}>
                <Title text={element.data.content} />
              </Container.Padded>
            );

          case "paragraph":
            return (
              <Container.Content key={index}>
                <Paragraph>{element.data.content}</Paragraph>
              </Container.Content>
            );

          case "image":
            return (
              <SurveyImage
                key={index}
                src={element.data.src}
                accessibilityLabel={element.data.accessibilityLabel}
              />
            );

          case "button":
            if (!(isReviewing && element.data.action === "next")) {
              return (
                <Container.Padded key={index}>
                  <Button
                    label={element.data.label}
                    onPress={buttonHandlers[element.data.action]}
                  />
                </Container.Padded>
              );
            }
            return null;

          case "multiple_choice":
            return (
              <MultipleChoice
                key={index}
                options={element.data.options}
                onChange={onMultipleChoiceChange}
              />
            );

          case "single_choice":
            return (
              <SingleChoice
                key={index}
                onChange={onSingleChoiceChange}
                options={element.data.options}
              />
            );

          case "rating":
            return (
              <Rating
                key={index}
                onChange={onRatingChange}
                maxRating={element.data.max}
              />
            );

          case "text_input":
            return (
              <Container.ListItem key={index}>
                <FreeTextInput
                  onChange={onFreeTextInputChange}
                  placeholder={element.data.placeholder}
                />
              </Container.ListItem>
            );
        }
      })}
    </Container>
  );
};

export default Step;
