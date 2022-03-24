import * as React from "react"
import { Link } from "gatsby"

import Layout from "../components/layout"

const IndexPage = () => (
  <Layout>
    <h1>Vill du bli inspirerad?</h1>
    <p>Få det bästa från SR, SVT och UR direkt i din kalender.</p>
    <p>
      <Link to="webcal://p107-caldav.icloud.com/published/2/MTAzMTcxNTQ5NDEwMzE3MZwJcqtX7Zo-VjkQqkJu8Nl1OcSZD6bBlse2PZOljUFmihsYJI0sS-PRI5zSQtIIn1CUK2Xy085FbEZooDkLuLk">Tema: Brottsdokumentär</Link> <br />
      <Link to="webcal://p107-caldav.icloud.com/published/2/MTAzMTcxNTQ5NDEwMzE3MZwJcqtX7Zo-VjkQqkJu8NlgKJyV3vEJoEmnDRtI8KJ9wWtjFKfLUWIK3AX7Admn0OcYklg1dW_llO8iYrvaxVY">Tema: Fåglar och natur</Link> <br />
      <Link to="webcal://p107-caldav.icloud.com/published/2/MTAzMTcxNTQ5NDEwMzE3MZwJcqtX7Zo-VjkQqkJu8NlgKJyV3vEJoEmnDRtI8KJ9wWtjFKfLUWIK3AX7Admn0OcYklg1dW_llO8iYrvaxVY">Tema: Kända och okända excentriker</Link> <br />
    </p>
  </Layout>
)

export default IndexPage