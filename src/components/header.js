import * as React from "react"
import PropTypes from "prop-types"
import { Link } from "gatsby"
import logo from "../images/logo.png"
import * as styles from "../styles/_header.module.scss"

const Header = ({ siteTitle }) => (
  <header>
    <h1><Link to ="/"><img src={logo} alt={siteTitle} className={styles.logo} /></Link></h1>
    <nav>
      <ul>
        <li><Link to="/">Top</Link></li>
        <li><Link to="/about/">About</Link></li>
        <li><a href="/#service">Service</a></li>
        <li><Link to="/gallery/">Gallery</Link></li>
        <li><a href="https://0forest.com/service-contact/" target="_blank" rel="noreferrer">Contact</a></li>
      </ul>
    </nav>
  </header>
)

Header.propTypes = {
  siteTitle: PropTypes.string,
}

Header.defaultProps = {
  siteTitle: ``,
}

export default Header
