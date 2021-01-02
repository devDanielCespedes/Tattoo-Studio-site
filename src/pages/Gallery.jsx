import React from 'react';
import TattooGalery from '../components/TattooGalery';
import SelectStyleSelecedGalery from '../components/SelectStyleGalery';
class Galery extends React.Component {
  // constructor() {
  //   super();
  //   this.handlerBGBtnSelectStyle = this.handlerBGBtnSelectStyle.bind(this);
  // }

  componentDidMount() {
    const btnSelectStyleGalery = document.querySelectorAll('.selected-style-galery');
    btnSelectStyleGalery[0].style.backgroundColor = 'chocolate'
  }

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
