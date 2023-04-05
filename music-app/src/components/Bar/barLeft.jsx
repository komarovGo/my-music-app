import { useState } from "react";

import BarCentr from './barCentr'

import play from '../../img/icon/play.svg';
import pause from '../../img/icon/puse.svg';
import prev from '../../img/icon/prev.svg';
import next from '../../img/icon/next.svg';
import repeat from '../../img/icon/repeat.svg';
import shuffle from '../../img/icon/shuffle.svg';


import * as S from './styledBarLeft'

function BarLeft({audioRef}){
    const [isPlaying, setIsPlaying] = useState(false);
    

    function togglePlayback() {
        if (!isPlaying) {
            setIsPlaying(true);
            audioRef.current.play()
        } else {
            setIsPlaying(false);        
            audioRef.current.pause()
        }
  }
    
    return (
      <S.BarPlayer>
        <S.PlayerControls>
            <S.PlayerBtnPrev>                               
                <S.PlayerBtnPrevSvg src={prev} alt="prev"/>
            </S.PlayerBtnPrev>
            <S.PlayerBtnPlay>                
                { isPlaying ? <S.PlayerBtnPlaySvg src= {pause} alt="asd" onClick={togglePlayback}/> :
                <S.PlayerBtnPlaySvg src={play} alt="asdf" onClick={togglePlayback}/> }
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