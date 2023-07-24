import React from 'react';
import Link from 'next/link';
import styled from 'styled-components';

const PageWrapper = styled.div`
  text-align: center;
  padding: 40px;
  background: #F9E4B7;
  border-radius: 8px;
`;

const Message = styled.h2`
  font-size: 24px;
  margin-bottom: 20px;
  color: #442C2E;
`;

const ButtonsContainer = styled.div`
  display: flex;
  justify-content: center;
  gap: 20px;
`;

const CreateButton = styled.button`
  padding: 10px 20px;
  background: #FBBF24;
  border: none;
  border-radius: 5px;
  font-size: 16px;
  color: white;
  cursor: pointer;
  transition: background-color 0.2s;

  &:hover {
    background-color: #F59E0B;
  }
`;

const ReadButton = styled.button`
  padding: 10px 20px;
  background: #F59E0B;
  border: none;
  border-radius: 5px;
  font-size: 16px;
  color: white;
  cursor: pointer;
  transition: background-color 0.2s;

  &:hover {
    background-color: #C85508;
  }
`;

const CardSavedPage = () => {
  return (
    <PageWrapper>
      <Message>Card Saved</Message>
      <ButtonsContainer>
        <Link href="/createCard">
          <CreateButton>Create another card</CreateButton>
        </Link>
        <Link href="/cards">
          <ReadButton>Read card</ReadButton>
        </Link>
      </ButtonsContainer>
    </PageWrapper>
  );
};

export default CardSavedPage;
