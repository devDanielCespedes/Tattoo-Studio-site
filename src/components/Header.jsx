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
    }, 1000);

    window.addEventListener('resize', () => {
      if (window.innerWidth < 624) {
        const navLinksBar = document.querySelectorAll('.home-links a');
        navLinksBar.forEach(a => a.style.display = 'none')
      }
    })

    if (window.innerWidth < 624) {
      const homeLinks = document.querySelector('.home-links');

      homeLinks.addEventListener('click', () => {
        const navLinksBar = document.querySelectorAll('.home-links a');
        const barsMenuBtn = document.querySelector('.open-menu-bars');
        const currentPage = document.querySelector('.current-page-header');
        const logoAfterMenuBarsOpen = document.querySelector('.logo');

        navLinksBar.forEach(a => a.style.display = 'none');
        currentPage.style.transform = 'initial';
        barsMenuBtn.classList.remove('open-menu-bars');
        barsMenuBtn.classList.add('close-menu-bars');
        logoAfterMenuBarsOpen.classList.remove('logo-after-menu-bars-open');
        logoAfterMenuBarsOpen.classList.add('logo-after');
      })
    }
    window.addEventListener('resize', () => {
      if (window.innerWidth > 625) {
        const barsMenuBtn = document.querySelector('.open-menu-bars');
        const navLinksBar = document.querySelectorAll('.open-icon-bars a');
        const currentPage = document.querySelector('.current-page-header');
        const logoAfterMenuBarsOpen = document.querySelector('.logo');

        currentPage.style.transform = 'initial'
        if (barsMenuBtn) {
          barsMenuBtn.classList.remove('open-icon-bars');
          barsMenuBtn.classList.add('close-menu-bars');
          logoAfterMenuBarsOpen.classList.add('logo-after');
        }
        navLinksBar.forEach(a => a.style.display = 'initial');
      }
    })
  }

  handleClickBarsMenu() {
    const barsMenuBtn = document.querySelector('.close-menu-bars');
    const logoAfter = document.querySelector('.logo-after');
    const navLinksBar = document.querySelectorAll('.open-icon-bars a');
    const currentPage = document.querySelector('.current-page-header');

    currentPage.style.transform = 'translate(0%, 1615%)'
    barsMenuBtn.classList.remove('close-menu-bars');
    barsMenuBtn.classList.add('open-menu-bars');
    logoAfter.classList.remove('logo-after');
    logoAfter.classList.add('logo-after-menu-bars-open');
    navLinksBar.forEach(a => a.style.display = 'block');

  }
  render() {
    let { location, cart } = this.props;
    return (
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
