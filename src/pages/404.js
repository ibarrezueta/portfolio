import React from "react"

import Background from "../components/background"
import SEO from "../components/seo"

const NotFoundPage = () => (
  <Background>
    <SEO title="404: Not found" />
    <h1>NOT FOUND</h1>
    <p>You just hit a route that doesn&#39;t exist... the sadness.</p>
  </Background>
)

export default NotFoundPage
