import * as React from "react"
import { Link } from "gatsby"
import { StaticImage } from "gatsby-plugin-image"

import Layout from "../components/layout"
import Seo from "../components/seo"

const IndexPage = () => (
  <Layout>
    <Seo title="Home" />
    <p>現在ポートフォリオサイトを製作中です！10月公開予定。</p>
    <p>
      <a href="https://0forest.com">Blogへ</a>
    </p>
  </Layout>
)

export default IndexPage
