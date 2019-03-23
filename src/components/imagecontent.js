import React from 'react'
import { Container, Row, Col } from 'reactstrap'
import './imagecontent.sass'

const ImageContent = props => {
  const { dark, bg, flipped, imgW, image } = props
  // Here's a different way you could style things instead of Sass Modules.
  const sectionStyle = {
    color: dark?`#ffffff`:`inherit`,
    backgroundColor: bg
  }
  const rowStyle = {
    flexDirection: flipped?`row-reverse`:`row`
  }
  const imgStyle = {
    width: imgW?imgW:``
  }

  return (
    <section
      className={`section imagecontent`}
      style={sectionStyle}>
      <Container>
        <Row style={rowStyle}>
          <Col xs="12" md="6">
            <img src={image} style={imgStyle} alt="" />
          </Col>
          <Col xs="12" md="6">
            {props.children}
          </Col>
        </Row>
      </Container>
    </section>
  )
}

export default ImageContent