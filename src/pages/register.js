import React from "react"
import { Link } from "gatsby"
import SEO from "../components/seo"

const RegisterPage = () => (
  <>
    <SEO title="Register" keywords={[`wordpress`, `versus`, `gatsby`]} />
    <h1>This is the Register Page.</h1>
    <p>You clicked a button that said "Register Now".</p>
    <p>You can go back to the <Link to="/">demo home page</Link> now.</p>
  </>
)

export default RegisterPage
