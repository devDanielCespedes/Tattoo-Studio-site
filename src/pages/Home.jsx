import React from 'react';
import '../App.css';
import arrayArtists from '../artistsData'
import Artist from '../components/Artist';
class Home extends React.Component {
    render() {
        return(
          <div className='home-content'>
            <div className='home-map-div-artists'>
              {arrayArtists.map(artist => <Artist key={artist.name} artist={artist} />)}
            </div>
            <h2 className='h2-home'>About studio</h2>
            <p className='p-home-and-gallery'>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Quibusdam sed asperiores enim ipsum eveniet libero inventore recusandae non saepe. Amet alias explicabo necessitatibus repudiandae officiis veniam quidem odit, sequi ut.
            Magnam ea hic quaerat modi, quasi autem inventore repellendus dolore molestias dolorum id, est numquam. Repellat cupiditate atque nobis soluta, aut itaque ad praesentium nam. Iste consequatur ullam placeat a.
            Iusto soluta facere, minus porro autem natus ea totam veniam ab laborum sed aliquid quidem atque commodi aperiam placeat ipsa temporibus similique eos! Totam doloribus ab, enim provident laboriosam fugit?Lorem, ipsum dolor sit amet consectetur adipisicing elit. Quibusdam sed asperiores enim ipsum eveniet libero inventore recusandae non saepe. Amet alias explicabo necessitatibus repudiandae officiis veniam quidem odit, sequi ut.
            Magnam ea hic quaerat modi, quasi autem inventore repellendus dolore molestias dolorum id, est numquam. Repellat cupiditate atque nobis soluta, aut itaque ad praesentium nam. Iste consequatur ullam placeat a.
            Iusto soluta facere, minus porro autem natus ea totam veniam ab laborum sed aliquid quidem atque commodi aperiam placeat ipsa temporibus similique eos! Totam doloribus ab, enim provident laboriosam fugit?</p>
          </div>
        )
    }
}

export default Home;
