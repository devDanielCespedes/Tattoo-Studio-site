import React from 'react';
import '../App.css';
import arrayArtists from '../artistsData'
import Artist from '../components/Artist';
class Home extends React.Component {
    render() {
        return(
          <div className='home-content'>
            {arrayArtists.map(artist => <Artist key={artist.name} artist={artist} />)}
          </div>
        )
    }
}

export default Home;
