/* eslint-disable react/jsx-curly-brace-presence */
/* eslint-disable no-template-curly-in-string */
/* eslint-disable import/no-extraneous-dependencies */
/* eslint-disable jsx-a11y/anchor-is-valid */
import React from 'react'
import Skeleton, { SkeletonTheme } from 'react-loading-skeleton'
import 'react-loading-skeleton/dist/skeleton.css'
import { Link } from 'react-router-dom'
import { useGetPlaylistsQuery } from '../../api/api'
import SkeletonSideBar from '../skeleton/SkeletonSideBar'
import * as S from './styledSideBarBlock'
import playlist01 from '../../img/playlist01.png'
import playlist02 from '../../img/playlist02.png'
import playlist03 from '../../img/playlist03.png'

function BarBlock() {
  const plImg = [
    { id: 1, img: playlist01 },
    { id: 2, img: playlist02 },
    { id: 3, img: playlist03 },
  ]
  const { data } = useGetPlaylistsQuery()
  const [isLoading, setLoading] = React.useState(true)

  React.useEffect(() => {
    const timer = setTimeout(() => {
      setLoading(false)
    }, 1000)
    return () => clearTimeout(timer)
  }, [])

  if (isLoading)
    return (
      <S.block>
        <SkeletonTheme baseColor="#bbb4b4" highlightColor="#444">
          <SkeletonSideBar />
          <p>
            <Skeleton count={0} />
          </p>
        </SkeletonTheme>
      </S.block>
    )
  return (
    <S.block>
      <S.list>
        {data?.map((play) => (
          <S.item key={play.id}>
            <Link to={`/playlist/${play.id}`}>
              <S.img
                src={plImg.find((p) => p.id === play.id).img}
                alt="day's playlist"
              />
            </Link>
          </S.item>
        ))}
      </S.list>
    </S.block>
  )
}

export default BarBlock
