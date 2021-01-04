import React from 'react';
import { connect } from 'react-redux';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faBars } from '@fortawesome/free-solid-svg-icons'
import { Link } from 'react-router-dom';
import Logo from '../images/logo.jpg';
class Header extends React.Component {

  constructor() {
    super(); 

    this.handleClickBarsMenu = this.handleClickBarsMenu.bind(this);
  }
  
  componentDidMount() {
    setTimeout(() => {
      const divHeader = document.getElementsByClassName('header-content')[0];
      const logo = document.getElementsByClassName('logo')[0];
      divHeader.classList.add('header-content-after');
      logo.classList.add('logo-after');
    }, 1000)
  }

  handleClickBarsMenu() {
    const barsMenuBtn = document.querySelector('.close-menu-bars');
    const logoAfter = document.querySelector('.logo-after'); 
    const navLinksBar = document.querySelectorAll('.open-icon-bars a');
    const currentPage = document.querySelector('.current-page-header');

    currentPage.style.transform = 'translate(0%, 2375%)'
    barsMenuBtn.classList.remove('close-menu-bars');
    barsMenuBtn.classList.add('open-menu-bars');
    logoAfter.classList.remove('logo-after');
    logoAfter.classList.add('logo-after-menu-bars-open');
    navLinksBar.forEach(a => a.style.display = 'block');

  }
    render(){
      let { location, cart } = this.props;
        return(
            <div className='header-content'>
              <button type='button' onClick={() => this.handleClickBarsMenu()} className='close-menu-bars'><FontAwesomeIcon icon={faBars} /></button>
              <div className='logo'>
                <Link
                  to='/'
                >
                  <img className='logo' src={Logo}
                  alt='Logo do estúdio de tatuagem calm like a bomb'
                  />
                </Link>
              </div>
              <nav className='home-links open-icon-bars'>
                <p className='current-page-header'>{location.pathname === '/' ? 'home' : location.pathname.slice(1)}</p>
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
                    CART-{cart.length} ITEMS
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

const mapStateToProps = (state) => ({
  cart: state.productToCartReducer.cart,
})

export default connect(mapStateToProps)(Header);
