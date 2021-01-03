import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { Button, Modal, ModalHeader, ModalBody, ModalFooter } from "reactstrap";

const Artist = (props) => {
    const { artist } = props;

    const [modal, setModal] = useState(false);

    const toggle = () => setModal(!modal);

    return (
        <div className='artist-and-artist-modal-content'>
            <div className='artists-div-content'>
                <Link className='link-home-artists'
                    onClick={toggle}
                >
                    <span>{artist.name}</span>
                    <img className='img-artists-home' id={artist.name} src={artist.imgPath} alt="Foto da artista Amanda" />
                    <p>{artist.specialt}</p>
                </Link>
            </div>
            <Modal isOpen={modal} toggle={toggle}>
                <ModalHeader toggle={toggle}><h1>{artist.name}</h1></ModalHeader>
                <ModalHeader><h2>{artist.specialt}</h2></ModalHeader>
                <ModalBody>
                    <img className='modal-artist-foto' id={artist.name} src={artist.imgPath} alt='foto do artista' />
                    <h2>Experience:</h2>
                    <p className='p-modal-artist'>{artist.experience}</p>
                    <h2>About:</h2>
                    <p className='p-modal-artist'>{artist.story}</p>
                    <h2>Tattoos:</h2>
                    <div>
                        {artist.tattoosGalery.map(tattoo => <img key={tattoo} className='modal-tattoo-img' alt='tattos photos' src={tattoo} />)}
                    </div>
                </ModalBody>
                <ModalFooter>
                    <Button color="danger" onClick={toggle}>
                        CLOSE
                    </Button>
                </ModalFooter>
            </Modal>
        </div>
    )
}

export default Artist;
