import React from 'react'
import Layout from '../components/layout'
import SEO from '../components/seo'

const AboutPage = () => (
  <Layout>
    <SEO title="About" keywords={[`wordpress`, `versus`, `gatsby`]} />
    <h1>This is the About Page.</h1>
  </Layout>
)

export default AboutPage