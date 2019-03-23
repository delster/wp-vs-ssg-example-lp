import React from "react"
import { Link } from 'gatsby'
import SEO from "../components/seo"

const NotFoundPage = () => (
  <>
    <SEO title="404: Not found" />
    <h1>404: Not Found</h1>
    <p>You clicked a link in the primary nav, didn't you? You should go back to the <Link to="/">demo home page</Link>.</p>
  </>
)

export default NotFoundPage
