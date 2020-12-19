import React from 'react';
import Facebook from '../images/facebookIcon.png';
import Instagram from '../images/instagramIcon.jpg';
import WhatsApp from '../images/whatsAppIcon.jpg';

class Footer extends React.Component {
    render() {
        return (
            <div id="footer">
                <div className='social-midia'>
                    <a href="https://www.facebook.com/calmlikeabombtattoo" rel="noreferrer" target="_blank" className="facebook-icon"><img src={Facebook} alt="" /></a>
                    <a href="https://www.instagram.com/dancespedes" rel="noreferrer" target="_blank" className="instagram-icon"><img src={Instagram} alt="" /></a>
                    <a href="https://api.whatsapp.com/send?phone=5511952744571" rel="noreferrer" target="_blank" className="whatsapp-icon"><img src={WhatsApp} alt="" /></a>
                </div>
                <p>&copy; 2020 calmLikeABombTattoo All rights reserved</p>
            </div>
        )
    }
}

export default Footer;