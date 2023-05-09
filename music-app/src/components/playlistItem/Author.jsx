
import * as S from './styledAuthor'
import { useContextTheme } from '../../context/ContextTheme'

function Author(props) {
  const theme = useContextTheme()
  
  
  
  return (
    <S.author>
      <S.authorLink
        style={{
          color: theme.theme.color,
        }}
      >
        {props.name}
      </S.authorLink>
    </S.author>
  )
}

export default Author
