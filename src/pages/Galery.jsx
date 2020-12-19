import React from 'react';
import TattooGalery from '../components/TattooGalery';
import StyleSelectedGalery from '../components/SelectStyleGalery';
import artistsData from '../artistsData';
class Galery extends React.Component {

    render() {

        return(
          <div>
            {artistsData
                .map(artist => <StyleSelectedGalery  specialt={artist.specialt} tattoosGalery={artist.tattoosGalery} />)}
                <TattooGalery  />
          </div>
        )
    }
}

export default Galery;
