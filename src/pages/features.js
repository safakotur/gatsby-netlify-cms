import React, { useEffect, useState } from "react"
import Layout from '../components/Layout'
import { Link } from 'gatsby'
import Features1 from '../img/mouse-alt.svg'
import Features2 from '../img/robot.svg'
import Features3 from '../img/palette.svg'
import Features4 from '../img/window.svg'
import Features5 from '../img/bell.svg'
import Features6 from '../img/padlock.svg'
import Features7 from '../img/user-square.svg'
import Features8 from '../img/envelope.svg'
import Features9 from '../img/search-alt.svg'


const Features = () => {


  return (

    <Layout>

      <div class="section-holder">
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
      </div>

    </Layout>
  )
}

export default Features
