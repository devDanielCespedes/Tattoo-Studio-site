import React from 'react';
import { connect } from 'react-redux';
import { SRLWrapper } from "simple-react-lightbox";

class TattooGalery extends React.Component {

    render() {
        const { tattoosGalery, aboutStyle, styleFeatures, specialt } = this.props;
        return (
            <div>
                <SRLWrapper>
                <div onClick={this.toggle}>
                    {tattoosGalery
                        .map(tattoo => <img key={tattoo} className='tattoos-galery' alt={`${specialt} tattoo`} src={tattoo} />)}
                    <p className='p-home-and-gallery'>{aboutStyle}</p>
                    <p className='p-home-and-gallery'>{styleFeatures}</p>
                </div>
                </SRLWrapper>
            </div>
        )
    }
}

const mapStateToProps = (state) => ({
    tattoosGalery: state.galeryTattoosReducer.tattoosGalery,
    aboutStyle: state.galeryTattoosReducer.aboutStyle,
    styleFeatures: state.galeryTattoosReducer.styleFeatures,
    specialt: state.galeryTattoosReducer.specialt,
})

export default connect(mapStateToProps)(TattooGalery);
