import React from 'react'
import Head from 'next/head'

import { Container, DividerSection } from '../styles/pages/Home'

// import Navbar from '../assets/components/Navbar/Navbar'
// import { NavbarStyle } from '../styles/NavbarStyle'

import HomeSection from '../assets/components/HomeSection/HomeSection'
import { HomeStyle } from '../styles/HomeStyle'
import Footer from '../assets/components/Footer/Footer'

const Home: React.FC = () => {
  return (
    <>
      <Head>
        <title>Curso de Inglês para Iniciantes | Érika Gondim</title>
        <link
          href="//cdn-images.mailchimp.com/embedcode/classic-10_7.css"
          rel="stylesheet"
          type="text/css"
        ></link>
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
