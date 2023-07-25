import React from 'react';
import styled from 'styled-components';
import Link from 'next/link'

const Wrapper = styled.div`
  max-width: 400px;
  margin: 0 auto;
  padding: 20px;
  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
`;

const Title = styled.h2`
  font-size: 1.5rem;
  margin-bottom: 1rem;
  color: #00bfff;
`;

const Message = styled.p`
  font-size: 1rem;
  color: #555;
`;

const ButtonsContainer = styled.div`
  display: flex;
  justify-content: center;
  gap: 20px;
`;

const ReturnButton = styled.button`
  margin-top: 10px;
  padding: 8px 16px;
  background-color: #FBBF24;
  color: white;
  border: none;
  border-radius: 20px;
  cursor: pointer;
  transition: background-color 0.2s;
  width: 100px; 
  font-size: 16px; 

  &:hover {
    background-color: #F59E0B;
  }
`;

const WriteAnotherButton = styled.button`
  margin-top: 10px;
  padding: 8px 16px;
  background-color: #e9967a;
  color: white;
  border: none;
  border-radius: 20px;
  cursor: pointer;
  transition: background-color 0.2s;
  width: 100px; 
  font-size: 16px; 

  &:hover {
    background-color: #d2691e;
  }
`;
const ReadCardButton = styled.button`
  margin-top: 10px;
  padding: 8px 16px;
  background-color: #ff7f50;
  color: white;
  border: none;
  border-radius: 20px;
  cursor: pointer;
  transition: background-color 0.2s;
  width: 100px; 
  font-size: 16px; 

  &:hover {
    background-color: #ff8c00;
  }
`;

const CardSavedPage = () => {
  return (
    <Wrapper>
      <Title>Card Saved!</Title>
      <Message>Great stuff. What would you like to do next?</Message>
      <ButtonsContainer>
      <Link href="/">
          <ReturnButton>Back to homepage</ReturnButton>
      </Link>
      <Link href="/createCard">
          <WriteAnotherButton>Write more</WriteAnotherButton>
        </Link>
        <Link href="/cards">
            <ReadCardButton>Read a card</ReadCardButton>
        </Link>
      </ButtonsContainer>
    </Wrapper>
  );
};

export default CardSavedPage;
