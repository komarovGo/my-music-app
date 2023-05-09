import Skeleton from 'react-loading-skeleton'
import * as S from './styledSkeletonSideBar'

function SkeletonSideBar() {
  return (
    <S.Bar>
      <S.col>
        <Skeleton width={250} height={150} />
      </S.col>
      <S.col>
        <Skeleton width={250} height={150} />
      </S.col>
      <S.col>
        <Skeleton width={250} height={150} />
      </S.col>
    </S.Bar>
  )
}

export default SkeletonSideBar
