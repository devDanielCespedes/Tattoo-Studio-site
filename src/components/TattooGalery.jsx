import React from 'react';
import { connect } from 'react-redux';

class TattooGalery extends React.Component {

    render() {
        const { tattoosGalery, aboutStyle, styleFeatures } = this.props;
        return (
            <div>
                {tattoosGalery
                .map(tattoo => <img key={tattoo} className='tattoos-galery' alt='tattos photos' src={tattoo} />)}
                <p className='p-home-and-gallery'>{aboutStyle}</p>
                <p className='p-home-and-gallery'>{styleFeatures}</p>
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
