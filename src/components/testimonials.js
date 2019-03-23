import React from 'react'
import { Container, UncontrolledCarousel } from 'reactstrap'
import PlaceholderImg from '../images/placeholder.png'
import './testimonials.sass'

const items = [
  {
    src: PlaceholderImg,
    altText: 'Slide 1',
    caption: 'Slide 1',
    header: 'Slide 1 Header',
  },
  {
    src: PlaceholderImg,
    altText: 'Slide 2',
    caption: 'Slide 2',
    header: 'Slide 2 Header',
  },
  {
    src: PlaceholderImg,
    altText: 'Slide 3',
    caption: 'Slide 3',
    header: 'Slide 3 Header',
  },
]

const Testimonials = () => {
  return (
    <section className="section testimonials">
      <Container className="text-center">
        <UncontrolledCarousel items={items} />
      </Container>
    </section>
  )
}

export default Testimonials
