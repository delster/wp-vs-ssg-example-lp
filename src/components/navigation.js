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

class Header extends React.Component {
  constructor(props) {
    super(props);
    this.toggle = this.toggle.bind(this);
    this.state = { isOpen: false };
  }

  toggle() { this.setState({ isOpen: !this.state.isOpen }) }

  render(props) {
    return (
      <div>
        <Navbar color="light" light expand="md">
          <NavbarBrand href="/">TEST</NavbarBrand>
          <NavbarToggler onClick={this.toggle} />
          <Collapse isOpen={this.state.isOpen} navbar>
            <Nav className="ml-auto" navbar>
              <NavItem>
                <Link to="/">About</Link>
              </NavItem>
              <NavItem>
                <Link to="/">Meet Stephanie</Link>
              </NavItem>
              <NavItem>
                <Link to="/">Podcasts</Link>
              </NavItem>
              <NavItem>
                <a href="https://github.com/delster/wp-vs-ssg-example-lp">GitHub</a>
              </NavItem>
              <NavItem>
                <RegisterButton />
              </NavItem>
            </Nav>
          </Collapse>
        </Navbar>
      </div>
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


