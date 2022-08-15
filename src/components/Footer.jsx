import React from 'react';
import { Link } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {
  faInstagramSquare,
  faWhatsappSquare,
} from "@fortawesome/free-brands-svg-icons";
import { 
  faSquareEnvelope,
} from '@fortawesome/free-solid-svg-icons';


export default function Footer() {
  return (
    <div>
      <footer>
        <div className='email-subscription'>
          <h3>Sign up to our news letter</h3>
          <label htmlFor="email-sub-input">
          <input type="text" name='email-sub-input' placeholder='Email...'/>
          </label>
          <br />
          <button>Subscribe</button>
        </div>

        <div className='contact-info'>
          <h3>Get in contact</h3>
          <a href="tel:7043874664">(704)387-4664</a>
          <br />
          <a href='mailto:trapbabiesapparel@gmail.com'>trapbabiesapparel@gmail.com</a>
          <br />
          <Link to='/contact'>Contact us</Link>
        </div>

        <div className='social-media'>
          <h3>Socials</h3>
          <div className='links-footer'>
            <ul>
              <li><a href="https://instagram.com/https://www.instagram.com/officialtrapbabiesapparel/" target="_blank" rel="noreferrer" aria-label="instagram"><FontAwesomeIcon icon={faInstagramSquare} /></a></li>

              <li><a href="mailto:trapbabiesapparel@gmail.com" target="_blank" rel="noreferrer" aria-label="email"><FontAwesomeIcon icon={faSquareEnvelope} /></a></li>

              <li><a href="https://web.whatsapp.com/send?phone=7043874664" target="_blank" rel="noreferrer" aria-label="facebook"><FontAwesomeIcon icon={faWhatsappSquare} /></a></li>
            </ul>
          </div>
        </div>
      </footer>
    </div>
  )
}
