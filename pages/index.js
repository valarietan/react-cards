import Image from 'next/image'
import { Inter } from 'next/font/google'
import React, {useState} from 'react'
import CreateCardForm from '@/components/CreateCardForm'
import ReadCardsButton from '@/components/ReadCardsButton'
import Post from '@/components/Post'
import Link from 'next/link'
import styled from 'styled-components'

const inter = Inter({ subsets: ['latin'] })

const HomePageContainer = styled.div`
  text-align: center;
  padding: 40px;
  background: #F9E4B7;
  border-radius: 8px;
`;

const Title = styled.h1`
  font-size: 36px;
  font-weight: bold;
  margin-bottom: 20px;
  color: #442C2E;
`;

const Greeting = styled.p`
  font-size: 24px;
  margin-bottom: 30px;
  color: #442C2E;
`;

const ButtonsContainer = styled.div`
  display: flex;
  justify-content: center;
  gap: 20px;
`;

const AddButton = styled.button`
  padding: 10px 20px;
  background: #FBBF24;
  border: none;
  border-radius: 5px;
  font-size: 16px;
  color: white;
  cursor: pointer;
`;

const ReadButton = styled.button`
  padding: 10px 20px;
  background: #F59E0B;
  border: none;
  border-radius: 5px;
  font-size: 16px;
  color: white;
  cursor: pointer;
`;

const HomePage = () => {
  return (
    <HomePageContainer>
      <Title>Cards Against Negativity</Title>
      <Greeting>Hi, so good to see you.</Greeting>
      <ButtonsContainer>
        <Link href="/createCard">
          <AddButton>Add Card</AddButton>
        </Link>
        <Link href="/cards">
          <ReadButton>Read Card</ReadButton>
        </Link>
      </ButtonsContainer>
    </HomePageContainer>
  );
};

export default HomePage;
