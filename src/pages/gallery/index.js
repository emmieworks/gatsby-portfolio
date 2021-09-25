import * as React from 'react'
import Layout from '../../components/layout'
import { Link, graphql } from "gatsby"

import PostCard from "../../components/postcard"

const Gallery = ({data}) => {
  const posts = data.allMarkdownRemark.edges
  return (
    <Layout>
    <section id="gallery">
      <h2 id="gallery">Gallery</h2>
      <div>
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
