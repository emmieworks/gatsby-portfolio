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
        <li><Link to ="/">Top</Link></li>
        <li><Link to ="/about/">About</Link></li>
        <li><Link to ="/service/">Service</Link></li>
        <li><Link to ="/gallery">Gallery</Link></li>
        <li><a href="https://forms.gle/cud8zcZfHHE91Y2R8">Contact</a></li>
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
