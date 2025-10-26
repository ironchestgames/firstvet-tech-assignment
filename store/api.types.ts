type ElementBaseDTO = {
  id: string;
};

type TitleElementDTO = ElementBaseDTO & {
  type: "title";
  data: {
    content: string;
  };
};

type ParagraphElementDTO = ElementBaseDTO & {
  type: "paragraph";
  data: {
    content: string;
  };
};

type ImageElementDTO = ElementBaseDTO & {
  type: "image";
  data: {
    src: string;
    accessibilityLabel: string;
  };
};

type MultipleChoiceElementDTO = ElementBaseDTO & {
  type: "multiple_choice";
  data: {
    options: { id: string; label: string }[];
  };
};

type SingleChoiceElementDTO = ElementBaseDTO & {
  type: "single_choice";
  data: {
    question: string;
    options: { id: number; label: string }[];
  };
};

type RatingElementDTO = ElementBaseDTO & {
  type: "rating";
  data: {
    max: number;
  };
};

type TextInputElementDTO = ElementBaseDTO & {
  type: "text_input";
  data: {
    placeholder: string;
  };
};

type ButtonElementDTO = ElementBaseDTO & {
  type: "button";
  data: {
    label: string;
    action: "next";
  };
};

type ElementDTO =
  | TitleElementDTO
  | ParagraphElementDTO
  | ImageElementDTO
  | MultipleChoiceElementDTO
  | SingleChoiceElementDTO
  | RatingElementDTO
  | TextInputElementDTO
  | ButtonElementDTO;

export type StepDTO = {
  id: string;
  elements: ElementDTO[];
};

export type SurveyDTO = {
  schemaVersion: number;
  title: string;
  steps: StepDTO[];
};
