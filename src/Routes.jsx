import React from 'react';
import { Switch, Route } from 'react-router-dom';
import Home from './pages/Home';
import Artists from './pages/Artists';
import Galery from './pages/Galery';
import Tips from './pages/Tips';
import Products from './pages/Products';
import Contact from './pages/Contact';
import Cart from './pages/Cart';
import Header from './components/Header';
import Footer from  './components/Footer';


class Routes extends React.Component {
  render() {
    return (
      <div>
        <Header />
        <Switch>
          <Route exact path='/' component={Home} />
          <Route path='/galery' component={Galery} />
          <Route path='/artists' component={Artists} />
          <Route path='/tips' component={Tips} />
          <Route path='/products' component={Products} />
          <Route path='/contact' component={Contact} />
          <Route path='/cart' component={Cart} />
        </Switch>
        <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3654.520384855991!2d-46.778376185540594!3d-23.657341371027627!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x94ce53bcdac7a19b%3A0x222586e5e5d004a8!2sAv.%20Carlos%20Lacerda%2C%203026%20-%20Pirajussara%2C%20S%C3%A3o%20Paulo%20-%20SP%2C%2005789-001!5e0!3m2!1spt-PT!2sbr!4v1608383242433!5m2!1spt-PT!2sbr" className='google-maps' frameborder="0" allowfullscreen="" aria-hidden="false" tabindex="0"></iframe>
        <Footer />
      </div>
    )
  }
}

export default Routes;
