import Skeleton from 'react-loading-skeleton'
import * as S from './styledSkeletonTrackPlay'

function SkeletonTrackPlay() {
  return (
    <S.bar>
      <S.img>
        <Skeleton width={51} height={51} />
      </S.img>
      <S.track>
        <Skeleton width={100} height={19} />
      </S.track>
      <S.author>
        <Skeleton width={100} height={19} />
      </S.author>
    </S.bar>
  )
}

export default SkeletonTrackPlay
