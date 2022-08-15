import React from 'react';
import Nav from './Nav';
import Footer from './Footer';
import { Link } from 'react-router-dom';
import AboutIMG from '../images/TB-AboutIMG.webp';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {
  faInstagramSquare,
} from "@fortawesome/free-brands-svg-icons";

export default function Home() {
  return (
    <div>
        <Nav />

        <header>
          <div className="landing slide">
            <h1 className="headName">TRAP BABIES APPAREL</h1>
            <p className="headDesc">Customer's marvelous shopping experience is our top priority.</p>
            <Link to="/shop" className="button">Shop Now</Link>
          </div>
        </header>

        <section>
          <div className='about-container'>
            <div className='about-image'>
              <img src={AboutIMG} alt='About Image' />
            </div>

            <div className='about-text'>
              <h3>ARTIST &amp; CEO</h3>
              <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Sequi accusamus hic, autem exercitationem eaque obcaecati quo at aperiam natus pariatur delectus. Quibusdam nulla natus quos eligendi dolore consequatur corrupti cumque?</p>
              <a href="https://www.instagram.com/big.ce0_/" target="_blank" rel="noreferrer" aria-label="instagram"><FontAwesomeIcon icon={faInstagramSquare} /></a>
            </div>
          </div>
        </section>

        <section>
          <div className='reviews'>
            <h3>Customer Reviews</h3>
            <div className='card-container'>
              <div className='review-card'>
                <p>Review</p>
              </div>
              
              <div className='review-card'>
                <p>Review</p>
              </div>

              <div className='review-card'>
                <p>Review</p>
              </div>

              <div className='review-card'>
                <p>Review</p>
              </div>
              
              <div className='review-card'>
                <p>Review</p>
              </div>
            </div>
          </div>
        </section>

        <Footer />
    </div>
  )
}
