import React from 'react';
import Nav from './Nav';
import Footer from './Footer';
import {Link} from 'react-router-dom'

export default function Shop() {
  return (
    <div>
      <Nav />
      
      <section>
        <div className='na-container'>
          <div className='na-title'>
            <h3>New Arrivals</h3>
          </div>
          <div className='new-arrivals'>
            <div className='new-item'>New Item</div>
            <div className='new-item'>New Item</div>
            <div className='new-item'>New Item</div>
            <div className='new-item'>New Item</div>
          </div>
        </div>
      </section>

      <section>
        <div className='mw-container'>
          <div className='men-women'>
            <Link to="/shop/mens"><div className='mw men'>
              <h3>Men</h3>
            </div></Link>
            <Link to="/shop/womens"><div className='mw women'>
              <h3>Women</h3>
            </div></Link>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  )
}
