import React from 'react';
import Link from 'next/link';
import styled from 'styled-components';

const CardListContainer = styled.div`
  text-align: center;
`;

const CardListTitle = styled.h2`
  font-size: 24px;
  margin-bottom: 20px;
  color: #442C2E;
`;

const CardListItem = styled.li`
  margin-bottom: 10px;
`;

const CardLink = styled.a`
  display: block;
  padding: 5px 10px;
  background-color: #F9E4B7;
  border-radius: 5px;
  color: #442C2E;
  text-decoration: none;
  transition: background-color 0.2s;

  &:hover {
    background-color: #FBBF24;
  }
`;

const CardList = ({ cards }) => {
  const MAX_ENTRIES = 10;

  // checks if cards prop is defined 
  if (!cards) { 
    return null; 
  }

  return (
    <CardListContainer>
      <CardListTitle>All Cards</CardListTitle>
      <ul>
        {cards.slice(0, MAX_ENTRIES).map((card) => (
          <CardListItem key={card.id}>
            <Link href={`/cards/${card.id}`}>
              <CardLink>{card.content.split(' ').slice(0, 7).join(' ')}</CardLink>
            </Link>
          </CardListItem>
        ))}
      </ul>
    </CardListContainer>
  );
};

export default CardList;

export async function getServerSideProps(context) {
  const response = await fetch(`http://127.0.0.1:8000/card`)
  const data = await response.json()
  console.log("data", data)
  return {
     props: {
       data
   }
  }
 }

