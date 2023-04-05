import type { NextPage } from 'next'
import Head from 'next/head'

import { ProView } from 'views'

const Home: NextPage = () => {
  return (
    <>
      <Head>
        <title>Ambrosial</title>
        <meta name="description" content="Ambrosial" />
        <link rel="icon" href="/logo.gif" />
      </Head>
      <ProView />
    </>
  )
}

export default Home
