import { Button } from './styledBtn'

function BtnLogin(props) {
  return (
    <Button type="submit" onClick={props.onClick}>
      {props.btntext}
    </Button>
  )
}

export default BtnLogin
