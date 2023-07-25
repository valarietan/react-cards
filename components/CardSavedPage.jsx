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

const ReturnButton = styled.button`
  margin-top: 10px;
  padding: 8px 16px;
  background-color: #FBBF24;
  color: white;
  border: none;
  border-radius: 20px;
  cursor: pointer;
  transition: background-color 0.2s;

  &:hover {
    background-color: #F59E0B;
  }
`;

const WriteAnotherButton = styled.button`
  margin-top: 10px;
  padding: 8px 16px;
  background-color: #4CAF50;
  color: white;
  border: none;
  border-radius: 20px;
  cursor: pointer;
  transition: background-color 0.2s;

  &:hover {
    background-color: #45a049;
  }
`;
const ReadCardButton = styled.button`
  margin-top: 10px;
  padding: 8px 16px;
  background-color: #3498db;
  color: white;
  border: none;
  border-radius: 20px;
  cursor: pointer;
  transition: background-color 0.2s;

  &:hover {
    background-color: #2980b9;
  }
`;

const CardSavedPage = () => {
  return (
    <Wrapper>
      <Title>Card Saved!</Title>
      <Message>Great job. What would you like to do next?</Message>
      <Link href="/">
          <ReturnButton>Return to the homepage?</ReturnButton>
      </Link>
      <Link href="/create">
          <WriteAnotherButton>Write another card?</WriteAnotherButton>
        </Link>
        <Link href="/cards">
            <ReadCardButton>Read a card?</ReadCardButton>
        </Link>
    </Wrapper>
  );
};

export default CardSavedPage;
