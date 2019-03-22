import React from "react"
import { Container, Row, Col } from "reactstrap"
import "./hero.sass"

const Hero = props => {
  return (
    <header className="section header hero">
      <Container>
        <Row>
          <Col xs="6" md="8">
            {props.children}
          </Col>
        </Row>
      </Container>
    </header>
  )
}

export default Hero
