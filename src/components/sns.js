import * as React from 'react'
import { useStaticQuery, graphql } from "gatsby"
import {FaPinterest, FaTwitter, FaInstagram } from "react-icons/fa"

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
          <FaTwitter size={24} />
        </a>
        <a
          style={{marginRight:10}}
          href={`https://www.instagram.com/${social.instagram}`}
          target="_blank"
          rel="noopener noreferrer"
        >
          <FaInstagram size={24} />
        </a>
        <a
          style={{marginRight:10}}
          href={`https://pinterest.com/${social.pinterest}`}
          target="_blank"
          rel="noopener noreferrer"
        >
          <FaPinterest size={24}/>
        </a>
      </p>
    </div>
  )
}
export default Sns
