import Image from 'next/image'
import { Inter } from 'next/font/google'
import React, {useState} from 'react'
import CreateCardForm from '@/components/CreateCardForm'
import ReadCardsButton from '@/components/ReadCardsButton'
import Post from '@/components/Post'
import Link from 'next/link'


const inter = Inter({ subsets: ['latin'] })

const HomePage = () => {
  return (
    <div>
      <h1>Cards Against Negativity</h1>
      <p>Hi, so good to see you.</p>
      <div>
        <Link href="/createCard">
          <a>
            <button>Add Card</button>
          </a>
        </Link>
        <Link href="/cards">
          <a>
            <button>Read Card</button>
          </a>
        </Link>
      </div>
    </div>
  );
};

export default HomePage;
