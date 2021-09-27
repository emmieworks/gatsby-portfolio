import React from "react"
import { graphql } from "gatsby"
import { GatsbyImage } from "gatsby-plugin-image"
import Layout from '../../components/layout'
import * as styles from "../../styles/_post.module.scss"

const PostTemplate = ({data}) => {
  const { markdownRemark } = data // data.markdownRemark holds your post data
  const { frontmatter, html } = markdownRemark
  return (
    <Layout>
    <article style={{margin: `4rem auto`}}>
      <div className={`container ${styles.post}`}>
        {frontmatter.featured && (
          <GatsbyImage
            image={frontmatter.featured.childImageSharp.gatsbyImageData}
            alt={frontmatter.title} />
        )}
        <dl style={{marginTop: `4rem`}}>
          <dt>タイトル</dt>
          <dd>{frontmatter.title}</dd>
        </dl>
        <dl>
          <dt>制作年月</dt>
          <dd>{frontmatter.date}</dd>
        </dl>
        <dl>
          <dt>担当</dt>
          <dd>{frontmatter.scope}</dd>
        </dl>
        <dl>
          <dt>ツール</dt>
          <dd>{frontmatter.tool}</dd>
        </dl>
        <dl>
          <dt>URL</dt>
          <dd><a href={frontmatter.url} target="_blank" rel="noopener noreferrer">{frontmatter.url}</a></dd>
        </dl>
        <div
          dangerouslySetInnerHTML={{ __html: html }}
           style={{marginTop: `4rem`}}
        />
      </div>
    </article>
    </Layout>
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
