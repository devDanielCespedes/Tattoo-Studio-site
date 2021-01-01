import React from 'react';
import { Link } from 'react-router-dom';
import { Modal, ModalHeader, ModalBody, ModalFooter } from 'reactstrap';

class Artist extends React.Component {
    render() {
        const {name, specialt, imgPath} = this.props.artist;
        return(
            <div>
                <Link className='link-home-artists'>
                    <span>{name}</span>
                    <img  className='img-artists-home' id={name} src={imgPath} alt="Foto da artista Amanda" />
                    <b>{specialt}</b>
                </Link>
            </div>
        )
    }
}

export default Artist;
