import styled from 'styled-components';

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 5rem 1.5rem 1.5rem 1.5rem;
  background-color: transparent;
  background: linear-gradient(
    165.54deg,
    #141333 -33.39%,
    #202261 15.89%,
    #543c97 55.84%,
    #6939a2 74.96%
  );
  min-height: 100vh;
  position: relative;
  bottom: 56px;
  box-sizing: border-box;
  z-index: 0;
`;

export const InfoContainer = styled.div`
  display: flex;
  flex-direction: column;
  width: 90%;
  max-width: 20.5rem;
  align-items: center;
  text-align: center;
  padding: 1rem;
  box-sizing: border-box;
`;

export const Title = styled.h1`
  font-size: clamp(1.2rem, 4vw, 1.5rem);
  margin-bottom: 1.25rem;
  font-weight: 700;
  line-height: 1.5;
  color: #fbfbff;
  word-wrap: break-word;
`;

export const Statement = styled.p`
  font-size: clamp(0.9rem, 3vw, 1rem);
  margin-bottom: 2.5rem;
  color: #fbfbff;
  font-weight: 400;
  line-height: 1.5rem;
  text-align: center;
  word-wrap: break-word;
`;

export const Button = styled.button`
  width: 100%;
  max-width: 18rem;
  padding: 1rem 1.5rem;
  border-radius: 1rem;
  background-color: #eaeef7;
  border: 0.0625rem solid #e0e0e0;
  margin-bottom: 0.5rem;
  cursor: pointer;
  box-shadow: 2px 2px 6px 0px #543c9740;
  color: #6a3aa2;
  font-size: clamp(1rem, 3vw, 1.2rem);
  font-weight: 400;
  line-height: 1.3rem;

  display: flex;
  justify-content: center;
  align-items: center;

  transition: background-color 0.2s;

  &:hover {
    background-color: #f0f0f0;
  }

  &:active {
    background: linear-gradient(
      165.54deg,
      #141333 -33.39%,
      #202261 15.89%,
      #543c97 55.84%,
      #6939a2 74.96%
    );
    color: #fbfbff;
  }
`;
