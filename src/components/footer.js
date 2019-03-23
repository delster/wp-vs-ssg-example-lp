import React from 'react'
import { Link } from 'gatsby'
import { Container, Row, Col } from 'reactstrap'
import './footer.sass'

const Footer = () => (
  <footer style={{ backgroundColor: `#16272c` }}>
    <Container>
      <Row>
        <Col xs="4">
          <p>
            © 2019 The Leveraged Practice <br />
            Powered by{' '}
            <a
              href="https://purplefinchstudios.com"
              target="_blank"
              rel="noopener noreferrer"
            >
              PFS Digital
            </a>
          </p>
        </Col>
        <Col xs="4">
          <p>
            <Link to="/">Privacy Policy</Link>
            <Link to="/">Terms and Conditions</Link>
            <Link to="/">Contact</Link>
          </p>
        </Col>
        <Col xs="4">
          <p>
            <Link to="/">FB</Link>
            <Link to="/">IG</Link>
            <Link to="/">TW</Link>
          </p>
        </Col>
      </Row>
    </Container>
  </footer>
)

export default Footer
