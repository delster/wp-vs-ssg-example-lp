import React from 'react'
import { Link } from "gatsby"
import PropTypes from "prop-types"
import {
  Collapse,
  Navbar,
  NavbarToggler,
  NavbarBrand,
  Nav,
  NavItem,
} from 'reactstrap'
import RegisterButton from './registerbutton'
import './header.sass'

class Header extends React.Component {
  constructor(props) {
    super(props);
    this.toggle = this.toggle.bind(this);
    this.state = { isOpen: false };
  }

  toggle() { this.setState({ isOpen: !this.state.isOpen }) }

  render(props) {
    return (
      <Navbar dark expand="md">
        <NavbarBrand href="/">{this.props.siteTitle}</NavbarBrand>
        <NavbarToggler onClick={this.toggle} />
        <Collapse isOpen={this.state.isOpen} navbar>
          <Nav className="ml-auto" navbar>
            <NavItem>
              <Link to="/about">About</Link>
            </NavItem>
            <NavItem>
              <Link to="/meet-stephanie">Meet Stephanie</Link>
            </NavItem>
            <NavItem>
              <Link to="/podcasts">Podcasts</Link>
            </NavItem>
            <NavItem>
              <RegisterButton />
            </NavItem>
          </Nav>
        </Collapse>
      </Navbar>
    );
  }
}

Header.propTypes = {
  siteTitle: PropTypes.string,
}

Header.defaultProps = {
  siteTitle: ``,
}

export default Header


