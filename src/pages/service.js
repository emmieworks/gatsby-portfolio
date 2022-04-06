import * as React from 'react'
import { StaticImage } from "gatsby-plugin-image"
import Layout from '../components/layout'
import Seo from "../components/seo"
import Contact from "../components/contact"
import { GoGraph, GoFileMedia, GoDatabase } from "react-icons/go";
import * as styles from "../styles/_service.module.scss"


const Service = () => {
  return (
    <Layout>
      <Seo title="Service" />
      <section className={styles.service}>
        <h2 className="title">Service<div>サービス</div></h2>
        <div className={`container ${styles.container}`}>
          <div id="service01" className={styles.img01}>
            <StaticImage
              src="../images/service01.jpg"
              alt="Web Development"
              placeholder="blurred"
              width={480}
              layout="constrained"
              style={{margin: `0 auto`}}
            />
          </div>
          <div className={styles.desc01}>
            <h3>Web Design<div>ホームページ制作</div></h3>
            <p>これからホームページをはじめるために、必要なものを丸ごとセットにしました。
            WordPressを使用しますので、ビジネスサイト、ブログ、LPなど、ご希望の用途に合わせてお使いいただけます。</p>
            <p>価格　330,000円 (税込)<br/>
            <div style={{fontSize: `0.8rem`}}>※ドメイン・サーバー代は含まれません。</div></p>
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
          <div id="service02" className={styles.img02}>
            <StaticImage
              src="../images/service02.jpg"
              alt="Consulting"
              placeholder="blurred"
              width={480}
              layout="constrained"
              style={{margin: `0 auto`}}
            />
          </div>
          <div className={styles.desc02}>
            <h3>Lesson<div>個別レッスン</div></h3>
            <p>WordPressを使ったホームページを作成・運営するためのオンラインレッスンです。
            4日間のレッスンを通じて、ご自分の手でオリジナルのホームページを作成できます。</p>
            <p>価格 88,000円(税込) / 2時間×4日間</p>
            <ul>
              <li>HPのコンセプトづくり</li>
              <li>WordPressのインストール・初期設定</li>
              <li>テーマ選び、デザインの設定</li>
              <li>ページの作成</li>
              <li>お問い合わせフォームの作成</li>
              <li>ブログの投稿</li>
            </ul>
          </div>
        </div>
      </section>

      <section className={styles.price}>
        <h2 className="title">Price<div>価格</div></h2>
        <div className="container">
          <h3>追加オプション</h3>
          <dl>
            <dt>ページ追加</dt>
            <dd>20,000円 / 1ページあたり</dd>
          </dl>
          <dl>
            <dt>会員サイトなど機能追加</dt>
            <dd>20,000円〜 (都度お見積り)</dd>
          </dl>
          <dl>
            <dt>既存のサイトのリニューアル</dt>
            <dd>都度お見積り</dd>
          </dl>
          <h3>保守・更新費用</h3>
          <dl>
            <dt>ページ内文言変更・画像差し替え</dt>
            <dd>1,000円 / 1ページ</dd>
          </dl>
          <dl>
            <dt>上記以外の修正</dt>
            <dd>修正内容により都度お見積もり</dd>
          </dl>
          <dl>
            <dt>ページ新規作成</dt>
            <dd>20,000円 / 1ページ</dd>
          </dl>
          <dl>
            <dt>メンテナンス（データのバックアップ、最新バージョンのアップデート）</dt>
            <dd>5,000円</dd>
          </dl>
          <dl>
            <dt>サーバー移転・ドメイン変更</dt>
            <dd>都度お見積り</dd>
          </dl>
          <dl>
            <dt>操作レクチャー・運営相談</dt>
            <dd>5,000円 / 1時間</dd>
          </dl>
          <div style={{fontSize: `0.8rem`, textAlign:`right`, margin: `5px 0`}}>
          ※価格はすべて税抜き表示です。<br />
          ※価格は予告なく変更する場合がありますのでご了承ください。
          </div>
        </div>

      </section>

      <section className={styles.process}>
        <h2 className="title">Process<div>ホームページ制作の流れ</div></h2>
        <div className={`container ${styles.container}`}>
          <ol>
              <li>
                <div>お問い合わせ</div>
                お問い合わせフォームからご連絡ください。
              </li>
              <li>
                <div>ヒアリング</div>
                まずは60分の無料相談を承っております。<br />
                ホームページ作成の流れについてご説明し、ご要望をヒアリングさせていただきます。<br />
                現在お悩みのことや、ホームページでやりたいことなど、くわしくお話を聞かせてください。あなたに合った内容を一緒に考えましょう。
              </li>
              <li>
                <div> 企画提案・お見積り</div>
                ヒアリングを元に、ホームページへのご提案と概算のお見積もりを提出いたします。ご予算に合わない場合は、ご予算内で最大限できることを ご提案いたします。
              </li>
              <li>
                <div>正式なご依頼</div>
                サービスの詳細や料金にご納得いただけましたら、ご依頼ください。<br />
                これ以降の作業には、料金が発生します。
              </li>
              <li>
                <div>原稿の作成・素材の準備</div>
                ホームページで使う、原稿や素材をご準備いただきます。
              </li>
              <li>
                <div>デザイン</div>
                原稿・素材が揃いましたら、ページレイアウトやデザインを検討いたします。< br />
                ※デザインの修正は、2回まで承っております。
              </li>
              <li>
                <div>コーディング</div>
                デザインを元に、Webページのコーディング・WordPressのセットアップを行います。
              </li>
              <li>
                <div>チェック・修正</div>
                Webページ上で、表示内容や動作をご確認いただきます。
              </li>
              <li>
                <div>公開</div>
                お客様のサーバーにデータをアップロードして納品とさせていただきます。<br/>
                WordPressの使い方や更新方法などをご説明させていただきます。
              </li>
          </ol>
        </div>
      </section>

      <section className={`container ${styles.notice}`}>
        <h2>対応が難しい作業</h2>
        <div className={styles.container}>
          <div>
            <div style={{textAlign:`center`}}>
              <GoGraph size="3rem" />
            </div>
            <h3>マーケティング</h3>
            <p>商品・サービスのマーケティング戦略については、専門外のため、事前にお客さまの方でご検討ください。お客さまのやりたいことに対して、Webをどう活用できるか、技術的な側面でサポートをさせていただきます。</p>
          </div>
          <div>
            <div style={{textAlign:`center`}}>
              <GoDatabase size="3rem" />
            </div>
            <h3>サーバーの構築・運用管理</h3>
            <p>
              サーバー・ドメインの紐付け、WordPressのインストールなど、基本的なセットアップは対応できます。個人で活動しているため、サーバーの運用管理などは業務としての対応が難しい範囲です。新規にホームページを立ち上げる場合には、用途に合わせてサーバー会社の活用をご提案しております。
            </p>
          </div>
          <div>
            <div style={{textAlign:`center`}}>
              <GoFileMedia size="3rem" />
            </div>
            <h3>原稿・写真など素材の作成</h3>
            <p>
              ホームページに掲載する文章や、写真などの素材は、お客様の思いを反映する要のコンテンツですので、ご自身でご用意いただいております。
              写真など素材については、画像／写真素材を購入したり、イメージをお伺いしながらこちらでも作成できることがありますので、ご相談ください。
            </p>
          </div>
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
