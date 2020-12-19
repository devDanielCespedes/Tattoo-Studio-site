import React from 'react';
import { Link } from 'react-router-dom';
import Logo from '../images/logo.jpg';
import Facebook from '../images/facebookIcon.png';
import Instagram from '../images/instagramIcon.jpg';
import WhatsApp from '../images/whatsAppIcon.jpg';
class Header extends React.Component {
    render(){
        return(
            <div className='header-content'>
              <div className='social-midia'>
                <a href="https://www.facebook.com/calmlikeabombtattoo" rel="noreferrer" target="_blank" className="facebook-icon"><img src={Facebook} alt=""/></a>
                <a href="https://www.instagram.com/dancespedes" rel="noreferrer" target="_blank" className="instagram-icon"><img src={Instagram} alt=""/></a>
                <a href="https://api.whatsapp.com/send?phone=5511952744571" rel="noreferrer" target="_blank"  className="whatsapp-icon"><img src={WhatsApp} alt=""/></a>
              </div>
              <div className='home-links'>
                <Link
                  to='/'
                >
                  <img className='logo' src={Logo}
                  alt='Logo do estúdio de tatuagem calm like a bomb'
                  />
                </Link>
              </div>
              <nav className='home-links'>
                <Link
                    to='/'
                  >
                    HOME
                  </Link>
                  <Link
                    to='/galery'
                  >
                    GALERY
                  </Link>
                  <Link
                    to='/tips'
                  >
                    TIPS
                  </Link>
                  <Link
                    to='/products'
                  >
                    PRODUCTS
                  </Link>
                  <Link
                    to='/contact'
                  >
                    CONTACT
                  </Link>
                  <Link
                    to='/cart'
                  >
                    CART
                  </Link>
              </nav>
            </div>
        )
    }
}

export default Header;
