import React from 'react'
import { Link } from 'gatsby'

import email from '../img/icon-email.svg'
import twitter from '../img/icon-twitter.svg'
import facebook from '../img/icon-facebook.svg'
import linkedin from '../img/icon-linkedin.svg'
import youtube from '../img/icon-youtube.svg'
import instagram from '../img/icon-instagram.svg'

const Footer = class extends React.Component {
  render() {

    const scrollElement = (id, e) => {
      e.preventDefault();
      const el = document.getElementById(id);

      window.scroll({
        behavior: 'smooth',
        left: 0,
        top: el.offsetTop - 60
      });
    }

    return (
      <div className="footer">
        <div className="container">
          <div className="footer-widget-area">

            <div className="footer-widget">
              <h4>About</h4>
              <ul>
                <li>
                  <Link to="/terms-of-use">Terms of Use</Link>
                </li>
                <li>
                  <Link to="/privacy-policy">Privacy Policy</Link>
                </li>
                <li>
                  <a href="mailto:support@hipporello.com" target="_blank" rel="noopener noreferrer">support@hipporello.com</a>
                </li>
              </ul>
            </div>

            <div className="footer-widget">
              <h4>Product</h4>
              <ul>
                <li>
                  <a onClick={scrollElement.bind(this, 'how-it-works')} href="#how-it-works">How it Works?</a>
                </li>
                <li>
                  <a onClick={scrollElement.bind(this, 'features')} href="#features">Features</a>
                </li>
              </ul>
            </div>

            <div className="footer-widget">
              <h4>Resources</h4>
              <ul>
                <li>
                  <Link to="/blog">Blog</Link>
                </li>
              </ul>
            </div>

            <div className="footer-widget">
              <h4>Social</h4>
              <div className="footer-social">
                <a className="icon-facebook" href="https://facebook.com/hipporello" target="_blank" rel="noopener noreferrer">
                  <img src={facebook} />
                </a>
                <a className="icon-twitter" href="https://twitter.com/hipporello" target="_blank" rel="noopener noreferrer">
                  <img src={twitter} />
                </a>
                <a className="icon-instagram" href="https://instagram.com/hipporello" target="_blank" rel="noopener noreferrer">
                  <img src={instagram} />
                </a>
                <a className="icon-youtube" href="https://www.youtube.com/channel/UCRey0iCe9uPdMPCaP0OT6Bg" target="_blank" rel="noopener noreferrer">
                  <img src={youtube} />
                </a>
                <a className="icon-linkedin" href="https://www.linkedin.com/company/hipporello" target="_blank" rel="noopener noreferrer">
                  <img src={linkedin} />
                </a>
                <a className="icon-email" href="mailto:support@hipporello.com" target="_blank" rel="noopener noreferrer">
                  <img src={email} />
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    )
  }
}

export default Footer
