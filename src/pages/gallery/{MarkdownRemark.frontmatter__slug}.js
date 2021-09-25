import React from "react"
import { graphql } from "gatsby"
import { GatsbyImage } from "gatsby-plugin-image"

const PostTemplate = ({data}) => {
  const { markdownRemark } = data // data.markdownRemark holds your post data
  const { frontmatter, html } = markdownRemark
  return (
    <article>
      <div>
        {frontmatter.featured && (
          <GatsbyImage
            image={frontmatter.featured.childImageSharp.gatsbyImageData}
            alt={frontmatter.title} />
        )}
        <dl>
          <dt>タイトル</dt>
          <dd>{frontmatter.title}</dd>
          <dt>制作年月</dt>
          <dd>{frontmatter.date}</dd>
          <dt>担当</dt>
          <dd>{frontmatter.scope}</dd>
          <dt>ツール</dt>
          <dd>{frontmatter.tool}</dd>
          <dt>URL</dt>
          <dd>{frontmatter.url}</dd>
        </dl>
        <div
          dangerouslySetInnerHTML={{ __html: html }}
        />
      </div>
    </article>
  )
}

export default PostTemplate

export const pageQuery = graphql`
  query($id: String!) {
    markdownRemark(id: { eq: $id }) {
      html
      frontmatter {
        title
        date(formatString: "YYYY/MM")
        category
        tool
        url
        scope
        featured {
          childImageSharp {
            gatsbyImageData(layout: CONSTRAINED)
          }
        }
      }
    }
  }
`
