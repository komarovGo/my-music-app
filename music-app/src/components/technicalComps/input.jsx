import * as S from './styledInput'

function Input(props) {
  return (
    <S.container>
      <S.input
        type={props.type}
        placeholder={props.placeholder}
        value={props.value}
        onChange={props.onChange}
      />
      <S.inputLine />
    </S.container>
  )
}

export default Input
