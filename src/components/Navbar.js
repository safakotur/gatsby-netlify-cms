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

    const scrollElement = (id, e) => {
      e.preventDefault();
      const el = document.getElementById(id);

      window.scroll({
        behavior: 'smooth',
        left: 0,
        top: el.offsetTop - 60
      });

      this.toggleHamburger()
    }

    return (
      <div className="header navbar is-transparent" role="navigation" aria-label="main-navigation">
        <div className="container">
          <div className="header-inner">
            <div className="navbar-brand">
              <Link to="/" className="logo">
                <img src={logo} alt="Hipporello Logo" />
              </Link>

              <div className={`navbar-burger burger ${this.state.navBarActiveClass}`} data-target="navMenu" onClick={() => this.toggleHamburger()}>
                <span />
                <span />
                <span />
              </div>
            </div>

            <nav id="navMenu" className={`navbar-menu ${this.state.navBarActiveClass}`}>
              <a onClick={scrollElement.bind(this, 'how-it-works')} href="#how-it-works">How it Works?</a>
              <a onClick={scrollElement.bind(this, 'use-cases')} href="#use-cases">Use Cases</a>
              <a onClick={scrollElement.bind(this, 'features')} href="#features">Features</a>
              <a href="#contact">Contact</a>
              <a className="btn-get-started" href="#">Get Started for Free</a>
            </nav>
          </div>


        </div>
      </div>
    )
  }
}

export default Navbar
