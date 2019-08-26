import React from "react"
// import { Link } from "gatsby"

import Layout from "../components/layouts/layout"
// import Image from "../components/image"
import SEO from "../components/seo"
import Hero from '../components/hero/hero'
import Card from '../components/card/card'

const IndexPage = () => (
  <Layout>
    <SEO title="Home" />
    <Hero />

    <div className="Cards">
      <h2>Test Heading</h2>

<div className="CardGroup">
      <Card
        title="Title"
        text="paragraph copy"
        image={require('../images/background.png') }
        alt="alt copy"
        />

      <Card
        title="Title"
        text="paragraph copy"
        image={require('../images/background.png') }
        alt="alt copy"
        />

      <Card
        title="Title"
        text="paragraph copy"
        image={require('../images/background.png') }
        alt="alt copy"
        />


      <Card
        title="Title"
        text="paragraph copy"
        image={require('../images/background.png') }
        alt="alt copy"
        />


      <Card
        title="Title"
        text="paragraph copy"
        image={require('../images/background.png') }
        alt="alt copy"
        />

    </div>
</div>



  </Layout>
)

export default IndexPage
