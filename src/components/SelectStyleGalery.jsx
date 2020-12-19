import React from 'react';
import { connect } from 'react-redux';
import galeryTattoosAction from '../actions/galeryTattoosAction';
import artistsData from '../artistsData';

class StyleSelecedGalery extends React.Component {
    render() {
        const { galeryTattoosFunc } = this.props;
        return (
            artistsData
                .map(artist => <button key={artist.name}
                    onClick={
                        () => galeryTattoosFunc(artist.tattoosGalery)
                    }>
                      {artist.specialt}
                </button>
                )
        )
    }
}

const mapDispatchToProps = (dispatch) => ({
    galeryTattoosFunc: (arrTattoosStyle) => dispatch(galeryTattoosAction(arrTattoosStyle)),
})

export default connect(null, mapDispatchToProps)(StyleSelecedGalery);
