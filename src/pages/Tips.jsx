import React from 'react';

class Tips extends React.Component {

  async componentDidMount() {
        const fetchYoutube = await fetch('https://youtube.googleapis.com/youtube/v3/playlists?channelId=UCY-KR8GyzvjKkbso8z7jBDw&key=AIzaSyAoMwuCU8gD5lDVIgtg62uLGinVaC_Sc4U')
        const responseYoutube = await fetchYoutube.json()
        console.log(responseYoutube)
    }
    render() {
        return(
            <div>
                
            </div>
        )
    }
}

export default Tips;
