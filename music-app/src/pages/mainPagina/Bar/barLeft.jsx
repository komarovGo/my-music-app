import { useState, useEffect, useRef } from "react";


import BarCentr from './barCentr'

import puse from '../../../img/icon/puse.svg';
import prev from '../../../img/icon/prev.svg';
import play from '../../../img/icon/play.svg';
import next from '../../../img/icon/next.svg';
import repeat from '../../../img/icon/repeat.svg';
import shuffle from '../../../img/icon/shuffle.svg';


import * as S from './styledBarLeft'

function BarLeft(){
    const audioRef = useRef(null);
     
  
    const [isPlaying, setIsPlaying] = useState(false)

    // const [volume, setvolume] = useState(true)


    const handleStop = () => {
        audioRef.current.pause();
    };

    const handleStart = () => {
        audioRef.current.play();
    };

    // useEffect(() => {
    //     if(audioRef){
    //         audioRef.current.volume = volume / 100;
    //     }
    // },[volume])

    return (
      <S.BarPlayer>
         <audio controls src='https://painassasin.online/media/music_files/Frank_Schroter_-_Open_Sea_epic.mp3' ref={audioRef} style={{display: "none"}}/>
        <S.PlayerControls>
            <S.PlayerBtnPrev>                               
                <S.PlayerBtnPrevSvg src={prev} alt="prev"/>
            </S.PlayerBtnPrev>
            <S.PlayerBtnPlay>                
                <S.PlayerBtnPlaySvg 
                    src={play} 
                    alt="play"
                   onClick={handleStart}
                />   
                <S.PlayerBtnPlaySvg 
                    src={puse} 
                    alt="pause"
                    onClick={handleStop}
                />
            </S.PlayerBtnPlay>
            <S.PlayerBtnNext>
                <S.PlayerBtnNextSvg src={next} alt="next"/>
            </S.PlayerBtnNext>
            <S.PlayerBtnRepeat className="player__btn-repeat _btn-icon">
                <S.PlayerBtnRepeatSvg className="player__btn-repeat-svg" src={repeat} alt="repeat" />
            </S.PlayerBtnRepeat>
            <S.PlayerBtnShuffle>
                <S.PlayerBtnShuffletSvg src={shuffle} alt="shuffle" />
            </S.PlayerBtnShuffle>
        </S.PlayerControls>
        {/* центральная часть */}
        <BarCentr/> 
        {/* центральная часть */}
    </S.BarPlayer>
    )
}

export default BarLeft;