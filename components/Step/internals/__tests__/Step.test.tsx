import { ThemeProvider } from "@/components/Theme";
import { surveySlice } from "@/store/surveySlice";
import { configureStore } from "@reduxjs/toolkit";
import { fireEvent, render } from "@testing-library/react-native";
import { useRouter } from "expo-router";
import React from "react";
import { Provider } from "react-redux";
import Step from "../Step";
import { Step as StepType } from "../Step.types";

jest.mock("expo-router", () => ({
  useRouter: jest.fn(() => ({ push: jest.fn() })),
  useLocalSearchParams: jest.fn(() => ({})),
}));

const store = configureStore({ reducer: { survey: surveySlice.reducer } });

describe("Step component", () => {
  const stepMock = {
    id: "GUID-1",
    elements: [{ type: "button", data: { label: "Next", action: "next" } }],
  } as StepType;

  describe("when next button is pressed", () => {
    it("navigates to next step", () => {
      const push = jest.fn();
      (useRouter as jest.Mock).mockReturnValue({ push });

      const { getByText } = render(
        <Provider store={store}>
          <ThemeProvider>
            <Step step={stepMock} stepIndex={0} maxStepIndex={1} />
          </ThemeProvider>
        </Provider>
      );

      fireEvent.press(getByText("Next"));

      expect(push).toHaveBeenCalledTimes(1);
      expect(push).toHaveBeenCalledWith("/step/1");
    });
  });
});
