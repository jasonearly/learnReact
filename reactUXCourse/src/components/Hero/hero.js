import { Link } from "gatsby"
// import PropTypes from "prop-types"
import React from "react"
import './hero.scss'

const Hero = props => (
  <div className="Hero">
<div className="HeroGroup">
  <h1>Hi people</h1>
  <p>Welcome to your new Gatsby site.</p>
    <Link to="/page-2/">Go to page 2</Link>
</div>
</div>
)

export default Hero
