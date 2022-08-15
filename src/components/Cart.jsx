import React from 'react';
import Nav from './Nav';
import Footer from './Footer';
import {Link} from 'react-router-dom';

export default function Cart() {
  return (
    <div>
      <Nav />

      <section>
        <div className="cart-container">
          <h2>Nothing in your cart yet.</h2>
          <Link to='/shop'><button>Go back to shop</button></Link>
        </div>
      </section>

      <Footer />
    </div>
  )
}
