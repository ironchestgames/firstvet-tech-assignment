import type { MultipleChoiceOption } from "@/components/MultipleChoice/internals/MultipleChoice";
import type { SingleChoiceOption } from "@/components/SingleChoice/internals/SingleChoice";

type StepElementBase = {
  id: string;
};

type TitleElement = StepElementBase & {
  type: "title";
  data: {
    content: string;
  };
};

type ParagraphElement = StepElementBase & {
  type: "paragraph";
  data: {
    content: string;
  };
};

type ImageElement = StepElementBase & {
  type: "image";
  data: {
    src: string;
    accessibilityLabel: string;
  };
};

type MultipleChoiceElement = StepElementBase & {
  type: "multiple_choice";
  data: {
    options: MultipleChoiceOption[];
  };
};

type SingleChoiceElement = StepElementBase & {
  type: "single_choice";
  data: {
    options: SingleChoiceOption[];
  };
};

type RatingElement = StepElementBase & {
  type: "rating";
  data: {
    max: number;
  };
};

type TextInputElement = StepElementBase & {
  type: "text_input";
  data: {
    placeholder: string;
  };
};

type ButtonElement = StepElementBase & {
  type: "button";
  data: {
    label: string;
    action: "next";
  };
};

type StepElement =
  | TitleElement
  | ParagraphElement
  | ImageElement
  | ButtonElement
  | MultipleChoiceElement
  | SingleChoiceElement
  | RatingElement
  | TextInputElement;

export type Step = {
  id: string;
  elements: StepElement[];
};

export type Survey = {
  id: string;
  steps: Step[];
};
