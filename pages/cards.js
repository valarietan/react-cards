import React, {useState} from 'react';
import Head from 'next/head';
import Link from 'next/link';
import styled from 'styled-components';

const CardListContainer = styled.div`
  text-align: center;
  background: papayawhip;
`;

const CardListTitle = styled.h2`
  font-size: 30px;
  margin-bottom: 20px;
  color: #442C2E;
`;

const CardListSubtitle = styled.p`
  font-size: 18px;
  margin-bottom: 20px;
  color: #442C2E;
`;

const CardListItem = styled.div`
  margin-bottom: 10px;
  padding: 8px;
  border: 1px solid #ccc;
  border-radius: 5px;
`;

const CardLink = styled.a`
  display: block;
  font-size: 12px;
  font-weight: bold;
  color: #442C2E;
  text-decoration: none;
  transition: color 0.2s;

  &:hover {
    color: #FBBF24;
  }
`;

const CardGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(3, 1fr); /* Three columns */
  grid-gap: 20px; /* Gap between cards */
  margin-bottom: 20px; /* Add some space at the bottom */
`;

const BackButton = styled.button`
  margin-top: 20px;
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

export default function Cards({ data }) {
  const cardsPerPage = 6; // Two rows (6 cards) per page
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
        <CardListTitle>Your Collection</CardListTitle>
        <CardListSubtitle>Click on the card to read, edit or delete</CardListSubtitle>
        <CardGrid>
          {currentCards.map((card)=> (
            <CardListItem key={card.id}>
            <Link href={`/cards/${card.id}`}>
            <CardLink>{card.text.split(' ').slice(0, 7).join(' ')}</CardLink>
            </Link>
          </CardListItem>
          ))}
        </CardGrid>
        <BackButton onClick={handleNextPage} disabled={currentPage === totalPages}>
          Next Page
        </BackButton>
        <Link href="/">
          <BackButton>Back to Homepage</BackButton>
        </Link>
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
