/* eslint-disable camelcase */
import { useState } from 'react'
import { useDispatch } from 'react-redux'
import Popup from './Popup'
import * as S from './styledfilter'
import { useGetAllTracksQuery } from '../../api/api'
import { filterCategory } from '../../store/slises/filter'

function Filter() {
  const { data } = useGetAllTracksQuery('')
  const dispatch = useDispatch()

  const filterListData = [
    {
      filter: 'author',
      name: 'исполнителю',
    },
    {
      filter: 'release_date',
      name: 'году выпуска',
    },
    {
      filter: 'genre',
      name: 'жанру',
    },
  ]

  const [activeCategory, setActiveCategory] = useState('')
  const [filterButton, setFilterButton] = useState()
  const [categoryItems, setCategoryItems] = useState([])

  const filterValues = {
    author: [],
    release_date: [],
    genre: [],
  }

  filterValues.release_date = [
    ...new Set(data?.map(({ release_date }) => release_date)),
  ].filter((n) => n)
  filterValues.author = [...new Set(data?.map(({ author }) => author))]
  filterValues.genre = [...new Set(data?.map(({ genre }) => genre))]

  const handleClickCategory = (e, filterName) => {
    setFilterButton(e.target)
    if (activeCategory === filterName) {
      setActiveCategory('')
      setCategoryItems([])
      return
    }

    setActiveCategory(filterName)
    setCategoryItems(filterValues[filterName])
    dispatch(filterCategory(filterName))
  }

  return (
    <div>
      <S.filter>
        <S.title>Искать по:</S.title>
        {filterListData.map((filterItem) => (
          <S.button
            key={filterItem.filter}
            className={activeCategory === filterItem.filter ? `active` : ``}
            onClick={(e) => handleClickCategory(e, filterItem.filter)}
            role="presentation"
          >
            {filterItem.name}
          </S.button>
        ))}
      </S.filter>

      {activeCategory !== '' ? (
        <Popup button={filterButton} items={categoryItems} />
      ) : null}
    </div>
  )
}

export default Filter
