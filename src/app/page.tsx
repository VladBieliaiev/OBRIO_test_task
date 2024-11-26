'use client';

import {
  Container,
  StyledLink,
  Title,
} from './components/choicePage/ChoicePagestyle';

export default function Home() {
  return (
    <Container>
      <Title>Help us get to know you better</Title>
      <StyledLink href="/question/1">Start questionnaire</StyledLink>
    </Container>
  );
}
