import React from 'react';
import { connect } from 'react-redux';

class TattooGalery extends React.Component {

    render() {
        const { tattoosGalery, aboutStyle, styleFeatures } = this.props;
        return (
            <div className='galery-content'>
                {tattoosGalery
                .map(tattoo => <img key={tattoo} className='tattoos-galery' alt='tattos photos' src={tattoo} />)}
                <p>{aboutStyle}</p>
                <p>{styleFeatures}</p>
            </div>
        )
    }
}

const mapStateToProps = (state) => ({
    tattoosGalery: state.galeryTattoosReducer.tattoosGalery,
    aboutStyle: state.galeryTattoosReducer.aboutStyle,
    styleFeatures: state.galeryTattoosReducer.styleFeatures,
})

export default connect(mapStateToProps)(TattooGalery);
