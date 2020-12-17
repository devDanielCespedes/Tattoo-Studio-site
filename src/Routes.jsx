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
      </div>
    )
  }
}

export default Routes;
