import React from 'react'
import RegisterButton from './registerbutton'
import './registerbox.sass'

const RegisterBox = props => {
  const { color, heading } = props

  return (
    <div className="registerbox" style={{backgroundColor: color}}>
      <h2>{heading}</h2>
      <RegisterButton />
    </div>
  )
}

export default RegisterBox