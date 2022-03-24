import * as React from "react"
import { Link } from "gatsby"

import Layout from "../components/layout"
import Seo from "../components/seo"

const IndexPage = () => (
  <Layout>
    <Seo title="Start" />
    <h1>PS Kalender</h1>
    <p>Prenumerera på innehåll du är intresserad av till din kalender</p>
    <p>
      <Link to="webcal://p107-caldav.icloud.com/published/2/MTAzMTcxNTQ5NDEwMzE3MZwJcqtX7Zo-VjkQqkJu8Nl1OcSZD6bBlse2PZOljUFmihsYJI0sS-PRI5zSQtIIn1CUK2Xy085FbEZooDkLuLk">Brottsdokumentär</Link> <br />
    </p>
  </Layout>
)

export default IndexPage
