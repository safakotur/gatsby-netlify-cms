import React from 'react'
import { Link } from 'gatsby'
import logo from '../img/logo.svg'

const Navbar = class extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      active: false,
      navBarActiveClass: '',
    }
  }

  toggleHamburger = () => {
    // toggle the active boolean in the state
    this.setState(
      {
        active: !this.state.active,
      },
      // after state has been updated,
      () => {
        // set the class in state for the navbar accordingly
        this.state.active
          ? this.setState({
            navBarActiveClass: 'is-active',
          })
          : this.setState({
            navBarActiveClass: '',
          })
      }
    )
  }

  render() {
    return (
      <div className="header">
        <div className="container">
          <div className="header-inner">
            <Link to="/" className="logo">
              <img src={logo} alt="Hipporello Logo" />
            </Link>

            <nav>
              <a>How it Works?</a>
              <a>Use Cases</a>
              <a>Features</a>
              <a>Contact</a>
              <a className="btn-get-started" href="#">Get Started for Free</a>
            </nav>
          </div>
        </div>
      </div>
    )
  }
}

export default Navbar
