import React from 'react';
import TattooGalery from '../components/TattooGalery';
import SelectStyleSelecedGalery from '../components/SelectStyleGalery';
class Galery extends React.Component {

    render() {
        return(
          <div className='galery-content'>
             <SelectStyleSelecedGalery />
             <TattooGalery />
          </div>
        )
    }
}

export default Galery;
