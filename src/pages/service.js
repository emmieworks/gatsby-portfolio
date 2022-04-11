import * as React from 'react'
import { StaticImage } from "gatsby-plugin-image"
import Layout from '../components/layout'
import Seo from "../components/seo"
import Contact from "../components/contact"
import * as styles from "../styles/_service.module.scss"


const Service = () => {
  return (
    <Layout>
      <Seo title="Web Design" />
      <section className={styles.service}>
        <h2 className="title">Service<div>サービス</div></h2>
        <div className={`container ${styles.container}`}>
          <p style={{marginTop:60,textAlign:`center`, fontSize: `1.1em`}}>
          「活動を知ってもらうために、新しくホームページを作りたい」<br/>
          「お申込みを受け付けるホームページがほしい」<br/>
          「今あるホームページをお洒落なデザインにリニューアルしたい」</p>
          <p>個人事業主さま、中小企業さまに向けて、WordPressを使ったホームページ・ブログの作成をしています。</p>
          <p>女性エンジニアならではの、優しいデザインと、確かな技術力で、あなたの活動を支えるホームページを一緒に作っていきます。</p>

          <p>WordPressとは？<br/>
          ホームページを作成・更新できるソフトです。</p>
          <div className={`${styles.recommand}`}>
            <h3>こんな方におすすめです</h3>
            <ul>
              <li>おしゃれなデザインのホームページを作りたい</li>
              <li>自分でホームページを更新していきたい</li>
              <li>ブログ・オウンドメディアを持ちたい</li>
              <li>今あるホームページをリニューアルしたい</li>
            </ul>
          </div>
        </div>
      </section>
      <section className={styles.feature}>
        <h2 className="title">Features<div>ホームページ制作の特徴</div></h2>
        <div className={`container ${styles.container}`}>
          <ol>
            <li>
              <div>確かな技術でお客さまに合った仕組みを提案</div>
              ホームページはビジネス活動を下支えするもの。<br />
              システムエンジニア・コンサルタントタントだった経験を活かし、お客さまのビジネスの全体像を把握します。<br/>
              その上で、SNS活用や集客から申込みまでの導線など、最適なホームページの仕組みをご提案します。
            </li>
            <li>
              <div>魅力が伝わるコンセプト設計</div>
              ホームページはご自身のサービスや商品を深く見つめていく時間です。<br/>
              まずは、お仕事への想い・届けたい相手をじっくりと掘り下げて、伝えたいメッセージ、強み、必要なコンテンツなどを整理します。<br/>
              お客さまにしっかり届き、共感されるようなホームページの構成を一緒に考えましょう。
            </li>
            <li>
              <div>ホームページを始めるために必要なものを丸ごと。</div>
              基本プランには、4ページ＋ブログ＋お申込みフォームが含まれており、はじめてのホームページには充分。<br/>
              また、スマホ対応、SEO対策、セキュリティ対策などホームページを始めるために必要な設定もしっかり行います。</li>
            <li>
              <div>ご自身でホームページを運営できるようサポート</div>
              ホームページは作って終わりではなく、育てていくことを大切にしています。<br/>
              WordPressの操作レクチャーやメンテナンスなど、お客様自身でホームページを運営できるようサポートしていきます。
            </li>
            <li>
              <div>オンラインミーティングで、丁寧にコミュニケーション</div>
              ミーティングはオンライン（Zoom, Google Meet）で行いますので、全国どこからでもご依頼いただけます。<br/>
              デザインのイメージが固まっていなくても大丈夫。いろいろなアイデアを出し合いながら、一緒にイメージを形にしていきましょう。
            </li>
          </ol>
        </div>
      </section>

      <section className={styles.price}>
        <h2 className="title">Price<div>価格</div></h2>
        <div className="container">
          <div className={styles.plan}>
            <h3>基本プランに含まれるもの</h3>
            <ul>
              <li>トップページ</li>
              <li>下層ページ（3ページまで）</li>
              <li>レスポンシブ対応</li>
              <li>WordPressのインストール・セットアップ</li>
              <li>ブログ機能</li>
              <li>SNSボタン設置</li>
              <li>お問い合わせフォーム</li>
              <li>SEO対策・セキュリティ対策</li>
              <li>アクセス解析ツール</li>
              <li>操作レクチャー</li>
            </ul>
          </div>

          <p>価格　330,000円 (税込)</p>
          <div style={{fontSize: `0.9rem`}}>※ホームページの運営には、別途ドメイン・サーバー代（年間15,000円程度）が発生します。</div>
          <div style={{fontSize: `0.9rem`}}>※ページ数が増える場合など、基本プラン内におさまらない場合には、ヒアリング時にお伝えして、お見積りさせていただきます。</div>
        </div>

      </section>

      <section>
        <h2 className="title">Process<div>ホームページ制作の流れ</div></h2>
        <div className={`container ${styles.container}`}>
        <p style={{textAlign:`center`}}>初めてのお客様は、まずは60分の無料相談でお話を伺っております。<br/>
        <a href="https://0forest.com/service-contact/" target="_blank" rel="noreferrer">お申し込みフォーム</a>よりご連絡ください。</p>
        <StaticImage
          src="../images/web-flow.jpg"
          alt="Web Development"
          placeholder="blurred"
          layout="constrained"
          style={{margin: `0 auto`}}
        />
        </div>
      </section>

      <section className={styles.faq}>
        <h2 className="title">Q&A<div>よくある質問</div></h2>
        <div className="container" style={{margin: `4rem auto`}}>
        <dl>
          <dt>制作期間はどれくらいですか？</dt>
          <dd>5ページ程度のホームページで2〜3ヶ月の期間をいただいております。<br / >
            制作の過程でお客様に原稿・素材のご用意をいただいたり、デザインやWebページのチェックなどをしていただきます。
            お客様にお願いした作業が遅れてしまいますと、その分スケジュールも伸びてしまいますのでご協力よろしくお願いします。
          </dd>
        </dl>
        <dl>
          <dt>はじめて、ホームページを作りますが、何が必要でしょうか？</dt>
          <dd>ホームページの運営には、ドメインとサーバーを用意する必要があります。<br / >
            <ul style={{marginLeft: `1rem`}}>
              <li>サーバー（ホームページの格納場所）…初期費用3000円程度、月額1000円程度</li>
              <li>ドメイン（URL)…年1000~3000円程度</li>
              </ul>
            個人のお客さまですと、使用するサーバー・ドメインのプランにもよりますが、月額1500円程度の維持費がかかります。<br /><br />
            ホームページ制作時には、各ページに掲載する文章・画像／写真などの素材をご準備いただきます。
          </dd>
        </dl>
        <dl>
          <dt>原稿や素材はどのように準備すればよいですか？</dt>
          <dd>
            原稿をご用意いただく場合、コピーペーストができるよう、テキストデータでのご入稿をお願いいたします。<br />
            写真は、 縦横：2000px以上、JPEG形式で高画質のものをご準備ください。<br />
            イラストなどの素材データは、AI、EPS、PNG、PDF、JPEGのいずれかのファイル形式でご準備ください。<br />
            写真、イラストについては、無料／有料素材からこちらで探すこともできます。
          </dd>
        </dl>
        </div>
      </section>

      <Contact />
    </Layout>
  )
}
export default Service
