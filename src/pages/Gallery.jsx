import React from 'react';
import TattooGalery from '../components/TattooGalery';
import StyleSelectedGalery from '../components/SelectStyleGalery';
class Galery extends React.Component {

    render() {
        return(
          <div>
             <StyleSelectedGalery />
             <TattooGalery />
          </div>
        )
    }
}

export default Galery;
