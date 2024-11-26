'use client';
import { useSelector } from 'react-redux';
import { RootState } from '@/app/redux/store';
import {
  AnswerItem,
  AnswerList,
  AnswerText,
  Container,
  NoAnswers,
  ShortText,
  Subtitle,
  Title,
} from './page.style';

const SummaryPage = () => {
  const answers = useSelector(
    (state: RootState) => state.questionnaire.answers
  );

  return (
    <Container>
      <Title>Thank You!</Title>
      <Subtitle>Your questionnaire summary is ready: </Subtitle>
      {answers.length > 0 ? (
        <AnswerList>
          {answers.map((answer, index) => (
            <AnswerItem key={index}>
              <ShortText>{answer.shortText}: </ShortText>
              <AnswerText>{answer.answer}</AnswerText>
            </AnswerItem>
          ))}
        </AnswerList>
      ) : (
        <NoAnswers>No answers selected</NoAnswers>
      )}
    </Container>
  );
};

export default SummaryPage;
