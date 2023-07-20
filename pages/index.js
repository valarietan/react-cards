import Image from 'next/image'
import { Inter } from 'next/font/google'
import Counter from '@components/Counter'
import React from 'react'



const inter = Inter({ subsets: ['latin'] })



export default function Home() {
  return (
    <>
    <Counter />

    </>

  
  )
}
