import { useDispatch } from 'react-redux'
import * as S from './styledPopup'
import { useContextTheme } from '../../context/ContextTheme'
import { isFilter, filterBy } from '../../store/slises/filter'

function Popup(props) {
  const theme = useContextTheme()
  const dispatch = useDispatch()

  const coords = props.button.getBoundingClientRect()

  const style = {
    top: `${coords.bottom}px`,
    left: `${coords.left}px`,
    backgroundColor: theme.theme.colorNav,
    color: theme.theme.color,
  }

  const filterPopup = (e) => {
    e.preventDefault()
    dispatch(filterBy(e.target.textContent))
    dispatch(isFilter())
  }

  return (
    <S.wrapper style={style}>
      <S.PopupList>
        <ul>
          {props.items.map((item) => (
            <li key={item.toString()}>
              <S.popupLink onClick={filterPopup}>{item}</S.popupLink>
            </li>
          ))}
        </ul>
      </S.PopupList>
    </S.wrapper>
  )
}

export default Popup
