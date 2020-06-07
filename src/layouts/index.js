import React from "react"

import Layout from "../layouts/Layout"
import Splash from "../layouts/Splash"

export default ({ children, pageContext }) => {
  if (pageContext.layout === "special") {
    return <Splash>{children}</Splash>
  }
  return <Layout>{children}</Layout>
}
