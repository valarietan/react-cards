import { Inter } from 'next/font/google'
import React, {useState} from 'react'
import CreateCardForm from '@/components/CreateCardForm'
import CardList from '@/components/CardList'
import ReadCardsButton from '@/components/ReadCardsButton'
import Link from 'next/link'
import styled from 'styled-components'
import Cards from './cards'

const inter = Inter({ subsets: ['latin'] })

const HomePageContainer = styled.div`
  text-align: center;
  padding: 40px;
  background: #F9E4B7;
  border-radius: 10px;
`;

const Title = styled.h1`
  font-size: 36px;
  font-weight: bold;
  margin-bottom: 20px;
  color: #00bfff;
`;

const Greeting = styled.p`
  font-size: 24px;
  margin-bottom: 30px;
  color: #1e90ff;
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

const StyledLine = styled.div`
  position: absolute;
  bottom: 20px;
  left: 50%;
  transform: translateX(-50%);
  font-size: 18px;
  font-weight: bold;
  color: #442C2E;
`;

const HomePage = ({data}) => {
const{cards} = data ?? {cards: []};
  return (
    <HomePageContainer>
      <Title>Cards Against Insecurity</Title>
      <Greeting>Hi, so pleased to see you here.</Greeting>
      <ButtonsContainer>
        <Link href="/createCard">
          <AddButton>Add Card</AddButton>
        </Link>
        <Link href="/cards">
          <ReadButton>Read Card</ReadButton>
        </Link>
      </ButtonsContainer>
      <StyledLine>Beat self-doubt. Grow positive energy.</StyledLine>
    </HomePageContainer>
  );
};

export default HomePage;

// // Function to fetch the list of cards from the backend API
// export async function getServerSideProps(context) {
//   const response = await fetch(`http://127.0.0.1:8000/card`)
//   const data = await response.json()
//   console.log("data", data)
//   return {
//   props: {
//     data
//   },
//   };
// }