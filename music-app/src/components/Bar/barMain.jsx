import { useState, useRef, useEffect } from "react";

import BarLeft from './barLeft';

import volume from '../../img/icon/volume.svg';

import * as S from './styledBarMain'

import audio  from '../../asd.mp3';

function Bar(){
    const audioRef = useRef(null);
    const progressBarRef = useRef(null);
    const [isPlaying, setPlaying] = useState(false)

    // const handleProgressChange = () => {
    //     audioRef.current.currentTime = progressBarRef.current.value;
        
    // };

    useEffect(() => {
    if (audioRef.current) {
        audioRef.current.ontimeupdate = () => {
        progressBarRef.current.value =
            (audioRef.current.currentTime / audioRef.current.duration) * 1000
        }
    }
    }, [isPlaying])

    return (
     <S.Bar>
         <audio controls src={audio} ref={audioRef}  style={{display: "none"}}/>
        <S.BarContent>
            <S.BarPlayerProgress 
                type="range"
                ref={progressBarRef}
                defaultValue="0"
                onChange={setPlaying}/>
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
