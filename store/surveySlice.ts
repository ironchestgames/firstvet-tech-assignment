import { createSlice, PayloadAction } from "@reduxjs/toolkit";

export type ReplyType =
  | "single_choice"
  | "multiple_choice"
  | "rating"
  | "text_input";

type ReplyBase = {
  stepId: string;
};

export type SingleChoiceReply = ReplyBase & {
  type: "single_choice";
  selectedId: string;
};

export type MultipleChoiceReply = ReplyBase & {
  type: "multiple_choice";
  selectedIds: string[];
};

export type RatingReply = ReplyBase & {
  type: "rating";
  rating: number;
};

export type TextInputReply = ReplyBase & {
  type: "text_input";
  text: string;
};

export type Reply =
  | SingleChoiceReply
  | MultipleChoiceReply
  | RatingReply
  | TextInputReply;

export type SurveyState = {
  replies: Reply[];
};

const initialState: SurveyState = {
  replies: [],
};

export const surveySlice = createSlice({
  name: "survey",
  initialState,
  reducers: {
    addReply: (state, action: PayloadAction<Reply>) => {
      state.replies = state.replies.filter(
        (reply) => reply.stepId !== action.payload.stepId
      );
      state.replies.push(action.payload);
    },
    reset: (state) => {
      state.replies = [];
    },
  },
});

export const { addReply, reset } = surveySlice.actions;
