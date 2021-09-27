import * as React from 'react'
import { Link } from "gatsby"
import { StaticImage } from "gatsby-plugin-image"
import Layout from '../components/layout'
import Seo from "../components/seo"
import Sns from "../components/sns"
import * as styles from "../styles/_about.module.scss"
import * as button from "../styles/_button.module.scss"
const About = () => {
  return (
    <Layout>
    <Seo title="About" />
    <section id="profile" className={styles.profile}>
      <div className={styles.left}>
      <h2 className="title">Profile<div>プロフィール</div></h2>
        <StaticImage
          src="../images/profile2.png"
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
        <p>見つけていただきありがとうございます♪<br />
        東京を拠点に活動しているフリーランスのWebデザイナー＆エンジニアのエミです。</p>
        <p>元々は企業でシステムエンジニア・経営コンサルタントとして働いていました。より親身に、ITを通じてお客様の活動を幅広くサポートしたいと思い、独立しました。</p>
        <p>現在は個人で活動されている方、お店やサロンを開業される方、法人化される会社さん向けに、ホームページを作成しています。<br />
        お客さまが大切にしている価値観、将来のビジョンをていねいにヒアリングして、見た目はもちろん、機能性やセキュリティ、メンテナンス性を重視して、一つ一つ丁寧にお作りします。</p>
        <p>ホームページは、一度作ったら終わりではなく、ビジネスに合わせて育てていくもの。安心して運用していただけるよう、レクチャーや技術的な相談も承っています。</p>
        <p>ビジネスを広げていく土台として、専門的な知識が求められるWebの分野で、あなたの相談相手になれた嬉しいです。</p>
        <p>「こんなことできる？」「何からはじめたらいい？」など、お気軽にご相談くださいね。</p>
        <Link to ="/about/" className={button.btn}>プロフィール</Link>
        <a href="https://0forest.com" target="_blank" rel="noreferrer" className={button.btn}>ブログ</a>
      </div>
    </section>
    <section className={styles.skill}>
    <h2 className="title">Skills<div>お手伝いできること</div></h2>
    <div className={`container ${styles.container}`}>
      <div style={{margin: `0 auto`}}>
        <StaticImage
          src="../images/icon-skill01.png"
          alt="webdesign"
          placeholder="blurred"
          width={75}
          layout="constrained"
        />
      </div>
      <div>
        <h3>Web Design</h3>
        <p>伝えたい情報を整理して、見やすく使いやすいサイトをデザインします。特に、女性向けの柔らかいデザインやユニセックスなデザインが得意です。</p>
      </div>
      <div style={{margin: `0 auto`}}>
        <StaticImage
          src="../images/icon-skill02.png"
          alt="coding"
          placeholder="blurred"
          width={75}
          layout="constrained"
          style={{margin: `0 auto`}}
        />
      </div>
      <div>
        <h3>Coding</h3>
        <p>サイトの目的や将来性にあわせて、必要な機能を提案します。今後のメンテナンス性を考慮した、シンプルで見やすいコーディングを行います。</p>
      </div>
      <div style={{margin: `0 auto`}}>
        <StaticImage
          src="../images/icon-skill03.png"
          alt="wordpress"
          placeholder="blurred"
          width={75}
          layout="constrained"
        />
      </div>
      <div>
        <h3>WordPress</h3>
        <p>ご自身でブログやページを更新される方にはWordPressをお勧めしています。セットアップからカスタマイズ、操作レクチャーを行います。</p>
      </div>
    </div>
    <div className="container" style={{margin: `3rem auto`}}>
    <dl>
      <dt>デザイン</dt>
      <dd>Adobe XD / Adobe Illustrator / Adobe Photoshop</dd>
    </dl>
    <dl>
      <dt>開発言語</dt>
      <dd>HTML / CSS・Sass / JavaScript・jQuery /PHP / MySQL / React / GatsbyJS</dd>
    </dl>
    <dl>
      <dt>CMS</dt>
      <dd>WordPress</dd>
    </dl>
    </div>
    </section>

    <section className={styles.history}>
      <h2 className="title">History<div>経歴</div></h2>
      <div className={`container ${styles.container}`}>
        <ul className={styles.timeline}>
          <li>学生時代からHTML、CSSなどを独学し、趣味でホームページや簡単なプログラミングを作る。大学は、アメリカにてコンピューターサイエンスを専攻。</li>
          <li>大学卒業後、IT企業に4年勤務し、システムエンジニア・ITコンサルタントとして、ECサイトや企業のシステムの設計・開発・運用などを幅広くサポート。</li>
          <li>コンサルティングファームにて、2年半経営コンサルタントとして、お客様のビジネス課題解決を支援させていただいた。</li>
          <li>WordPressで個人ブログを作ったことをきっかけに、これから起業・副業したい方、ビジネスにWebを活用したい方からWeb制作・活用の相談を受けるようになる。</li>
          <li>フリーランスとして活動開始。個人起業家、中小企業をはじめたホームページ制作・コンサルティングに携わる。</li>
        </ul>
      </div>

    </section>

    </Layout>
  )
}
export default About
