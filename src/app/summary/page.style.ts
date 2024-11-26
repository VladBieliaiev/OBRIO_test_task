import styled from 'styled-components';

export const Container = styled.div`
  max-width: 850px;
  margin: 2rem auto;
  padding: 1.5rem;
  background-color: #eaeef7;
  border-radius: 8px;
  box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);
  opacity: 1;

  @media (max-width: 768px) {
    padding: 1rem;
    margin: 1rem 0.5rem;
    max-width: 100%;
  }
`;

export const Title = styled.h1`
  font-size: 1.5rem;
  margin-bottom: 1.25rem;
  font-weight: 700;
  line-height: 2rem;
  text-align: center;
  color: #6a3aa2;

  @media (max-width: 768px) {
    font-size: 1.25rem;
    line-height: 1.75rem;
  }
`;

export const Subtitle = styled.h2`
  font-size: 1.2rem;
  font-weight: 400;
  color: #666;
  margin-top: 0.5rem;
  text-align: center;
  color: #6a3aa2;

  @media (max-width: 768px) {
    font-size: 1rem;
    margin-top: 0.25rem;
  }
`;

export const AnswerList = styled.ul`
  list-style: none;
  padding: 0;

  @media (max-width: 768px) {
    padding: 0.5rem;
  }
`;

export const AnswerItem = styled.li`
  padding: 0.75rem 0.5rem;
  margin-bottom: 0.75rem;
  // background-color: #6a3aa2;;
  border-bottom: 1px solid #ddd;
  border-radius: 5px;
  display: flex;
  justify-content: space-between;
  align-items: center;

  &:last-child {
    margin-bottom: 0;
  }

  @media (max-width: 768px) {
    flex-direction: column;
    align-items: flex-start;
    padding: 0.5rem;
  }
`;

export const ShortText = styled.span`
  font-weight: bold;
  color: #555;

  @media (max-width: 768px) {
    font-size: 0.9rem;
  }
`;

export const AnswerText = styled.span`
  color: #6a3aa2;
  font-weight: bold;

  @media (max-width: 768px) {
    font-size: 0.9rem;
  }
`;

export const NoAnswers = styled.p`
  text-align: center;
  font-size: 1.2rem;
  color: #999;
  margin-top: 1rem;

  @media (max-width: 768px) {
    font-size: 1rem;
  }
`;
