import React from 'react';
import TattooGalery from '../components/TattooGalery';
import StyleSelectedGalery from '../components/SelectStyleGalery';
import artistsData from '../artistsData';
class Galery extends React.Component {

    constructor() {
        super();
        this.handlerFilteredTattoo = this.handlerFilteredTattoo.bind(this);
        this.state = {
            tattoosFiltered: artistsData[0].tattoosGalery,
        }
    }

    handlerFilteredTattoo(styleSelected) {
      const filteredArtistBySpecialt = artistsData.find(artist => artist.specialt === styleSelected)
        this.setState({
            tattoosFiltered: filteredArtistBySpecialt.tattoosGalery,
        })
    }
    render() {
        const { tattoosFiltered } = this.state;
        return(
            <div>
                {artistsData
                .map(artist => <StyleSelectedGalery onClick={this.handlerFilteredTattoo} specialt={artist.specialt} />)}
                <TattooGalery tattoosFiltered={tattoosFiltered} />
            </div>
        )
    }
}

export default Galery;
