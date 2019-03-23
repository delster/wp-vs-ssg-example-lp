import React from "react"
import { Container, Row, Col } from "reactstrap"
import "./hero.sass"

const Hero = props => {
  return (
    <header className="section header hero">
      <Container>
        <Row>
          <Col xs="8" md="6">{props.children}</Col>
        </Row>
      </Container>
    </header>
  )
}

export default Hero
