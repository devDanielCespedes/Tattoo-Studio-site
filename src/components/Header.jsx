import React from 'react';
import { Link } from 'react-router-dom';
import Logo from '../images/logo.jpg';
class Header extends React.Component {
    render(){
        return(
            <div className='header-content'>
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
