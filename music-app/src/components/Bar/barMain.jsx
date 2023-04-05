import { useRef } from "react";

import BarLeft from './barLeft';

import volume from '../../img/icon/volume.svg';

import * as S from './styledBarMain'

import audio  from '../../asd.mp3';

function Bar(){
    const audioRef = useRef(null);
    const progressBarRef = useRef(null);

    const handleProgressChange = () => {
        audioRef.current.currentTime = progressBarRef.current.value;
    };

    return (
     <S.Bar>
         <audio controls src={audio} ref={audioRef}  style={{display: "none"}}/>
        <S.BarContent>
            <S.BarPlayerProgress type="range"
                ref={progressBarRef}
                defaultValue="0"
                onChange={handleProgressChange}/>
            <S.BarlayerBlock>
                <BarLeft audioRef={audioRef} />
                <S.BarVolumeBlock>
                    <S.VolumeContent>
                        <S.VolumeImage>
                            <S.VolumeSvg src={volume} alt="volume" />
                        </S.VolumeImage>
                        <S.VolumeProgressBtn>
                            <S.VolumeProgressLine  type="range" name="range"/>
                        </S.VolumeProgressBtn>
                    </S.VolumeContent>
                </S.BarVolumeBlock>
            </S.BarlayerBlock>
        </S.BarContent>
    </S.Bar>
    )
}

export default Bar;
