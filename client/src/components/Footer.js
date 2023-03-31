import React from 'react';
import './Footer.css';
import { Link } from 'react-router-dom';
import {FontAwesomeIcon} from '@fortawesome/react-fontawesome';
import {
  faTwitter,
  faLinkedin,
  faInstagram,
} from "@fortawesome/free-brands-svg-icons";

function Footer() {
  return (
    <div className='footer-container'>
      <div class='footer-link-items'>
        <div className="socials">
          <FontAwesomeIcon className="icon" icon={faLinkedin} size="xl" />
          <FontAwesomeIcon className="icon" icon={faInstagram} size="xl" />
          <FontAwesomeIcon className="icon" icon={faTwitter} size="xl" />
        </div>
      </div>
      <section class='social-media'>
        <div class='social-media-wrap'>
          <small class='website-rights'>Petfinder © 2023 || All rights reserved</small>
          <div class='footer-logo'>
            <Link to='/' className='social-logo'>
            Petfinder
              <FontAwesomeIcon icon="fa-solid fa-paw" />
            </Link>
        </div>
        </div>
        
      </section>
    </div>
  );
}

export default Footer;