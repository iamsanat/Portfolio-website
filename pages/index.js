import Head from 'next/head'
import Body from '@components/Body'


export default function Home() {
  return (
    <div className="">
      <Head>
        <title>Next.js Starter!</title>
        <link rel="icon" href="/favicon.ico" />
        <link rel="stylesheet" href="assets/vendors/themify-icons/css/themify-icons.css"></link>
      </Head>

      <main>
        <Body />
      </main>

    </div>
  )
}
