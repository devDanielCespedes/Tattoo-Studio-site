import React from 'react';
import { connect } from 'react-redux';
import galeryTattoosAction from '../actions/galeryTattoosAction';
import artistsData from '../artistsData';

class SelectStyleSelecedGalery extends React.Component {

    constructor() {
        super();
        this.handleChangeBG = this.handleChangeBG.bind(this);
    }

    handleChangeBG({ target }) {
        const allBtnsSelectStyleGalery = document.querySelectorAll('.selected-style-galery');
        allBtnsSelectStyleGalery.forEach(btn => {
          return  btn !== target ? btn.style.backgroundColor = 'grey' : target.style.backgroundColor = 'chocolate';
        });
    }
    render() {
        const { galeryTattoosFunc } = this.props;
        return (
            artistsData
                .map(artist => {
                    const { tattoosGalery, specialt, aboutStyle, styleFeatures, name } = artist;
                    return (
                        <button key={name}
                            className='selected-style-galery'
                            onClick={
                                (e) => {
                                    galeryTattoosFunc(tattoosGalery, aboutStyle, styleFeatures, specialt);
                                    this.handleChangeBG(e)
                                } 
                            }>
                            {specialt}
                        </button>
                    )
                }
                )
        )
    }
}

const mapDispatchToProps = (dispatch) => ({
    galeryTattoosFunc: (arrTattoosStyle, aboutStyle, styleFeatures, specialt) => dispatch(galeryTattoosAction(arrTattoosStyle, aboutStyle, styleFeatures, specialt)),
})

export default connect(null, mapDispatchToProps)(SelectStyleSelecedGalery);
