import { addReply, reset, surveySlice, SurveyState } from "./../surveySlice";

describe("surveySlice", () => {
  describe("when adding replies", () => {
    it("should add a reply to the store", () => {
      const initialState = { replies: [] };

      const nextState = surveySlice.reducer(
        initialState,
        addReply({ stepId: "1", type: "text_input", text: "Hello" })
      );

      expect(nextState.replies).toEqual([
        { stepId: "1", type: "text_input", text: "Hello" },
      ]);
    });

    it("should replace already existing reply", () => {
      const initialState = {
        replies: [
          { stepId: "1", type: "text_input", text: "Hello" },
          { stepId: "2", type: "multiple_choice", selectedIds: ["1", "2"] },
          { stepId: "3", type: "single_choice", selectedId: "1" },
          { stepId: "4", type: "rating", rating: 5 },
        ],
      } as SurveyState;

      const nextState = surveySlice.reducer(
        initialState,
        addReply({ stepId: "1", type: "text_input", text: "Hello world" })
      );

      expect(nextState.replies).toEqual([
        { stepId: "2", type: "multiple_choice", selectedIds: ["1", "2"] },
        { stepId: "3", type: "single_choice", selectedId: "1" },
        { stepId: "4", type: "rating", rating: 5 },
        { stepId: "1", type: "text_input", text: "Hello world" },
      ]);
    });
  });

  describe("when resetting", () => {
    it("should remove all replies", () => {
      const initialState = {
        replies: [
          { stepId: "1", type: "text_input", text: "Hello" },
          { stepId: "2", type: "multiple_choice", selectedIds: ["1", "2"] },
          { stepId: "3", type: "single_choice", selectedId: "1" },
          { stepId: "4", type: "rating", rating: 5 },
        ],
      } as SurveyState;

      const nextState = surveySlice.reducer(initialState, reset());

      expect(nextState.replies).toEqual([]);
    });
  });
});
