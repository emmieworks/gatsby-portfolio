import * as React from "react"
import PropTypes from "prop-types"
import { Link } from "gatsby"
import logo from "../images/logo.png"
import * as styles from "../styles/_footer.module.scss"

const Footer = ({ siteTitle }) => (
  <footer>
    <img src={logo} alt={siteTitle} width={100} height={100}/>
    <nav>
      <ul>
        <li><Link to ="/">Top</Link></li>
        <li><a href="/#about">About</a></li>
        <li><a href="/#service">Service</a></li>
        <li><a href="/#gallery">Gallery</a></li>
        <li><a href="https://0forest.com/service-contact/" target="_blank" rel="noreferrer">Contact</a></li>
      </ul>
    </nav>
    <div className={styles.copyright}>© <a href="https://0forest.com">{siteTitle}</a></div>
  </footer>
)

Footer.propTypes = {
  siteTitle: PropTypes.string,
}

Footer.defaultProps = {
  siteTitle: ``,
}
export default Footer
