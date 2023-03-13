
import BarLeft from './barLeft';

import volume from '../../img/icon/volume.svg';

import * as S from './styledBarMain'

function Bar(){
    return (
     <S.Bar>
        <S.BarContent>
            <S.BarPlayerProgress/>
            <S.barlayerBlock>
                <BarLeft/>
                <S.barVolumeBlock>
                    <S.VolumeContent>
                        <S.VolumeImage>
                            <S.volumeSvg src={volume} alt="volume" />
                        </S.VolumeImage>
                        <S.VolumeProgressBtn>
                            <S.volumeProgressLine  type="range" name="range"/>
                        </S.VolumeProgressBtn>
                    </S.VolumeContent>
                </S.barVolumeBlock>
            </S.barlayerBlock>
        </S.BarContent>
    </S.Bar>
    )
}

export default Bar;
