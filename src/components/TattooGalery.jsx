import React from 'react';
import { connect } from 'react-redux';

class TattooGalery extends React.Component {

    render() {
        const { tattoosGalery } = this.props;
        return (
            <div className='galery-content'>
                {tattoosGalery
                .map(tattoo => <img className='tattoos-galery' alt='tattos photos' src={tattoo} />)}
            </div>
        )
    }
}

const mapStateToProps = (state) => ({
    tattoosGalery: state.galeryTattoosReducer.tattoosGalery,
})

export default connect(mapStateToProps)(TattooGalery);
