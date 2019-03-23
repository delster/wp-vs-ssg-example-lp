import React from 'react'
import { Container, Row, Col } from 'reactstrap'

const ThreeColumn = props => (
  <section className="section threecolumn">
    <Container>
      <Row>
        {props.children.map((e, i) => <Col key={i}>{e}</Col>)}
      </Row>
    </Container>
  </section>
)

export default ThreeColumn
