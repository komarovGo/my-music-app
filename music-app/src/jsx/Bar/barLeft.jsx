import BarCentr from './barCentr'
 

import prev from '../../img/icon/prev.svg';
import play from '../../img/icon/play.svg';
import next from '../../img/icon/next.svg';
import repeat from '../../img/icon/repeat.svg';
import shuffle from '../../img/icon/shuffle.svg';

import * as S from './styledBarLeft'


function BarLeft(){
    return (
      <S.barPlayer>
        <S.playerControls>
            <S.playerBtnPrev>                             
                <S.playerBtnPrevSvg src={prev} alt="prev"/>
            </S.playerBtnPrev>
            <S.playerBtnPlay>
                <S.playerBtnPlaySvg src={play} alt="play"/>
            </S.playerBtnPlay>
            <S.playerBtnNext>
                <S.playerBtnNextSvg src={next} alt="next"/>
            </S.playerBtnNext>
            <S.playerBtnRepeat className="player__btn-repeat _btn-icon">
                <S.playerBtnRepeatSvg className="player__btn-repeat-svg" src={repeat} alt="repeat" />
            </S.playerBtnRepeat>
            <S.playerBtnShuffle>
                <S.playerBtnShuffletSvg src={shuffle} alt="shuffle" />
            </S.playerBtnShuffle>
        </S.playerControls>
        {/* центральная часть */}
        <BarCentr/> 
        {/* центральная часть */}
    </S.barPlayer>
    )
}

export default BarLeft;