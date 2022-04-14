import React from "react"
import { Link, graphql } from "gatsby"
import { GatsbyImage } from "gatsby-plugin-image"
import Layout from '../../components/layout'

import * as styles from "../../styles/_post.module.scss"
import * as button from "../../styles/_button.module.scss"

const PostTemplate = ({data}) => {
  const { markdownRemark } = data // data.markdownRemark holds your post data
  const { frontmatter, html } = markdownRemark
  return (
    <Layout>
    <article style={{margin: `4rem auto`}}>
      <div className={`container ${styles.post}`}>
        <div style={{margin: `0 auto`, textAlign:`center`}}>
        {frontmatter.featured && (
          <GatsbyImage
            image={frontmatter.featured.childImageSharp.gatsbyImageData}
            alt={frontmatter.title} />
        )}
        </div>
        <dl style={{marginTop: `4rem`}}>
          <dt>タイトル</dt>
          <dd>{frontmatter.title}</dd>
        </dl>
        <dl>
          <dt>制作時期</dt>
          <dd>{frontmatter.date}年</dd>
        </dl>
        <dl>
          <dt>担当領域</dt>
          <dd>{frontmatter.scope}</dd>
        </dl>
        <dl>
          <dt>技術仕様</dt>
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
    <div style={{textAlign:`center`, margin:`3rem auto`}}>
      <Link to ="/gallery/" className={button.btn}>制作事例に戻る</Link>
    </div>
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
        date(formatString: "YYYY")
        category
        tool
        url
        scope
        featured {
          childImageSharp {
            gatsbyImageData(width: 800, height:800, layout: CONSTRAINED)
          }
        }
      }
    }
  }
`
