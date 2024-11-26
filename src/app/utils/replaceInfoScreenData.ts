import questionnaire from '../api/questionnaire.json';
import { Question } from '../api/types';

export const replaceInfoScreenData = (question: Question) => {
  const infoQuestion = questionnaire.infoQuestion;

  if (question.type === 'info') {
    return {
      ...question,
      header: question.header?.replace(
        '${infoQuestion.header}',
        infoQuestion.header
      ),
      text: question.text?.replace('${infoQuestion.text}', infoQuestion.text),
      button: {
        ...question.button,
        text: question.button?.text?.replace(
          '${infoQuestion.button.text}',
          infoQuestion.button.text
        ),
      },
    };
  }
  return question;
};
