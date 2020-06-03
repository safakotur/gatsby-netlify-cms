import React, { useEffect, useState } from "react"
import Layout from '../components/Layout'
import { Link } from 'gatsby'
import ModalVideo from 'react-modal-video'
import VideoImage from '../img/hipporello-first-image.png'

const HowItWorks = () => {

  const [isOpen, setIsOpen] = useState(false);

  return (

    <Layout>
      <ModalVideo channel='youtube' isOpen={isOpen} videoId='16-91ojSbaQ' onClose={() => setIsOpen(false)} />

      <div className="section-holder">
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
      </div>
    </Layout>
  )
}

export default HowItWorks
