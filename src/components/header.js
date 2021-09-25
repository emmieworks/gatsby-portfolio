import * as React from "react"
import PropTypes from "prop-types"
import { Link } from "gatsby"
import { StaticImage } from "gatsby-plugin-image"
import logo from "../images/logo.png"
import * as styles from "../styles/_header.module.scss"

const Header = ({ siteTitle }) => (
  <header>
    <div className={styles.side}>
      <h1><img src={logo} alt={siteTitle} className={styles.logo} /></h1>
      <div className={styles.bar}></div>
      <nav>
        <ul>
          <li><Link to ="/" activeClassName="active">Top</Link></li>
          <li><Link to ="/#gallery" activeClassName="active">Gallery</Link></li>
          <li><Link to ="/service/" activeClassName="active">Service</Link></li>
          <li><Link to ="/about/" activeClassName="active">About</Link></li>
          <li><a href="https://0forest.com/contact/" activeClassName="active">Contact</a></li>
        </ul>
      </nav>
      <div className={styles.bar}></div>
      <div className={styles.subtitle}>Web Design & Development</div>
    </div>
    <div>
      <StaticImage
        src="../images/hero-image.jpg"
        alt="hero-image"
        placeholder="blurred"
        layout="constrained"
       />
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
