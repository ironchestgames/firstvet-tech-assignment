import Container from "@/components/Container";
import Paragraph from "@/components/Paragraph";
import { useGetSurveyQuery } from "@/store/api";
import { useRouter } from "expo-router";
import { Pressable } from "react-native";

export default function Index() {
  const router = useRouter();

  const { data: surveyDto } = useGetSurveyQuery();

  const onStartSurvey = () => {
    router.push(`/step/0`); // NOTE: assumes at least one step exists
  };

  if (!surveyDto) {
    return null; // TODO: add loading/connection status
  }

  return (
    <Container>
      <Pressable onPress={onStartSurvey}>
        <Container.Spacer />
        <Container.ListItem>
          <Paragraph>{`Start ${surveyDto.title}`}</Paragraph>
          <Paragraph>{"→"}</Paragraph>
        </Container.ListItem>
      </Pressable>
    </Container>
  );
}
