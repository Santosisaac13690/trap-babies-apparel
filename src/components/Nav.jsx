import React, {Component} from 'react';
import { Link } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { 
    faBars,
    faXmark,
    faSquareEnvelope,
} from '@fortawesome/free-solid-svg-icons';
import {
    faInstagramSquare,
    faWhatsappSquare,
} from "@fortawesome/free-brands-svg-icons";
import TB from '../images/TB.png'


export default class Nav extends Component {
    state = {
        navcontainer: false,
    }
    render(){
        var Handlechange = e =>{
            this.setState({navcontainer:!this.state.navcontainer});
        }

        var navmenu = this.state.navcontainer;
        
        return (
            <section>
                <nav>
                    <div className='closed-nav'>
                        <Link to='/' className='logo'><img src={TB} alt='Trap Babies Logo' /></Link>
                        <h2>TRAP BABIES APPAREL</h2>
                        <a aria-label="open-navbar" onClick={Handlechange}><FontAwesomeIcon icon={faBars} /></a>
                    </div>

                    {navmenu && (
                        <div className='nav-open'>
                            <div className='nav-menu'>
                                <div className='closed-nav'>
                                    <Link to='/' className='logo'><img src={TB} /></Link>
                                    <a aria-label="open-nav" onClick={Handlechange}><FontAwesomeIcon icon={faXmark} /></a>
                                </div>

                                <ul>
                                    <li><Link to="/" className="hover">HOME</Link></li>
                                    <li><Link to="/shop" className="hover">SHOP</Link></li>
                                    <li><Link to="/gallery" className="hover">GALLERY</Link></li>
                                    <li><Link to="/contact" className="hover">CONTACT</Link></li>
                                    <li><Link to="/cart" className="hover">CART</Link></li>
                                </ul>
                            </div>

                            <hr className='nav-line'/>

                            <div className='links-nav'>
                                <ul>
                                <li><a href="https://instagram.com/https://www.instagram.com/officialtrapbabiesapparel/" target="_blank" rel="noreferrer" aria-label="instagram"><FontAwesomeIcon icon={faInstagramSquare} /></a></li>

                                <li><a href="mailto:trapbabiesapparel@gmail.com" target="_blank" rel="noreferrer" aria-label="email"><FontAwesomeIcon icon={faSquareEnvelope} /></a></li>

                                <li><a href="https://web.whatsapp.com/send?phone=7043874664" target="_blank" rel="noreferrer" aria-label="facebook"><FontAwesomeIcon icon={faWhatsappSquare} /></a></li>
                                </ul>
                            </div>
                        </div>
                    )}

                </nav>
            </section>
        )
    }
}