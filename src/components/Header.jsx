import React from 'react';
import { Link } from 'react-router-dom';
import Logo from '../images/logo.jpg';
class Header extends React.Component {
  
  componentDidMount() {
    setTimeout(() => {
      const divHeader = document.getElementsByClassName('header-content')[0];
      const logo = document.getElementsByClassName('logo')[0];
      divHeader.classList.add('header-content-after');
      logo.classList.add('logo-after');
    }, 1000)
  }
    render(){
      let { pathname } = this.props.location;
        return(
            <div className='header-content'>
              <div className='logo'>
                <Link
                  to='/'
                >
                  <img className='logo' src={Logo}
                  alt='Logo do estúdio de tatuagem calm like a bomb'
                  />
                </Link>
              </div>
              <nav className='home-links'>
              <p className='current-page-header'>{pathname === '/' ? 'home' : pathname.slice(1)}</p>
                <Link
                    to='/'
                  >
                    HOME
                  </Link>
                  <Link
                    to='/gallery'
                  >
                    GALLERY
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
                    to='/cart'
                  >
                    CART
                  </Link>
                  <Link
                    to='/contact'
                  >
                    CONTACT
                  </Link>
              </nav>
            </div>
        )
    }
}

export default Header;
