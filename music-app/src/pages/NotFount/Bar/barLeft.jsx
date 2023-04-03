import BarCentr from './barCentr'
 
import prev from '../../../img/icon/prev.svg';
import play from '../../../img/icon/play.svg';
import next from '../../../img/icon/next.svg';
import repeat from '../../../img/icon/repeat.svg';
import shuffle from '../../../img/icon/shuffle.svg';

import * as S from './styledBarLeft'

function BarLeft(){
    return (
      <S.BarPlayer>
        <S.PlayerControls>
            <S.PlayerBtnPrev>                             
                <S.PlayerBtnPrevSvg src={prev} alt="prev"/>
            </S.PlayerBtnPrev>
            <S.PlayerBtnPlay>
                <S.PlayerBtnPlaySvg src={play} alt="play"/>
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