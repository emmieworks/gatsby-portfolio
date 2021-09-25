import * as React from "react"
import { Link, graphql } from "gatsby"
import { StaticImage } from "gatsby-plugin-image"
import {FaPinterest, FaGithub, FaTwitter, FaInstagram } from "react-icons/fa"
import Layout from "../components/layout"
import Seo from "../components/seo"
import PostCard from "../components/postcard"

import * as styles from "../styles/_index.module.scss"
import * as button from "../styles/_button.module.scss"


const IndexPage = ({data}) => {
  const posts = data.allMarkdownRemark.edges
  return (
  <Layout>
    <Seo title="Home" />
    <section id="gallery" className={styles.gallery}>
      <h2 id="gallery">Gallery</h2>
      <div className={styles.container}>
          {posts.map(({ node }) => {
            return <PostCard key={node.frontmatter.slug} node={node} />;
          })}
      </div>
    </section>
    <section id="service" className={styles.service}>
      <h2>Service</h2>
      <div className={styles.container}>
        <div className={styles.item}>
          <StaticImage
            src="../images/service-01.jpg"
            alt="Web Development"
            placeholder="blurred"
            width={300}
            height={300}
            layout="fixed"
            style={{margin: `0 auto`}}
          />
          <h3>Web Development</h3>
        </div>
        <div className={styles.item}>
          <StaticImage
            src="../images/service-02.jpg"
            alt="Design & Coding"
            placeholder="blurred"
            width={300}
            height={300}
            layout="fixed"
            style={{margin: `0 auto`}}
          />
          <h3>Design & Coding</h3>
        </div>
        <div className={styles.item}>
          <StaticImage
            src="../images/service-03.jpg"
            alt="wordpress"
            placeholder="blurred"
            width={300}
            height={300}
            layout="fixed"
            style={{margin: `0 auto`}}
          />
          <h3>WordPress</h3>
        </div>
      </div>
      <div style={{textAlign:`center`}}>
        <Link to ="/service/" className={button.btn}>サービスについて詳しく</Link>
      </div>
    </section>
    <section id="profile" className={styles.profile}>
      <div className={styles.left}>
        <StaticImage
          src="../images/profile.png"
          alt="profile"
          placeholder="blurred"
          width={300}
          height={300}
          layout="fixed"
          style={{margin: `0 auto`}}
        />
        <div></div>
        <h3>Emi</h3>
        <div>
          <p style={{marginTop: `1rem`, marginBottom: `1rem`}}>
            <a
              style={{marginRight:10}}
              href={`https://twitter.com/emmie0works`}
              target="_blank"
              rel="noopener noreferrer"
              >
              <FaTwitter />
            </a>
            <a
              style={{marginRight:10}}
              href={`https://www.instagram.com/emmieworks`}
              target="_blank"
              rel="noopener noreferrer"
            >
              <FaInstagram />
            </a>
            <a
              style={{marginRight:10}}
              href={`https://pinterest.com/0forest`}
              target="_blank"
              rel="noopener noreferrer"
            >
              <FaPinterest />
            </a>
            <a
              style={{marginRight:10}}
              href={`https://github.com/emmieworks`}
              target="_blank"
              rel="noopener noreferrer"
            >
              <FaGithub />
            </a>
          </p>
        </div>
      </div>
      <div className={styles.right}>
        <p>東京を拠点に活動しているフリーランスのWebデザイナー＆エンジニアです。</p>
        <p>元々は企業でシステムエンジニア・経営コンサルタントとして働いていました。より親身に、ITを通じてお客様の活動を幅広くサポートしたいと思い、独立しました。</p>
        <p>専門的な知識が求められるWebの分野で、ビジネスを広げていく土台として、あなたの相談相手になれた嬉しいです。</p>
        <p>「こんなことできる？」「何からはじめたらいい？」など、お気軽にご相談くださいね。</p>
        <Link to ="/profile/" className={button.btn}>プロフィール</Link>
        <a href="https://0forest.com" target="_blank" rel="noreferrer" className={button.btn}>ブログ</a>
      </div>
    </section>
    <section id="contact" className={styles.contact}>
      <div className={styles.container}>
        <h2>Contact</h2>
        <p style={{padding: `1rem`}}>お仕事のご相談・ご依頼はお問い合わせフォームからどうぞ</p>
        <a href="https://0forest.com/contact" className={`${button.btn} ${button.white}`}>お問い合わせ</a>
      </div>
      <div className={styles.back}>
        <StaticImage
          src="../images/bg-contact.jpg"
          alt=""
          placeholder="blurred"
          layout="constrained"
          style={{height : "100%"}}
        />
      </div>
    </section>
  </Layout>
  );
}
export default IndexPage

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
