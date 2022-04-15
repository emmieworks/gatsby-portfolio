import * as React from 'react'
import { StaticImage } from "gatsby-plugin-image"
import Layout from '../components/layout'
import Seo from "../components/seo"
import Contact from "../components/contact"

import * as styles from "../styles/_service.module.scss"

const Service = () => {
  return (
    <Layout>
      <Seo title="WordPressホームページ制作" />
      <section className={styles.service}>
        <h2 className="title">Service<div>サービス</div></h2>
        <div className={`container ${styles.container}`}>
          <p style={{marginTop:60,textAlign:`center`, fontSize: `1.1em`}}>
          「商品・サービスを知ってもらうために、新しくホームページを作りたい」<br/>
          「お申込みを受け付けるホームページがほしい」<br/>
          「今あるホームページをお洒落なデザインにリニューアルしたい」</p>
          <p>個人事業主さま、法人さまに向けて、WordPressを使ったホームページ・ブログの作成をしています。</p>
          <p>女性エンジニアならではの、優しいデザインと、確かな技術力で、あなたの活動を支えるホームページを一緒に作っていきます。</p>

          <p>WordPressは、ホームページを作るための無料ソフトです。<br/>
          <ul style={{margin:`1rem 1.5rem`}}>
            <li>さまざまなレイアウト・デザインのページを作成できる</li>
            <li>ホームページにブログをもてる</li>
            <li>お問い合わせフォームや会員限定コンテンツなどの機能を追加できる</li>
          </ul>
          WordPressを使うと、自由度の高いホームページを作ることができます。          </p>
          <p>一方で、サーバーやドメインなど運用費(年間15,000円程度)がかかったり、カスマイズが必要だったりと、ホームページを立ち上げる際には専門的なスキルが求められます。</p>
          <p>ホームページを始めるために、企画からデザイン・コーディング・運用サポートまで、必要なことをオールインワンでサポートしています。</p>
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
              その上で、集客から申込みまでの導線など、最適なホームページの仕組みをご提案します。
            </li>
            <li>
              <div>魅力が伝わるコンセプト設計</div>
              ホームページはご自身のサービスや商品を深く見つめていく時間です。<br/>
              まずは、お仕事への想い・届けたい相手をじっくりと掘り下げて、伝えたいメッセージ、強み、必要なコンテンツなどを整理します。<br/>
              お客さまにしっかり届き、共感されるようなホームページの構成を一緒に考えましょう。
            </li>
            <li>
              <div>ホームページを始めるために必要なものを丸ごとセット</div>
              基本プランには、4ページ＋ブログ＋お申込みフォームが含まれており、シンプルなホームページには充分なボリューム。<br/>
              また、スマホ対応、SEO対策、セキュリティ対策など安心してホームページを続けるための設定もしっかり行います。</li>
            <li>
              <div>ご自身でホームページを運営できるようサポート</div>
              作って終わりではなく、ホームページを育てることを大切にしています。<br/>
              WordPressの操作レクチャーやメンテナンス方法など、お客様自身でホームページを運営できるようサポートしています。
            </li>
            <li>
              <div>オンラインミーティングで、丁寧にコミュニケーション</div>
              ミーティングはオンライン（Zoom, Google Meet）で行いますので、全国どこからでもご依頼いただけます。<br/>
              ホームページのイメージが固まっていなくても大丈夫。いろいろなアイデアを出し合いながら、一緒に形にしていきましょう。
            </li>
          </ol>
        </div>
      </section>

      <section className={styles.price}>
        <h2 className="title">Price<div>基本価格</div></h2>
        <div className="container">
          <div className={styles.plan}>
            <h3>基本プランに含まれるもの</h3>
            <ul>
              <li>トップページ</li>
              <li>下層ページ（3ページまで）</li>
              <li>レスポンシブ対応</li>
              <li>WordPressのインストール・セットアップ</li>
              <li>ブログ機能</li>
              <li>お問い合わせフォーム</li>
              <li>SNSボタン設置</li>
              <li>SEO対策</li>
              <li>セキュリティ対策</li>
              <li>アクセス解析ツール</li>
              <li>操作レクチャー</li>
            </ul>
          </div>

          <p>価格　330,000円 (税込)</p>
          <div style={{fontSize: `0.9rem`}}>※ホームページの運営には、別途ドメイン・サーバー代（年間15,000円程度）が発生します。</div>
          <div style={{fontSize: `0.9rem`}}>※ページ数が増える・機能が追加される場合など、基本プラン内におさまらない場合には、ヒアリング時にお伝えして、お見積りさせていただきます。</div>
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
          <dd>基本プラン（5ページ程度）のホームページで2〜3ヶ月の期間をいただいております。<br / >
            制作の過程でお客様に原稿・素材のご用意をいただいたり、デザインやWebページのチェックなどをしていただきます。<br / >
            お客様にお願いした作業が遅れてしまいますと、その分スケジュールも伸びてしまいますのでご協力よろしくお願いします。
          </dd>
        </dl>
        <dl>
          <dt>はじめて、ホームページを作りますが、運営にはどれくらい費用がかかるのものでyそうか？</dt>
          <dd>ホームページの運営には、サーバー（ホームページの格納場所）とドメインと（URL)を用意する必要があります。<br / >
            <ul style={{marginLeft: `1rem`}}>
              <li>サーバー・・・・初期費用3000円程度、月額1000円程度</li>
              <li>ドメイン・・・年1000~3000円程度</li>
              </ul>
            個人のお客さまですと、使用するサーバー・ドメインのプランにもよりますが、月額1500円程度の維持費がかかります。<br />
            初めての方には、おすすめのサーバー・ドメインや取得方法をご案内しますので、どうぞご安心ください。
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
