import Button from "@/components/Button";
import Container from "@/components/Container";
import Paragraph from "@/components/Paragraph";
import ReviewStepCard from "@/components/StepReview";
import useSurvey from "@/hooks/useStepConfig";
import { RootState } from "@/store";
import { useGetSurveyQuery } from "@/store/api";
import { ScrollView } from "react-native";
import { useSelector } from "react-redux";

export default function Review() {
  const { data: surveyDto } = useGetSurveyQuery();
  const survey = useSurvey(surveyDto);
  const replies = useSelector((state: RootState) => state.survey.replies);

  const onPressSubmit = () => {
    // TODO: scroll to unanswered questions and "shake" them
  };

  if (!surveyDto) {
    return null; // TODO: add loading state
  }

  if (!survey) {
    return null; // TODO: add error state
  }

  return (
    <ScrollView>
      <Container>
        <Container.Spacer />
        <Container.Padded>
          <Paragraph>{"Review your answers before you submit 👇"}</Paragraph>
        </Container.Padded>

        {survey.steps.map((step, index) => {
          const stepReply = replies.find((reply) => reply.stepId === step.id);
          return (
            <ReviewStepCard
              key={index}
              stepIndex={index}
              step={step}
              reply={stepReply}
            />
          );
        })}
        <Container.Padded>
          <Button label={"Submit"} onPress={onPressSubmit} />
        </Container.Padded>
        <Container.Spacer />
      </Container>
    </ScrollView>
  );
}
