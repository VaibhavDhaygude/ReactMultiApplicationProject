import React from 'react';

function Songlist({songs,setCurrentsong,setIsplaying}){
    function handelsongclick(song){
        setCurrentsong(song);
        setIsplaying(false);
    }
    return(
        <ul>
            {songs.map((songs)=>
                <li key={songs.id} onClick={()=>handelsongclick(songs)}>{songs.title}-{songs.artist}</li>
            )}
        </ul>
    )
}
export default Songlist;