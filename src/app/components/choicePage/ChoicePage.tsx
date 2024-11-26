import { ChoicePageProps } from '@/app/api/types';
import {
  Container,
  ChoiceContainer,
  Statement,
  Title,
  AnswerItem,
  AnswerList,
} from './ChoicePagestyle';

const ChoicePage = ({
  text,
  statement,
  answers,
  handleAnswerClick,
}: ChoicePageProps) => {
  return (
    <Container>
      <ChoiceContainer>
        <Title>{text}</Title>
        {statement && <Statement>{`"${statement}"`}</Statement>}
        <AnswerList>
          {answers.length > 0 ? (
            answers.map((answer) => (
              <AnswerItem
                key={answer.id}
                onClick={() =>
                  handleAnswerClick(answer.next || null, answer.text)
                }
              >
                {answer.text}
              </AnswerItem>
            ))
          ) : (
            <AnswerItem>No answers available</AnswerItem>
          )}
        </AnswerList>
      </ChoiceContainer>
    </Container>
  );
};

export default ChoicePage;
