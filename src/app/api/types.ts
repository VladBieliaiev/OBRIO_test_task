export interface ChoicePageProps {
  text: string;
  statement?: string;
  answers: { id: string; text: string; next: number | null }[];
  handleAnswerClick: (nextId: number | null, answer: string | number) => void;
}

export interface InfoPageProps {
  header: string;
  text: string;
  buttonText: string;
  next: number | null;
  handleAnswerClick: (nextId: number | null, answer: string | number) => void;
}

export type Answer = {
  id: string;
  text: string;
  next: number | null;
};

export type InfoPageButton = {
  text: string;
  next: number;
};

export type Question = {
  id: number;
  text: string;
  shortText: string;
  identifier: string;
  dynamic?: boolean;
  dynamicValue?: string[];
  answers: Answer[];
  type?: string;
  header?: string;
  button?: InfoPageButton;
  statement?: string;
};
