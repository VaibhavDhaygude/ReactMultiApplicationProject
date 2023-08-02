import React,{ useState, useRef } from 'react';
import Playbtn from './playbtn';
import Pausedbtn from './pausedbtn';
import Songlist from './songlist';
import './../musicplayer.css';

function Musicplayer(){
    const [songs,setSongs]=useState([
        {id:1,title:'Song1',artist:'MC Stan',url:'/songs/song1.mp3'},
        {id:2,title:'Song2',artist:'Vaibhav',url:'/songs/song2.mp3'}
        
    ]);
    const [currentsong,setCurrentsong]=useState(null);
    const [isplaying,setIsplaying]=useState(false);
    const audioElement=useRef(null);
    function handelPlay(){
        setIsplaying(true);
        audioElement.current.pause();
    }
    function handelPaused(){
        setIsplaying(false);
        audioElement.current.play();
    }
    return(
        <div className='music'>
            <div className='container'>
            <h1>Music Player</h1><hr></hr>
            <Songlist songs={songs} setCurrentsong={setCurrentsong} setIsplaying={setIsplaying}/><hr></hr>
            {currentsong && (
                <div>
                    <audio src={currentsong.url} ref={audioElement}></audio>
                        <h2>{currentsong.title}</h2>
                        <h3>{currentsong.artist}</h3>
                        {isplaying ?
                            (<Pausedbtn handelPaused={handelPaused}/>):
                            (<Playbtn handelPlay={handelPlay}/>)
                        }
                    
                </div>
            )}
            </div>
        </div>
    );

}
export default Musicplayer;