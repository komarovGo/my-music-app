import { useSelector } from 'react-redux'
import { SkeletonTheme } from 'react-loading-skeleton'
import { useGetTrackByIdQuery } from '../../api/api'
import SkeletonTrackPlay from '../skeleton/SkeletonTrackPlay'
import * as S from './styledTrackPlay'
import { useContextTheme } from '../../context/ContextTheme'
import { LikeBar } from './likeBar'

function TrackPlay() {
  const trackId = useSelector((state) => state.player.id)
  const { data, isLoading, isSuccess } = useGetTrackByIdQuery(trackId)
  const theme = useContextTheme()

  if (isLoading)
    return (
      <SkeletonTheme baseColor="#bbb4b4" highlightColor="#444">
        <SkeletonTrackPlay />
      </SkeletonTheme>
    )
  return (
    <S.trackPlay>
      <S.contain>
        <S.image
          style={{
            backgroundColor: theme.theme.background,
          }}
        >
          <S.svg alt="music" />
        </S.image>
        {isSuccess && (
          <>
            <S.author>
              <S.authorLink
                style={{
                  color: theme.theme.color,
                }}
                href={data.track_file}
              >
                {data.name}
              </S.authorLink>
            </S.author>
            <S.album>
              <S.albumLink
                style={{
                  color: theme.theme.color,
                }}
                href={data.track_file}
              >
                {' '}
                {data.author}
              </S.albumLink>
            </S.album>
          </>
        )}
      </S.contain>
      <LikeBar />
    </S.trackPlay>
  )
}

export default TrackPlay
