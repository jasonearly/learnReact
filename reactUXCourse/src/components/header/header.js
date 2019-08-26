import { Link } from "gatsby"
import PropTypes from "prop-types"
import React from "react"
import './header.scss'

const Header = ({ siteTitle }) => (
  <header className="Header">
    <div className="HeaderGroup">
<Link to="/"><img src="https://via.placeholder.com/30" width="30" alt=""/></Link>
<Link to="/courses">Courses</Link>
<Link to="/buy"><button>Buy</button></Link>
    </div>
  </header>
)

Header.propTypes = {
  siteTitle: PropTypes.string,
}

Header.defaultProps = {
  siteTitle: ``,
}

export default Header
