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
        東京を拠点に活動しているフリーランスのWebデザイナー＆エンジニアのえみです。</p>
        <p>元々はシステムエンジニア・経営コンサルタントとして働いていました。<br />
        「IT技術をベースに、お客さまに寄り添うサポートしたい。」と思い、独立しました。<br />
        現在は個人で活動される方、お店やサロンを開業される方、法人化される会社さん向けに、ホームページを作成しています。</p>
        <p>私が大切にしていることは<br　/>
        <br />
        <div  style={{fontWeight:`bold`, marginBottom: `10px` }}>1. お客さまの人柄や価値観に寄りそって世界観を表現すること</div>
        大切にしている思いや、現在に至るまでのご経験などをていねいにお聞きして、お客さまの人柄と価値観を理解します。<br />
        伝えたいメッセージと魅力が最大限届くように、導線を整理し、デザインに落とし込んできます。
        <br />
        <br />
        <div  style={{fontWeight:`bold`, marginBottom: `10px` }}>2. ビジネスに合わせたWeb活用法を提案すること</div>
        ホームページは作って終わりではなく、ビジネスに合わせて変化・成長していくもの。<br />
        お客様ご自身でも更新していけるように、使い方をレクチャーします。<br />
        また、HPにとどまらず、オンラインショップ、会員サイト、SNSなどのWebサービスをどう組み合わせてビジネスの成長につなげるか、一緒に考えます。<br />
        </p>
        <p>Webの分野であなたの相談相手になれた嬉しいです。<br />
        「こんなことできる？」「何からはじめたらいい？」など、お気軽にご相談くださいね。</p>
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
          <li>大学卒業後、IT企業に4年勤務し、システムエンジニア・ITコンサルタントとして、ECサイトや企業のシステムの設計・開発・運用などを幅広くサポート。<br />コンサルティングファームにて、2年半経営コンサルタントとして、お客様のビジネス課題解決を支援させていただいた。</li>
          <li>WordPressで個人ブログを作ったことをきっかけに、これから起業・副業したい方、ビジネスにWebを活用したい方からWeb制作・活用の相談を受けるようになる。</li>
          <li>フリーランスとして活動開始。個人起業家、中小企業をはじめたホームページ制作・コンサルティングに携わる。</li>
        </ul>
      </div>

    </section>

    </Layout>
  )
}
export default About
