import React from 'react';
import Nav from './Nav';
import Footer from './Footer';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { 
  faMapLocation,
  faPhone,
  faEnvelope,
} from '@fortawesome/free-solid-svg-icons';

export default function Contact() {
  return (
    <div>
      <Nav />
      
      <main>
        <div className="contact">
          <div className="contactInfo">
            <div className="box">
              <div className="icon"><FontAwesomeIcon icon={faMapLocation} /></div>
              <div className="text">
                <h3>Location</h3>
                <p>Charlotte, NC</p>
              </div>
            </div>
            <div className="box">
              <div className="icon"><FontAwesomeIcon icon={faPhone} shake /></div>
              <div className="text">
                <h3>Phone</h3>
                <p>(704)387-4664</p>
              </div>
            </div>
            <div className="box">
              <div className="icon"><FontAwesomeIcon icon={faEnvelope} bounce /></div>
              <div className="text">
                <h3>Email</h3>
                <p>trapbabiesapparel@gmail.com</p>
              </div>
            </div>
          </div>

          <div className="form">
            <form>
              <h2>Contact</h2>
    
              <div className="inputBox">
                <label>
                Name &#42;
                <input type="text" name="Name" required="required" />
                </label>
              </div>
    
              <div className="inputBox">
                <label>
                Email &#42;
                <input type="email" name="Email" required="@" />
                </label>
              </div>
    
              <div className="inputBox">
                <label>
                Phone Number
                <input type="text" name="Number"/>
                </label>
              </div>
    
              <div className="inputBox">
                <label>
                Message &#42;
                <textarea name="Message" required="required" ></textarea>
                </label>
              </div>
    
              <div className="inputBox">
                <input type="submit" name="submit" value="Send" />
              </div>
            </form>

          </div>
        </div>
      </main>

      <Footer />
    </div>
  )
}
