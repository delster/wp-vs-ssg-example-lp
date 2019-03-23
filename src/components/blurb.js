import React from 'react'
import './blurb.sass'

const Blurb = props => {
  const { horizontal, image, heading, content } = props

  return (
    <div className={ `blurb is-${horizontal?'h':'v'}` }>
      <div className="blurb-img-wrap">
        <img src={image} alt="" />
      </div>
      <div className="blurb-content-wrap">
        <h3>{heading}</h3>
        <p>{content}</p>
      </div>
    </div>
  )
}

export default Blurb