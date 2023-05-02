import * as S from './styledNotFound'
import smile from '../../img/smile_crying.png'
import BtnLogin from '../../components/technicalComps/btn'

function NotFound() {
  return (
    <S.container>
      <S.header>404</S.header>
      <S.block>
        <S.notFound>Страница не найдена</S.notFound>{' '}
        <S.img src={smile} alt="smile" />
      </S.block>
      <S.text>
        Возможно, она была удалена <br />
        или перенесена на другой адрес
      </S.text>
      <BtnLogin btntext="Вернуться на главную" />
    </S.container>
  )
}

export default NotFound
