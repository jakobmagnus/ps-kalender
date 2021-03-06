import * as React from "react"
import { Link } from "gatsby"

import Layout from "../components/layout"

const IndexPage = () => (
  <Layout>
    <h1>Programtips rakt in i din kalender!</h1>
    <p>Prenumerera på den bästa blandningen av det just du är intresserad av från SR, SVT och UR direkt i din kalenderapp.</p>
    <p>
      <Link to="webcal://p107-caldav.icloud.com/published/2/MTAzMTcxNTQ5NDEwMzE3MZwJcqtX7Zo-VjkQqkJu8Nl1OcSZD6bBlse2PZOljUFmihsYJI0sS-PRI5zSQtIIn1CUK2Xy085FbEZooDkLuLk">Tema: Brottsdokumentär</Link> <br />
      <Link to="webcal://p107-caldav.icloud.com/published/2/MTAzMTcxNTQ5NDEwMzE3MZwJcqtX7Zo-VjkQqkJu8NlgKJyV3vEJoEmnDRtI8KJ9wWtjFKfLUWIK3AX7Admn0OcYklg1dW_llO8iYrvaxVY">Tema: Fåglar och natur</Link> <br />
      <Link to="webcal://p107-caldav.icloud.com/published/2/MTAzMTcxNTQ5NDEwMzE3MZwJcqtX7Zo-VjkQqkJu8Nl0IFM7ONoXSnSDDtq8qL1ASzrAgEnHOgP37WFKLYIGCd2QkTBTaETAa0vvU0cyClM">Tema: Kända och okända excentriker</Link> <br />
    </p>
  </Layout>
)

export default IndexPage
