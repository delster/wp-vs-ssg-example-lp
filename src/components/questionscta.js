import React from "react"
import { Container } from "reactstrap"

const QuestionsCTA = props => (
  <section
    className="section questionscta text-center"
    style={{ backgroundColor: `#e6f2ee`}}
  >
    <Container>
      {props.children}
    </Container>
  </section>
)

export default QuestionsCTA
