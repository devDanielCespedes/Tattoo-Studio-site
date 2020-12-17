import React from 'react';
import { Link } from 'react-router-dom';

class Artist extends React.Component {
    render() {
        const {name, specialt, imgPath} = this.props.artist;
        console.log(imgPath)
        return(
            <div>
                <Link className='link-home-artists'>
                <span>{name}</span>
                <img className='img-artists-home' src={imgPath} alt="Foto da artista Amanda" />
                <b>{specialt}</b>
                </Link>
            </div>
        )
    }
}

export default Artist;
