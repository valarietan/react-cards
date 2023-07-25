import React, {useState} from 'react';
import Head from 'next/head';
import Link from 'next/link';
import styled from 'styled-components';

const CardListContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  padding: 20px;
  background: #F9E4B7;
  min-height: 100vh;
`;

const CardListTitle = styled.h2`
  font-size: 30px;
  color: #0000FF;
  margin: 0;
`;

const CardListSubtitle = styled.p`
  font-size: 18px;
  color: #1e90ff;
  margin: 0;
`;

const CardGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  grid-gap: 20px;
  justify-items: center;
`;

const CardListItem = styled.div`
  width: 180px;
  height: 250px;
  border: 3px solid #ccc;
  border-radius: 10px;
  background-color: white;
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  padding: 20px;
`;

const CardLink = styled.a`
  text-align: left; 
  content-align: center;
  font-size: 14px;
  color: #442C2E;
  text-decoration: none;
  cursor: pointer;
  transition: color 0.2s;

  &:hover {
    color: #FBBF24;
  }
`;

const ButtonsContainer = styled.div`
  display: flex;
  justify-content: center;
  gap: 20px;
`;

const NextButton = styled.button`
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

const BackButton = styled.button`
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
    background-color: #6c3483;
}
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

export default function Cards({ data }) {
  const cardsPerPage = 3; 
  const [currentPage, setCurrentPage] = useState(1);
  const totalCards = data.length;
  const totalPages = Math.ceil(totalCards / cardsPerPage);

  const handleNextPage = () => {
    setCurrentPage((prevPage) => (prevPage < totalPages ? prevPage + 1 : prevPage));
  };

  const startIndex = (currentPage - 1) * cardsPerPage;
  const endIndex = startIndex + cardsPerPage;
  const currentCards = data.slice(startIndex, endIndex);

  return (
    <>
  <CardListContainer>
      <CardListTitle>Your cards against insecurity</CardListTitle>
      <CardListSubtitle>Go ahead, click a card to read, edit or delete.</CardListSubtitle>
        <CardGrid>
          {currentCards.map((card)=> (
            <CardListItem key={card.id}>
            <Link href={`/cards/${card.id}`}>
            <CardLink>{card.text.split(' ').slice(0, 15).join(' ')}</CardLink>
            </Link>
          </CardListItem>
          ))}
        </CardGrid>
        <ButtonsContainer>
        <ReturnButton onClick={handleNextPage} disabled={currentPage === totalPages}>
          Next Page
        </ReturnButton>
        <BackButton onClick={() => window.history.back()}>Back</BackButton>
        <Link href="/">
          <ReturnButton>Home</ReturnButton>
        </Link>
        </ButtonsContainer>
      </CardListContainer>
    </>
  );
}

export async function getServerSideProps(context) {
  const response = await fetch(`${process.env.NEXT_API_URL}/card`);
  const data = await response.json();
  console.log("data", data);
  return {
    props: {
      data,
    },
  };
}
