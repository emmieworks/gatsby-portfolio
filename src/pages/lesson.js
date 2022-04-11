import * as React from 'react'
import Layout from '../components/layout'
import Seo from "../components/seo"
import Contact from "../components/contact"
import * as styles from "../styles/_service.module.scss"


const Service = () => {
  return (
    <Layout>
      <Seo title="Lesson" />
      <section className={styles.service}>
        <h2 className="title">Lesson<div>WordPressレッスン</div></h2>
        <div className="container">
          <p style={{marginTop:60,textAlign:`center`, fontSize: `1.1em`}}>「自分の活動やビジネスを支えるホームページを作りたい」<br/>
          「自分でもホームページを更新できるようになりたい」<br/>
          「素人っぽくないおしゃれなデザインのホームページがほしい」</p>

          <p style={{textAlign:`center`, fontSize: `1.1em`}}>個人レッスンで、あなたに合ったホームページを一緒に作りませんか。</p>

          <p style={{marginTop:60}}>ホームページはWeb上の名刺がわりでもあり、活動の土台になる場所です。<br />
          また、育てていくことで、サービスや商品の魅力をお客さまに届ける、強い味方になります。</p>
          <p>Web制作会社に依頼し、細部まで作りこんだホームページを作るほどではないけれど、自力でつくるのは難しい。<br/>
          まずは自分で運営できるような手頃なサイズのホームページを持ちたい。</p>

          <p>そんなご要望を受けて、私はWordPressをつかったホームページ制作を行ってまいりました。<br/>
          これまで５年ほど女性起業家さんや中小企業主さんのホームページ作成・運営に数多く携わらせていただいています。</p>

          <p>そこで感じたのは、お客さま自身の「ホームページを育てていく」スキルが大切だということ。</p>

          <p>個人事業主さんはサービスや発信内容の変化にあわせて、ホームページも自分でこまめに修正・更新していく必要があります。<br/>
          また、中小企業さんも、自社内でホームページの運営や分析されるケースが多いです。<br/>
          でも、営業や運営、事務などの実務を行いながら、ホームページまでは手が回らないものではないでしょうか。</p>

          <p>WordPressは誰でもホームページを作れるツールですが、その分、機能が多いため、初めての方は挫折しやすいです。<br/>
          また、配色やレイアウトなど、デザインを意識しないと、素人っぽい出来上がりになってしまいます。</p>
          <p>ホームページ作りを、1人で進めていくのは、とても難しいのです。</p>
          <p>これまでのWordPress制作・運営経験生かして、ご自身でホームページを作る・育てるお手伝いができたら。</p>

          <p>こんな思いから 個人レッスンをスタートしました。</p>
          <div className={`${styles.recommand}`}>
            <h3>こんな方におすすめです</h3>
            <ul>
              <li>おしゃれなデザインのホームページを作りたい</li>
              <li>自分でホームページを修正・更新できるようになりたい</li>
              <li>サービスやメニューのリニューアルに合わせて自由に変更したい</li>
              <li>ホームページを作ってもらったけど、うまく活用できていない</li>
              <li>今使ってるホームページを自分好みに変えたい</li>
              </ul>
            </div>
          </div>
      </section>

      <section className={styles.feature}>
        <h2 className="title">Features<div>個人レッスンの特徴</div></h2>
        <div className={`container ${styles.container}`}>
          <ol>
            <li>
              <div>サービスの魅力が伝わるコンセプト設計</div>
              まずは、お仕事への想い・届けたい相手をじっくりと伺って、伝えたいメッセージ、強み、必要なコンテンツなどを整理します。また、SNSなどの活用も含めて、集客〜申込までのお客さまの流れを整えます。<br/>
              お客さまにしっかり届き、共感されるようなホームページの構成を一緒に考えます。
            </li>
            <li>
              <div>わかりやすさと世界観を伝えるデザイン</div>
              ホームページで、商品・サービスのイメージを伝えるために、統一感のある配色や素材の選び方をアドバイスします。<br/>
              また、写真素材やアイコンなど、ホームページを彩るデザイン素材もご紹介します。</li>
            <li>
              <div>あなたの手でホームページを作る力が身につきます</div>
              WordPressのインストール、ページ作成、ブログの更新、セキュリティ、分析など、WordPressでホームページを運営するために必要なことを丸ごとお伝えします。<br/>
              ホームページを作りながら、必要な操作をマスターすることができます。<br/>
              レッスン期間中は、わからない点は何度でも質問できますので、ご安心ください。</li>
            <li>
              <div>あなたのペースに合わせて進行</div>
              オンラインミーティング（Zoom, Google Meet）ですので、全国どこからでもご参加いただけます。<br/>
              レッスン中は、画面共有をしながら一緒に進めていきますので、ITに苦手意識がある方もご安心ください。
            </li>
          </ol>
        </div>
      </section>

      <section className={styles.price}>
      <h2 className="title">Price<div>価格</div></h2>
        <div className="container">
          <p>価格 88,000円(税込) / 2時間×4日間</p>
          <div style={{fontSize: `0.9rem`}}>※ホームページの運営には、別途ドメイン・サーバー代（年間15,000円程度）が発生します。</div>
        </div>
      </section>
      <section className={styles.curriculum}>
        <h2 className="title">Lesson<div>レッスンの流れ</div></h2>
        <div className="container" style={{margin: `4rem auto`}}>
        <p style={{textAlign:`center`}}>オンラインミーティング（ZoomまたはGoogle Meet）を使用します。<br />
        週1回のペースで進めていただくと、1ヶ月でホームページが完成します。</p>
        <dl>
          <dt>【１回目】HPのコンセプトづくりとWordPressの立上げ（120分）</dt>
          <dd>
            <ul style={{marginLeft: `1rem`}}>
              <li>ホームページのコンセプトを考える</li>
              <li>掲載するコンテンツを洗い出す</li>
              <li>サーバーとドメインの取得</li>
              <li>WordPressのインストールと初期設定</li>
              <li>WordPressのテーマ選び</li>
            </ul>
            次回レッスンまでの課題：ホームページで使う画像／原稿を用意する
          </dd>
        </dl>
        <dl>
          <dt>【２回目】全体デザインを決めて、トップページを作る（120分）</dt>
          <dd>
            <ul style={{marginLeft: `1rem`}}>
              <li> 配色・デザインの方向性を決める</li>
              <li>テーマの設定・デザインのカスタマイズ</li>
              <li>ヘッダー、フッター、ファビコンの設定</li>
              <li>トップページを作る</li>
            </ul>
            次回レッスンまでの課題：他ページ（プロフィール、サービスページなど）を作成する
          </dd>
        </dl>
        <dl>
          <dt>【３回目】その他ページとお問合せフォームを作る（120分）</dt>
          <dd>
            <ul style={{marginLeft: `1rem`}}>
              <li>各ページの仕上げ</li>
              <li>お問い合わせフォームの作成</li>
              <li>セキュリティツールの設定</li>
              <li>分析ツールの導入</li>
              <li>SNSの表示</li>
            </ul>
            次回レッスンまでの課題：ブログのテーマ・記事原稿を用意する
          </dd>
        </dl>
        <dl>
          <dt>【４回目】ブログを書く、HPの育て方のポイント（120分）</dt>
          <dd>
            <ul style={{marginLeft: `1rem`}}>
              <li>カテゴリー・タグの設定</li>
              <li>ブログの投稿方法</li>
              <li>WordPressのアップデートについて</li>
              <li>分析ツールの見方と分析のポイント</li>
            </ul>
          </dd>
        </dl>
        </div>
      </section>

      <section className={styles.start}>
        <h2 className="title">How to Start<div>お申し込みの流れ</div></h2>
        <div className={`container ${styles.container}`}>
        <p style={{textAlign:`center`}}>初めてのお客様は、まずは60分の無料相談でお話を伺っております。<br/>
        <a href="https://0forest.com/service-contact/" target="_blank" rel="noreferrer">お申し込みフォーム</a>よりご連絡ください。</p>

          <ol>
              <li>
                <div>お問い合わせ</div>
                お問い合わせフォームからご連絡ください。2営業日以内にお返事いたします。
              </li>
              <li>
                <div>ヒアリング</div>
                まずは60分の無料相談でお話を伺っております。<br />
                ホームページでやりたいこと、お悩みのことなど、くわしくお話を聞かせてください。ご希望に合わせてどんなホームページを作るか、どんな流れで作っていくかおはなしします。
              </li>
              <li>
                <div> レッスンお申込み</div>
                 レッスン内容とホームページの方向性にご納得いただけましたら、レッスンにお申し込みください。
              </li>
              <li>
                <div>ご入金</div>
              </li>
              <li>
                <div>レッスン開始</div>
                ご入金を確認後、レッスンのスケジュールを調整いたします。
              </li>
          </ol>
        </div>
      </section>


      <Contact />
    </Layout>
  )
}
export default Service
