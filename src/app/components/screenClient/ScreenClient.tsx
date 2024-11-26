'use client';

import { Question } from '@/app/api/types';
import { saveAnswer } from '@/app/redux/slices/questionnareSlice';
import { useRouter } from 'next/navigation';
import { useDispatch, useSelector } from 'react-redux';

import InfoPage from '../infoPage/InfoPage';
import ChoicePage from '../choicePage/ChoicePage';
import { replaceInfoScreenData } from '@/app/utils/replaceInfoScreenData';
import { RootState } from '@/app/redux/store';
import { replaceDynamicText } from '@/app/utils/replaceDynamicText';

const ScreenClient = ({ question }: { question: Question }) => {
  const dispatch = useDispatch();
  const router = useRouter();
  const state = useSelector((state: RootState) => state);

  const handleAnswerClick = (
    nextId: number | null,
    answer: string | number
  ) => {
    if (question.type !== 'info') {
      dispatch(
        saveAnswer({
          questionId: question.id,
          shortText: question.shortText,
          identifier: question.identifier,
          dynamic: question.dynamic || false,
          dynamicValue: question.dynamicValue || [],
          answer,
        })
      );
    }
    if (nextId) {
      router.push(`/question/${nextId}`);
    } else {
      router.push('/summary');
    }
  };

  const {
    text,
    answers = [],
    statement,
    button,
    type,
    dynamic,
    dynamicValue = [],
  } = question;

  const resolvedText = dynamic
    ? replaceDynamicText(text, dynamicValue, state)
    : text;

  if (type === 'info' && button) {
    const resolvedQuestion = replaceInfoScreenData(question);
    return (
      <InfoPage
        header={resolvedQuestion.header || ''}
        text={resolvedQuestion.text || ''}
        buttonText={resolvedQuestion.button?.text || 'Next'}
        next={button.next}
        handleAnswerClick={handleAnswerClick}
      />
    );
  }

  if (type === 'choice') {
    return (
      <ChoicePage
        text={resolvedText || ''}
        statement={statement}
        answers={answers}
        handleAnswerClick={handleAnswerClick}
      />
    );
  }

  // it is possible to implement various components depending on the type, which can be with the field or select option
};

export default ScreenClient;
