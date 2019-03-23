import React from 'react'
import { Link } from 'gatsby'
import { Button } from 'reactstrap'
import './registerbutton.sass'

const RegisterButton = () => <Button className="btn-register" tag={Link} to="/register">Register Now</Button>

export default RegisterButton