import * as React from 'react'
import { useStaticQuery, graphql } from "gatsby"
import {FaPinterest, FaGithub, FaTwitter, FaInstagram } from "react-icons/fa"

const Sns = () => {
  const data = useStaticQuery(graphql`
    query BioQuery {
    site {
      siteMetadata {
        social {
          twitter
          instagram
          github
          pinterest
        }
      }
    }
  }
  `)
  const { social } = data.site.siteMetadata
  return (
    <div>
      <p style={{marginTop: `1rem`, marginBottom: `1rem`}}>
        <a
          style={{marginRight:10}}
          href={`https://twitter.com/${social.twitter}`}
          target="_blank"
          rel="noopener noreferrer"
          >
          <FaTwitter />
        </a>
        <a
          style={{marginRight:10}}
          href={`https://www.instagram.com/${social.instagram}`}
          target="_blank"
          rel="noopener noreferrer"
        >
          <FaInstagram />
        </a>
        <a
          style={{marginRight:10}}
          href={`https://pinterest.com/${social.pinterest}`}
          target="_blank"
          rel="noopener noreferrer"
        >
          <FaPinterest />
        </a>
        <a
          style={{marginRight:10}}
          href={`https://github.com/${social.github}`}
          target="_blank"
          rel="noopener noreferrer"
        >
          <FaGithub />
        </a>
      </p>
    </div>
  )
}
export default Sns
