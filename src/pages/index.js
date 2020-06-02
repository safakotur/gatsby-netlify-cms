import React, { useEffect, useState } from "react"
import Layout from '../components/Layout'
import { Link } from 'gatsby'
import ModalVideo from 'react-modal-video'

import Logo from '../img/logo.svg'
import Flow from '../img/hipporello-flow.svg'
import FlowMobile from '../img/hipporello-flow-mobile.svg'
import VideoImage from '../img/hipporello-first-image.png'
import UseCase1 from '../img/use-cases-1.svg'
import UseCase2 from '../img/use-cases-2.svg'
import UseCase3 from '../img/use-cases-3.svg'
import UseCase4 from '../img/use-cases-4.svg'
import Features1 from '../img/mouse-alt.svg'
import Features2 from '../img/robot.svg'
import Features3 from '../img/palette.svg'
import Features4 from '../img/window.svg'
import Features5 from '../img/bell.svg'
import Features6 from '../img/padlock.svg'
import Features7 from '../img/user-square.svg'
import Features8 from '../img/envelope.svg'
import Features9 from '../img/search-alt.svg'


const IndexPage = () => {

  const [isOpen, setIsOpen] = useState(false);

  return (

    <Layout>



      <ModalVideo channel='youtube' isOpen={isOpen} videoId='16-91ojSbaQ' onClose={() => setIsOpen(false)} />


      <div className="section-holder">
        <div className="hero-area section">
          <div className="inner">
            <div className="container">
              <h1>Turn your Trello board into <span>an easy to use service desk</span></h1>
              <p>Hipporello connects your customers and employees to your support, <br /> IT & business teams by creating Trello cards via online forms and emails</p>
            </div>

            <div className="hero-image">
              <img src={Flow} alt="User Flow" />
              <img className="mobile-flow" src={FlowMobile} alt="User Flow" />
            </div>

            <div className="hero-actions">
              <div className="c2a-wrapper">
                <a className="btn-primary" href="#">
                  <span>Get your <b>Free</b> Forever Service Desk</span>
                  <span>No credit card required</span>
                </a>
              </div>
            </div>
          </div>

          <div className="particle"></div>
        </div>

        <div id="how-it-works" className="how-it-works section">
          <div className="container">
            <div className="section-title">
              <h2>How it Works?</h2>
            </div>
            <div className="how-it-works-wrapper">
              <div className="video-player-wrapper">
                <img src={VideoImage} alt="Hipporello Screenshot" />
                <button type="button" className="video-play-button popup-trigger" data-popup-trigger="one" onClick={() => {
                  setIsOpen(true);
                }}>
                  <span></span>
                </button>
              </div>
            </div>
          </div>
        </div>

        <div id="use-cases" className="use-cases section">
          <div className="container">
            <div className="section-title">
              <h2>What can you do with Hipporello?</h2>
            </div>
            <div className="use-cases-wrapper">
              <div className="use-cases-box">
                <div className="use-cases-image">
                  <img src={UseCase1} alt="Trello Board Use Cases" />
                </div>
                <div className="use-cases-info">
                  <h2>Bring customer requests into Trello boards to boost productivity and efficiency</h2>
                  <p>Letting your customers access your Trello board to create support cards is hard to manage. Your customers can create cards via online forms and inbound email addresses through Hipporello. You can also define automation rules to automate some periodic manual tasks for each of these requests and save time and reduce human errors in workflow.</p>
                </div>
              </div>

              <div className="use-cases-box image-right">
                <div className="use-cases-image">
                  <img src={UseCase2} alt="Customer Service Experience" />
                </div>
                <div className="use-cases-info">
                  <h2>Switch to a unified customer service experience by making Trello your new centralized hub</h2>
                  <p>Gather valuable insights from your customers by embedding Hipporello contact forms to your single page, jamstack and wordpress websites and let your support team manage them on Trello collaboratively.</p>
                  <p>Hipporello also turns nobody owned contact, demo and feedback form requests to trackable and assigned Trello cards which your team can process collaboratively. You never miss a potential lead.</p>
                </div>
              </div>

              <div className="use-cases-box">
                <div className="use-cases-image">
                  <img src={UseCase3} alt="Forward Your Support Emails" />
                </div>
                <div className="use-cases-info">
                  <h2>Forward your support emails to Hipporello and use Trello as a shared inbox for your team</h2>
                  <p>Sharing email account credentials among team members is not scalable. Hipporello turns your Trello board to an easy to use shared inbox for your team email accounts like support@,  help@,  jobs@, sales@ etc.</p>
                </div>
              </div>

              <div className="use-cases-box image-right">
                <div className="use-cases-image">
                  <img src={UseCase4} alt="Use Trello as an internal help desk" />
                </div>
                <div className="use-cases-info">
                  <h2>Use Trello as an internal help desk, keep your processes simple</h2>
                  <p>Hipporello offers a simple, unified and solution-based service experience for your internal processes on Trello. Your experts in your internal service, IT and business teams can respond to employee requests without abandoning the ease and simplicity of Trello.</p>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div id="features" className="features section">
          <div className="container">
            <div className="section-title">
              <h2>Features</h2>
            </div>
            <div className="features-wrapper">
              <div className="features-box">
                <div className="features-image">
                  <img src={Features1} alt="Drag Drop" />
                </div>
                <div className="features-info">
                  <h3>Drag Drop</h3>
                  <p>Drag and drop enabled form editor with ready-to-use input types e-mails, password, short/long texts and many more.</p>
                </div>
              </div>

              <div className="features-box">
                <div className="features-image">
                  <img src={Features2} alt="Form Automation" />
                </div>
                <div className="features-info">
                  <h3>Form Automation</h3>
                  <p>Automate actions that need to be taken for specific operations like sending automatic messages on the reported request.</p>
                </div>
              </div>

              <div className="features-box">
                <div className="features-image">
                  <img src={Features3} alt="Branding" />
                </div>
                <div className="features-info">
                  <h3>Branding</h3>
                  <p>Use your logo and banner to customize the look and feel of forms and help center for your own branding needs</p>
                </div>
              </div>

              <div className="features-box">
                <div className="features-image">
                  <img src={Features4} alt="Custom Domain" />
                </div>
                <div className="features-info">
                  <h3>Custom Domain</h3>
                  <p>Let the users to access your service desk in your own custom URL like support.yourcompany.com</p>
                </div>
              </div>

              <div className="features-box">
                <div className="features-image">
                  <img src={Features5} alt="Email Notifications" />
                </div>
                <div className="features-info">
                  <h3>Email Notifications</h3>
                  <p>Notify your service desk users via email for every reply from your agent or automatically after some Trello triggers like card created, moved, archived, etc.</p>
                </div>
              </div>

              <div className="features-box">
                <div className="features-image">
                  <img src={Features6} alt="Form Access Policies" />
                </div>
                <div className="features-info">
                  <h3>Form Access Policies</h3>
                  <p>Allow which service desk user can access to your forms via easy to manage access policies.</p>
                </div>
              </div>

              <div className="features-box">
                <div className="features-image">
                  <img src={Features7} alt="User Tracking" />
                </div>
                <div className="features-info">
                  <h3>User Tracking</h3>
                  <p>We track your users and give you valuable insights about them like IP, country, browser, OS and email delivery, opening and clicking statistics.</p>
                </div>
              </div>

              <div className="features-box">
                <div className="features-image">
                  <img src={Features8} alt="Email to Trello Card" />
                </div>
                <div className="features-info">
                  <h3>Email to Trello Card</h3>
                  <p>Configure inbound email addresses to create a Trello card for each received email message.</p>
                </div>
              </div>

              <div className="features-box">
                <div className="features-image">
                  <img src={Features9} alt="Search" />
                </div>
                <div className="features-info">
                  <h3>Search</h3>
                  <p>Use our enhanced search capabilities to find what you are looking for easily.</p>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="call-to-action">
          <div className="inner">
            <Link to="/" className="logo">
              <img src={Logo} alt="Hipporello Logo" />
            </Link>
            <h2>Turn your Trello board into <span>an easy to use service desk</span></h2>
            <p>Hipporello connects your customers and employees to your support, IT & business teams by creating Trello cards via online forms and emails</p>

            <div className="c2a-wrapper">
              <a className="btn-primary" href="#">
                <span>Get your <b>Free</b> Forever Service Desk</span>
                <span>No credit card required</span>
              </a>
            </div>
          </div>
        </div>

      </div>


    </Layout>
  )
}

export default IndexPage
