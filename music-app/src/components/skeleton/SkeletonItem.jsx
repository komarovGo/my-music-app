import Skeleton from 'react-loading-skeleton'
import * as S from './styledSkeletonItem'

function SkeletonItems() {
  return (
    <S.Item>
      <S.col01>
        <Skeleton width={51} height={51} />
      </S.col01>
      <S.col02>
        <Skeleton width={100} height={19} />
      </S.col02>
      <S.col03>
        <div>
          <Skeleton width={206} height={19} />
        </div>
      </S.col03>
      <S.col04>
        <Skeleton width={206} height={19} />
      </S.col04>
      <S.col04>
        <Skeleton width={40} height={19} />
      </S.col04>
    </S.Item>
  )
}

export default SkeletonItems
