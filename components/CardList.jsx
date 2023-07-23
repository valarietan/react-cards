import React from 'react';
import Head from 'next/head';
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
  font-size: 18px;
  font-weight: bold;
  color: #442C2E;
  text-decoration: none;
  transition: color 0.2s;

  &:hover {
    color: #FBBF24;
  }
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
    if (!data) {
        return <div>Not data</div>;
    }
  return (
    <>
      <CardListContainer>
        <CardListTitle>Your Cards</CardListTitle>
        <CardListSubtitle>Click on the card to read, edit or delete</CardListSubtitle>
        {data.map((card) => (
          <CardListItem key={card.id}>
            <Link href={`/cards/${card.id}`}>
              <CardLink>{card.text.split(' ').slice(0, 7).join(' ')}</CardLink>
            </Link>
          </CardListItem>
        ))}
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


// import React from 'react';
// import Link from 'next/link';
// import styled from 'styled-components';

// const CardListContainer = styled.div`
//   text-align: center;
// `;

// const CardListTitle = styled.h2`
//   font-size: 24px;
//   margin-bottom: 20px;
//   color: #442C2E;
// `;

// const CardListItem = styled.li`
//   margin-bottom: 10px;
// `;

// const CardLink = styled.a`
//   display: block;
//   padding: 5px 10px;
//   background-color: #F9E4B7;
//   border-radius: 5px;
//   color: #442C2E;
//   text-decoration: none;
//   transition: background-color 0.2s;

//   &:hover {
//     background-color: #FBBF24;
//   }
// `;

// const CardList = ({ cards }) => {
//   const MAX_ENTRIES = 10;

//   // checks if cards prop is defined 
//   if (!cards) { 
//     return null; 
//   }

//   return (
//     <CardListContainer>
//       <CardListTitle>All Cards</CardListTitle>
//       <ul>
//         {cards.slice(0, MAX_ENTRIES).map((card) => (
//           <CardListItem key={card.id}>
//             <Link href={`/cards/${card.id}`}>
//               <CardLink>{card.content.split(' ').slice(0, 7).join(' ')}</CardLink>
//             </Link>
//           </CardListItem>
//         ))}
//       </ul>
//     </CardListContainer>
//   );
// };

// export default CardList;

// export async function getServerSideProps(context) {
//   const response = await fetch(`http://127.0.0.1:8000/card`)
//   const data = await response.json()
//   console.log("data", data)
//   return {
//      props: {
//        data
//    }
//   }
//  }

