import * as React from 'react'
import { Link } from "gatsby"
import { StaticImage } from "gatsby-plugin-image"
import Layout from '../components/layout'
import Seo from "../components/seo"
import Sns from "../components/sns"
import { FaPalette,FaCode, FaWordpress } from "react-icons/fa";
import { GoGraph, GoFileMedia, GoDatabase } from "react-icons/go";
import * as styles from "../styles/_about.module.scss"
import * as button from "../styles/_button.module.scss"
const About = () => {
  return (
    <Layout>
    <Seo title="About" />
    <section id="profile" className={styles.profile}>
      <div className={styles.left}>
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
        <h2 className="title">Profile<div>プロフィール</div></h2>
        <p>見つけていただきありがとうございます♪<br />
        東京を拠点に活動しているフリーランスのWebデザイナー＆エンジニアのえみです。</p>
        <p>元々はシステムエンジニア・経営コンサルタントとして働いていました。<br />
        「IT技術をベースに、お客さまの活動に寄りそうサポートしたい。」と思い、独立しました。<br />
        現在は個人で活動される方、中小企業主さん向けに、ホームページを作成しています。<br />
        また、ご自身でWordPressを使う方のためのオンライン個人レッスンも行っています。</p>
        <p>プログラミング・デザインスキルを磨き、学びの記録をブログに残しています。</p>
        <a href="https://0forest.com" target="_blank" rel="noreferrer" className={button.btn}>ブログ</a>
      </div>
    </section>
    <section class={styles.policy}>
    <h2 className="title">Policy<div>大切にしていること</div></h2>
    <div className={`container ${styles.container}`}>
      <h3>1. 人柄や価値観に寄りそって世界観を表現すること</h3>
      <p>まずは、お仕事で大切にしている思いなどをていねいにお聞きして、商品・サービスに宿る価値観を理解します。<br />
      伝えたいメッセージと魅力が最大限届くように、導線やコンテンツを整理し、デザインに落としていきます。</p>
      <h3>2. お客さま自身で使い方をマスターできるようにサポート</h3>
      <p>ホームページは作って終わりではなく、ビジネスに合わせて変化・成長していくもの。<br />
      お客様ご自身でも更新していけるように、使い方をレクチャーします。</p>
    </div>
    </section>
    <section className={styles.skill}>
      <h2 className="title">Skills<div>お手伝いできること</div></h2>
      <div className={`container ${styles.grid}`}>
        <div className={styles.icon}>
          <FaPalette size="4rem" />
        </div>
        <div>
          <h3>Web Design</h3>
          <p>伝えたい情報を整理して、見やすく使いやすいサイトをデザインします。特に、女性向けの柔らかいデザインやシンプルで洗練されたデザインが得意です。</p>
        </div>
        <div className={styles.icon}>
          <FaCode size="4rem" />
        </div>
        <div>
          <h3>Coding</h3>
          <p>サイトの目的や将来性にあわせて、必要な機能を提案します。今後のメンテナンス性を考慮した、見やすいコーディングを行います。</p>
        </div>
        <div className={styles.icon}>
          <FaWordpress size="4rem" />
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
    <section class={styles.notice}>
    <div className={`container ${styles.container}`}>
      <h2>対応が難しい作業</h2>
      <div className={styles.grid}>
        <div>
          <div style={{textAlign:`center`}}>
            <GoGraph size="4rem" />
          </div>
          <h3>マーケティング</h3>
          <p>商品・サービスのマーケティング戦略については、専門外のため、事前にお客さまの方でご検討ください。お客さまのやりたいことに対して、Webをどう活用できるか、技術的な側面でサポートをさせていただきます。</p>
        </div>
        <div>
          <div style={{textAlign:`center`}}>
            <GoDatabase size="4rem" />
          </div>
          <h3>サーバーの構築・運用管理</h3>
          <p>
            サーバー・ドメインの紐付け、WordPressのインストールなど、基本的なセットアップは対応できます。個人で活動しているため、サーバーの運用管理などは業務としての対応が難しい範囲です。新規にホームページを立ち上げる場合には、用途に合わせてサーバー会社の活用をご提案しております。
          </p>
        </div>
        <div>
          <div style={{textAlign:`center`}}>
            <GoFileMedia size="4rem" />
          </div>
          <h3>原稿・写真など素材の作成</h3>
          <p>
            ホームページに掲載する文章や、写真などの素材は、お客様の思いを反映する要のコンテンツですので、ご自身でご用意いただいております。
            写真など素材については、画像／写真素材を購入したり、イメージをお伺いしながらこちらでも作成できることがありますので、ご相談ください。
          </p>
        </div>
      </div>
      </div>
    </section>
    <section className={styles.history}>
      <h2 className="title">History<div>経歴</div></h2>
      <div className={`container ${styles.container}`}>
        <ul className={styles.timeline}>
          <li>1987年　東京生まれ</li>
          <li>2000年　学生時代から趣味でホームページや簡単なプログラムを作る</li>
          <li>2006年　アメリカの大学でコンピューターサイエンスを専攻</li>
          <li>2010年　IT企業でシステムエンジニア・ITコンサルタントとして働く</li>
          <li>2014年　コンサルティングファームで経営コンサルタントとして働く</li>
          <li>2017年　WordPressブログをきっかけにWeb制作・活用の相談を受けるようになる</li>
          <li>2018年　フリーランスとして独立</li>
          <li>2020年　Webエンジニア以外に心理カウンセラーの活動もはじめ、パラレルキャリア中</li>
        </ul>
      </div>

    </section>

    </Layout>
  )
}
export default About
