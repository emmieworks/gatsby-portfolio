import * as React from 'react'
import { graphql } from "gatsby"
import Layout from '../../components/layout'
import Seo from "../../components/seo"
import PostCard from "../../components/postcard"
import * as styles from "../../styles/_gallery.module.scss"

const Gallery = ({data}) => {
  const posts = data.allMarkdownRemark.edges
  return (
    <Layout>
    <Seo title="Gallery" />
    <section id="gallery">
      <h2 className="title">Gallery<div>制作実績</div></h2>
      <div className={`container ${styles.container}`}>
          {posts.map(({ node }) => {
            return <PostCard key={node.frontmatter.slug} node={node} />;
          })}
      </div>
    </section>
    </Layout>
  )
}
export default Gallery
export const pageQuery = graphql`
{
  allMarkdownRemark(sort: {fields: [frontmatter___date], order: DESC}) {
    edges {
      node {
        frontmatter {
          category
          date
          featured {
            childImageSharp {
              gatsbyImageData
            }
          }
          scope
          title
          tool
          url
          slug
        }
      }
    }
  }
}
`
