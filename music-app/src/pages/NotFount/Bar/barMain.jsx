import BarLeft from './barLeft';

import volume from '../../../img/icon/volume.svg';

import * as S from './styledBarMain'

function Bar(){
    return (
     <S.Bar>
        <S.BarContent>
            <S.BarPlayerProgress/>
            <S.BarlayerBlock>
                <BarLeft/>
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
