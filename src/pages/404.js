import * as React from "react"
import { Link } from "gatsby"
import Layout from "../components/layout"
import Seo from "../components/seo"
import * as button from "../styles/_button.module.scss"

const NotFoundPage = () => (
  <Layout>
    <Seo title="404: Not found" />
    <h1 style={{textAlign:`center`, margin:`2rem auto`}}>404: Not Found</h1>
    <p style={{textAlign:`center`, margin:`2rem auto`}}>申し訳ありません。ご指定のURLは存在しません。</p>
    <div style={{textAlign:`center`, margin:`2rem auto`}}>
      <Link to ="/" className={button.btn}>トップへ戻る</Link>
    </div>

  </Layout>
)

export default NotFoundPage
