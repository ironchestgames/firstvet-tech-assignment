import { Survey } from "@/components/Step/internals/Step.types";
import { SurveyDTO } from "@/store/api.types";

const useSurvey = (surveyDto: SurveyDTO | undefined): Survey | undefined => {
  if (!surveyDto) {
    return undefined;
  }

  return surveyDto as unknown as Survey; // TODO: add proper mapping if needed
};

export default useSurvey;
