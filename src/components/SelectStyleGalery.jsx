import React from 'react';
import { connect } from 'react-redux';
import galeryTattoosAction from '../actions/galeryTattoosAction';
class StyleSelecedGalery extends React.Component {
    render(){
        const { specialt, onClick } = this.props;
        return(
            <div>
                <button onClick={() => onClick(specialt)}>{specialt}</button>
            </div>
        )
    }
}

const mapStateToProps = (state) => ({
    tattoosGalery: state.galeryTattoosReducer.tattoosGalery,
})

const mapDispatchToProps = (dispatch) => ({
    selectedStyle: (style) => dispatch(galeryTattoosAction(style)),
})

export default connect(mapStateToProps, mapDispatchToProps)(StyleSelecedGalery);
