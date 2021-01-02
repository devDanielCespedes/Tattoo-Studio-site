import React from 'react';
import { connect } from 'react-redux';
import galeryTattoosAction from '../actions/galeryTattoosAction';
import artistsData from '../artistsData';

class SelectStyleSelecedGalery extends React.Component {
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
                                () => galeryTattoosFunc(tattoosGalery, aboutStyle, styleFeatures, specialt)
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
