import { Link } from "gatsby"
import PropTypes from "prop-types"
import React from "react"
import './header.scss'

class Header extends React.Component {
  constructor(props) {
     super(props)

     this.state = {
    hasScrolled: false
  }

  }
  componentDidMount() {
    window.addEventListener('scroll', this.handleScroll)
}

handleScroll = (event) => {
  const scrollTop = window.pageYOffset

  if (scrollTop > 50) {
    this.setState({ hasScrolled: true })
  } else {
    this.setState({ hasScrolled: false })
  }
}

  render() {
    return (
      <header className={this.state.hasScrolled ? 'Header HeaderScrolled' : 'Header'}>
        <div className="HeaderGroup">
    <Link to="/"><img src="https://cl.ly/e1742b2280f4/sbm_logo.png" width="75" alt=""/></Link>

        </div>
      </header>
    )
  }
}

Header.propTypes = {
  siteTitle: PropTypes.string,
}

Header.defaultProps = {
  siteTitle: ``,
}

export default Header