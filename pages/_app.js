import Footer from "jsonfig.json/components/Footer";
import Header from "jsonfig.json/components/Header";
import "jsonfig.json/styles/globals.css";
import Head from "next/head";
import Link from "next/link";
import store from '../store/store'
import { Provider } from 'react-redux'
import { SessionProvider} from "next-auth/react"

export default function App({ Component, pageProps , session }) {
  return (
    <>
      <Head>
        <title>Ecoomerce</title>
        <meta name="description" content="Ecoomerce Application " />

        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link
          rel="preconnect"
          href="https://fonts.gstatic.com"
          crossOrigin="true"
        />
        {/* <link
          href="https://fonts.googleapis.com/css2?family=Oswald:wght@200;300;400;500;600;700&family=Urbanist:ital,wght@0,100;0,200;0,300;0,400;0,500;0,600;0,700;0,800;0,900;1,100;1,200;1,300;1,400;1,500;1,600;1,700;1,800;1,900&display=swap"
          rel="stylesheet"
        /> */}
        
      </Head>
      <SessionProvider session={session}>
      
      <Provider store={store}>

      
      <Component {...pageProps} />
      

      </Provider>
      </SessionProvider>
    </>
  );
}
