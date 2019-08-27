import React from "react"
// import { Link } from "gatsby"
import styled from 'styled-components'
import Layout from "../components/layouts/default"
// import Image from "../components/image"
import SEO from "../components/seo"
import Hero from '../components/hero'
import Card from '../components/card'
// import Section from '../components/content-section'
// import staticdata from '../../data.json'
// import Cell from '../components/table-section'

// const SectionCaption = styled.p`
//   font-weight: 600;
//   font-size: 18px;
//   text-transform: uppercase;
//   color: #94A4BA;
//   text-align: center;
// `
//
// const SectionCellGroup = styled.div`
//   max-width: 800px;
//   margin: 0 auto 100px;
//   padding: 0 20px;
//   display: grid;
//   grid-template-columns: repeat(2, 1fr);
//   grid-column-gap: 20px;
//
//   @media (max-width: 800px) {
//     grid-template-columns: repeat(1, 1fr);
//   }
// `

const CardSectionTitle = styled.h2`
margin: 50px 20px;
font-size: 60px;
text-align: center;
font-weight: 700;
background: linear-gradient(104.74deg, #050A27 0%,#302319 100%);
-webkit-background-clip: text;
background-clip: text;
-webkit-text-fill-color: transparent;

@media (max-width: 640px) {
  font-size: 30px;
}
`

const CardGroup = styled.div`
margin: 50px 40px 100px;
display: grid;
grid-template-columns: repeat(3, 1fr);
grid-gap: 40px;
justify-items: center;

@media (max-width: 1060px) {
    grid-template-columns: repeat(2, 1fr);

    @media (max-width: 720px) {
        grid-template-columns: repeat(1, 1fr);
    }
}
`

const IndexPage = () => (
  <Layout>
    <SEO title="Home" />
    <Hero
    image={require('../images/tina-guina-obV_LM0KjxY-unsplash-75.jpg') }
    heroImage={require('../images/sbm_logo.png') }
    />


      <CardSectionTitle>Order Today</CardSectionTitle>

<CardGroup>
      <Card
        title="$10"
        text="8oz (1/2lb) of Small But Mighty’s monthly offering"
        image={require('../images/manki-kim-mv7kxYh5Rko-unsplash.jpg') }
        alt="alt copy"
        />

      <Card
        title="$15"
        text="16oz (1lb) of Small But Mighty’s monthly offering"
        image={require('../images/manki-kim-mv7kxYh5Rko-unsplash.jpg') }
        alt="alt copy"
        />

      <Card
        title="$25"
        text="32oz (2lbs) of Small But Mighty’s monthly offering"
        image={require('../images/manki-kim-mv7kxYh5Rko-unsplash.jpg') }
        alt="alt copy"
        />
    </CardGroup>






  </Layout>
)

export default IndexPage
