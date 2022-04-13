import "@fortawesome/fontawesome-svg-core/styles.css";
import { config } from "@fortawesome/fontawesome-svg-core";
config.autoAddCss = false;
import '../styles/globals.css'
import Layout from '../components/Layout'
import Head from 'next/head'

function MyApp({ Component, pageProps }) {
  return (
    <Layout>
    <Head>
    <link rel="icon" href="/favicon.svg" />
    </Head>
      <Component {...pageProps} />
    </Layout>
  )
}

export default MyApp
