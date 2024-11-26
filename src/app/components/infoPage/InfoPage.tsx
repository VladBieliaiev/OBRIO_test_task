import { InfoPageProps } from '@/app/api/types';
import {
  Button,
  Container,
  InfoContainer,
  Statement,
  Title,
} from './InfoPage.style';

const InfoPage = ({
  header,
  text,
  buttonText,
  next,
  handleAnswerClick,
}: InfoPageProps) => {
  return (
    <Container>
      <InfoContainer>
        <Title>{header}</Title>
        <Statement>{text}</Statement>
        <Button onClick={() => handleAnswerClick(next, 'next')}>
          {buttonText || 'Next'}
        </Button>
      </InfoContainer>
    </Container>
  );
};

export default InfoPage;
