import React from 'react';
import { connect } from 'react-redux';
import galeryTattoos from '../actions/galeryTattoosAction';
class StyleSelecedGalery extends React.Component {
    render(){
        const { tattoosGalery, galeryTattoos, specialt } = this.props;
        return(
            <div>
                <button onClick={() =>  galeryTattoos(tattoosGalery)}>{specialt}</button>
            </div>
        )
    }
}

const mapDispatchToProps = (dispatch) => ({
    galeryTattoos: (arrTattoosStyle) => dispatch(galeryTattoos(arrTattoosStyle)),
})

export default connect(null, mapDispatchToProps)(StyleSelecedGalery);
