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
    <Seo title="Home" />

    <section id="hero" className={styles.hero}>
    <div className={`container ${styles.container}`}>
        <p>Zero Forest</p>
        <p>女性起業家・中小企業向けのホームページ作成</p>
    </div>
    </section>

    <section id="service" className={styles.service}>
      <h2 className="title">Service<div>サービス</div></h2>
      <div style={{textAlign:`center`, margin:`4rem auto`, padding:`0 1rem`, fontSize:`0.9em`}}>
      WordPressを使用したホームページ制作やLP制作<br />
      あなたの活動をWebの力でサポートします。
      </div>
      <div className={`container ${styles.container}`}>
        <Link to="/service#service01/" className={styles.item}>
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
        <Link to="/service#service02/" className={styles.item}>
          <StaticImage
            src="../images/service02.jpg"
            alt="Consulting"
            placeholder="blurred"
            width={480}
            layout="constrained"
            style={{margin: `0 auto`}}
          />
          <h3 className="title">Lesson<div>オンライン個人レッスン</div></h3>
        </Link>
      </div>
    </section>

    <section id="gallery" className={styles.gallery}>
      <h2 id="gallery" className="title">Gallery<div>制作実績</div></h2>
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
        <p>女性の個人事業主さん向けにホームページ作成レッスンをしたり、
        中小企業さん向けのホームページ作成、WEB周りの相談にのっています。</p>
        <p>気軽に相談できるWEB担当のような存在になりたいです。</p>
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
