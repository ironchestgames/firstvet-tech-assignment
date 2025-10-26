import BottomSheetStepMenu from "@/components/BottomSheetStepMenu";
import NavButtonStepMenu from "@/components/NavButtonStepMenu";
import Step from "@/components/Step";
import useSurvey from "@/hooks/useStepConfig";
import { useGetSurveyQuery } from "@/store/api";
import { useLocalSearchParams, useNavigation } from "expo-router";
import { useLayoutEffect, useState } from "react";

export default function StepScreen() {
  const { stepIndex } = useLocalSearchParams<{ stepIndex: string }>();
  const currentStep = Number(stepIndex);

  const navigation = useNavigation();

  const { data: surveyDto } = useGetSurveyQuery();
  const survey = useSurvey(surveyDto);

  const [menuBottomSheetVisible, setMenuBottomSheetVisible] = useState(false);
  const openMenu = () => setMenuBottomSheetVisible(true);
  const closeMenu = () => setMenuBottomSheetVisible(false);

  useLayoutEffect(() => {
    navigation.setOptions({
      title: `Step ${currentStep + 1}`,
      headerRight: () => <NavButtonStepMenu openMenu={openMenu} />,
    });
  }, [currentStep, navigation]);

  if (!surveyDto) {
    return null; // TODO: add loading/connection status
  }

  if (!survey) {
    return null; // TODO: add error state
  }

  return (
    <>
      <Step
        step={survey.steps[currentStep]}
        stepIndex={currentStep}
        maxStepIndex={survey.steps.length - 1}
      />
      <BottomSheetStepMenu
        visible={menuBottomSheetVisible}
        onRequestClose={closeMenu}
      />
    </>
  );
}
