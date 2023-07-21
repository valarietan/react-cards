import React from 'react'
import Head from 'next/head'

export default function Cards() {
  return (
    <>
        <Head>
            <title>Cards Against Negativity</title>
            <meta name="description" content="All Cards"/>
        </Head>
    <div>C</div>
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