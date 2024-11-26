import { createSlice, PayloadAction } from '@reduxjs/toolkit';

interface AnswerData {
  questionId: number;
  shortText: string | undefined;
  dynamic?: boolean;
  dynamicValue?: string[];
  identifier: string;
  answer: string | number;
}

interface QuestionnaireState {
  answers: AnswerData[];
}

const initialState: QuestionnaireState = {
  answers: [],
};

const questionnaireSlice = createSlice({
  name: 'questionnaire',
  initialState,
  reducers: {
    saveAnswer(state, action: PayloadAction<AnswerData>) {
      const index = state.answers.findIndex(
        (answer) => answer.questionId === action.payload.questionId
      );
      if (index !== -1) {
        state.answers[index] = action.payload;
      } else {
        state.answers.push(action.payload);
      }
    },
    clearAnswers(state) {
      state.answers = [];
    },
  },
});

export const { saveAnswer, clearAnswers } = questionnaireSlice.actions;

export default questionnaireSlice.reducer;
