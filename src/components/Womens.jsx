import React from 'react';
import Nav from './Nav';
import Footer from './Footer';
import UC from '../images/Under-Construction.png';

export default function Womens() {
  return (
    <div>
        <Nav />
        <img src={UC} alt='Under Construction' className='uc-image' />
        <Footer />
    </div>
  )
}
