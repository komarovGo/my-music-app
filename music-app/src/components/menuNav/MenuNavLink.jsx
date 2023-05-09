// eslint-disable-next-line import/no-extraneous-dependencies
import { Link } from 'react-router-dom'
import { useContextTheme, themes } from '../../context/ContextTheme'

function NavLink(props) {
  const theme = useContextTheme()
  return (
    <div>
      {themes.dark === useContextTheme().theme ? (
        <Link
          style={{
            color: '#FFFFFF',
            fontWeight: '400',
            fontSize: '16px',
            lineHeight: '24px',
          }}
          to={props.address}
        >
          {props.text}
        </Link>
      ) : (
        <Link
          style={{
            color: theme.theme.color,
            fontWeight: '400',
            fontSize: '16px',
            lineHeight: '24px',
          }}
          to={props.address}
        >
          {props.text}
        </Link>
      )}
    </div>
  )
}

export default NavLink
