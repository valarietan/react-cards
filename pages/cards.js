import React from 'react'
import Head from 'next/head'

export default function Cards() {
  return (
    <>
        <Head>
            <title>Cards Against Negativity</title>
            <meta name="description" content="All Cards"/>
        </Head>
        <div className="flex flex-col gap-4">
        {data.map( card => (
            <div className="p-2 border rounded">
            <h1 className="text-2xl font-semibold">{card.title}</h1>
            <p className="text-base text-gray-500">{card.text}</p>
            </div>
        ) )}
        </div>
    </>
  )
}

export async function getServerSideProps(context) {
 const response = await fetch(`${process.env.NEXT_API_URL}/card`)
 const data = await response.json()
 console.log("data", data)
 return {
    props: {
      data
  }
 }
}

