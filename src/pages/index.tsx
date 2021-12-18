import React from 'react'
import Head from 'next/head'
import Script from 'next/script'
import { Container } from '../styles/pages/Home'

// import Navbar from '../assets/components/Navbar/Navbar'
// import { NavbarStyle } from '../styles/NavbarStyle'

import HomeSection from '../assets/components/HomeSection/HomeSection'
import { HomeStyle } from '../styles/HomeStyle'
import Footer from '../assets/components/Footer/Footer'

const Home: React.FC = () => {
  return (
    <>
      <Head>
        <title> Jornada Start | Érika Gondim</title>
        <link
          href="//cdn-images.mailchimp.com/embedcode/classic-10_7.css"
          rel="stylesheet"
          type="text/css"
        ></link>
        <meta
          name="facebook-domain-verification"
          content="0faz6lpq442pa6b51wpb4tbs5v165x"
        />
        <Script
          strategy="afterInteractive"
          dangerouslySetInnerHTML={{
            __html: `
            !function(f,b,e,v,n,t,s)
            {if(f.fbq)return;n=f.fbq=function(){n.callMethod?
              n.callMethod.apply(n,arguments):n.queue.push(arguments)};
              if(!f._fbq)f._fbq=n;n.push=n;n.loaded=!0;n.version='2.0';
            n.queue=[];t=b.createElement(e);t.async=!0;
            t.src=v;s=b.getElementsByTagName(e)[0];
            s.parentNode.insertBefore(t,s)}(window, document,'script',
            'https://connect.facebook.net/en_US/fbevents.js');
            fbq('init', ${process.env.NEXT_PUBLIC_FACEBOOK_PIXEL_ID});
            fbq('init', '4332319413545079');
            fbq('track', "PageView");
            `
          }}
        />
        <noscript>
          <img
            height="1"
            width="1"
            src="https://www.facebook.com/tr?id=4332319413545079&ev=PageView&noscript=1"
          />
        </noscript>
      </Head>

      {/* <NavbarStyle>
        <Navbar />
      </NavbarStyle> */}

      {/* <DividerSection /> */}

      <Container>
        <HomeStyle>
          <HomeSection />
        </HomeStyle>
        <Footer />
      </Container>
    </>
  )
}

export default Home
