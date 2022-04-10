import * as React from "react"
import { Link, graphql } from "gatsby"
import { StaticImage } from "gatsby-plugin-image"
import Layout from "../components/layout"
import Seo from "../components/seo"
import PostCard from "../components/postcard"
import Sns from "../components/sns"
import Contact from "../components/contact"

import * as styles from "../styles/_index.module.scss"
import * as button from "../styles/_button.module.scss"

const IndexPage = ({data}) => {
  const posts = data.allMarkdownRemark.edges
  return (
  <Layout>
    <Seo title="Portfolio" />

    <section id="hero" className={styles.hero}>
    <div className={`container ${styles.container}`}>
        <p>優しいデザインと技術力で<br />
        思いをカタチにするホームページを作成</p>
    </div>
    </section>

    <section id="service" className={styles.service}>
      <h2 className="title">Service<div>サービス</div></h2>
      <div style={{textAlign:`center`, margin:`4rem auto`, padding:`0 1rem`, fontSize:`0.9em`}}>
      女性起業家さんや中小企業さん向けに、目的に叶うホームページ・ブログを一緒に作っていきます。<br />
      また、ご自分でホームページを作りたい方に「WordPress個人レッスン」を提供しています。<br/>
      お仕事への想いに丁寧によりそい、Webの力で活動をサポートします。
      </div>
      <div className={`container ${styles.container}`}>
        <Link to="/service/" className={styles.item}>
          <StaticImage
            src="../images/service01.jpg"
            alt="Web Development"
            placeholder="blurred"
            width={480}
            layout="constrained"
            style={{margin: `0 auto`}}
          />
            <h3 className="title">Web Design<div>ホームページ制作</div></h3>
        </Link>
        <Link to="/lesson/" className={styles.item}>
          <StaticImage
            src="../images/service02.jpg"
            alt="Consulting"
            placeholder="blurred"
            width={480}
            layout="constrained"
            style={{margin: `0 auto`}}
          />
          <h3 className="title">Lesson<div>個人レッスン</div></h3>
        </Link>
      </div>
    </section>

    <section id="gallery" className={styles.gallery}>
      <h2 id="gallery" className="title">Gallery<div>制作事例</div></h2>
      <div className={`container ${styles.container}`}>
          {posts.map(({ node }) => {
            return <PostCard key={node.frontmatter.slug} node={node} />;
          })}
      </div>
    </section>

    <section id="about" className={styles.profile}>
      <div className={styles.left}>
        <StaticImage
          src="../images/profile.png"
          alt="profile"
          placeholder="blurred"
          width={300}
          layout="constrained"
          style={{margin: `0 auto`}}
        />
        <h3>Emi</h3>
        <Sns />
      </div>
      <div className={styles.right}>
        <p className={styles.en}>About Me</p>
        <p>東京を拠点に活動しているフリーランスのWebエンジニアのエミです。</p>
        <p>元システムエンジニア・コンサルタントの経験を生かして、お客さまのお悩みを整理して解決へ導くことが得意です。
        お客さまの思いやビジョンに丁寧に優しく寄りそい、培ってきた技術と経験で目的に叶う仕組みを提案します。</p>
        <p>「何からはじめたら良いかわからない」など、イメージが固まっていなくても大丈夫。お気軽にご相談ください。</p>
        <a href="https://0forest.com/about/" rel="noreferrer" className={button.btn}>プロフィール</a>
        <a href="https://0forest.com" rel="noreferrer" className={button.btn}>ブログ</a>
      </div>
    </section>
    <Contact />
  </Layout>
  );
}
export default IndexPage

export const pageQuery = graphql`
{
  allMarkdownRemark(
      sort: {fields: [frontmatter___date], order: DESC},
      limit: 9,
    ) {
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
