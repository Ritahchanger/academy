import React, { useRef,useEffect } from 'react';
import "./Videoplayer.css";
import video from "../../images/meru.mp4";

const VideoPlayer = ({ playerState, setPlayerState }) => {

 const player = useRef(null);
 const closePlayer = (e) =>{
    if(e.target === player.current){
          setPlayerState(false);
    }
 }

 useEffect(()=>{
    document.addEventListener('click', closePlayer);
    return () => {
      document.removeEventListener('click', closePlayer);
    };
 },[])
  return (
    <div className={`video-player ${playerState ? "" : 'hide'}`} ref={player}>
      <video src={video} autoPlay muted controls>
        {" "}
      </video>
    </div>
  );
};

export default VideoPlayer;
