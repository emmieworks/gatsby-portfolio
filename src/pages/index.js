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
        <p>Webで、あなたの思いが伝わる場所を。</p>
        <p>こころを込めてお作りいたします。</p>
        <p className={styles.en}>Sincerely yours</p>
    </div>
    </section>

    <section id="service" className={styles.service}>
      <h2 className="title">Service<div>サービス</div></h2>
      <div style={{textAlign:`center`, margin:`4rem auto`, padding:`0 1rem`, fontSize:`0.9em`}}>
      コーポレートサイト、メディア、ランディングページなどの
      ホームページの制作から、Webの活用相談まで。<br />
      あなたの活動をWebの力でサポートします。
      </div>
      <div className={`container ${styles.container}`}>
        <Link to="/service#service01" className={styles.item}>
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
        <Link to="/service#service02" className={styles.item}>
          <StaticImage
            src="../images/service02.jpg"
            alt="Consulting"
            placeholder="blurred"
            width={480}
            layout="constrained"
            style={{margin: `0 auto`}}
          />
          <h3 className="title">Consulting<div>個別相談・レクチャー</div></h3>
        </Link>
      </div>
      <div style={{textAlign:`center`, margin:`2rem auto`}}>
        <Link to ="/service/" className={button.btn}>サービス詳細</Link>
      </div>
    </section>

    <section id="gallery" className={styles.gallery}>
      <h2 id="gallery" className="title">Gallery<div>制作実績</div></h2>
      <div className={`container ${styles.container}`}>
          {posts.map(({ node }) => {
            return <PostCard key={node.frontmatter.slug} node={node} />;
          })}
      </div>
      <div style={{textAlign:`center`, margin:`2rem auto`}}>
        <Link to ="/gallery/" className={button.btn}>もっと見る</Link>
      </div>
    </section>

    <section id="profile" className={styles.profile}>
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
        <p className={styles.en}>Hello!</p>
        <p>東京を拠点に活動しているフリーランスのWebデザイナー＆エンジニアのエミです。</p>
        <p>元々は企業でシステムエンジニア・経営コンサルタントとして働いていました。より親身に、ITを通じてお客様の活動を幅広くサポートしたいと思い、独立しました。</p>
        <p>ビジネスを広げていく土台として、専門的な知識が求められるWebの分野で、あなたの相談相手になれた嬉しいです。</p>
        <p>「こんなことできる？」「何からはじめたらいい？」など、お気軽にご相談くださいね。</p>
        <Link to ="/about/" className={button.btn}>プロフィール</Link>
        <a href="https://0forest.com" target="_blank" rel="noreferrer" className={button.btn}>ブログ</a>
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
      limit: 3,
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
