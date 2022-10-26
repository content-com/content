import Head from "next/head";
import Home from '../components/Home';

export default function Index() {
  return (
    <div>
      <Head>
        <title>Content.</title>
        <meta name="description" content="Content for content creators" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Home/>
    </div>
  );
}
