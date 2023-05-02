import styled, { css } from 'styled-components'

const SIZES = {
  col01: css`
    display: block;
    margin-bottom: 10px;
    lineheight: 3;
    margin-right: 15px;
  `,

  col04: css`
    margin-left: 100px;
  `,
}

const titleMixin = (view = 'col01') => {
  const styles = SIZES[view]

  return styles
}

export const Item = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
`

export const col01 = styled.div`
  ${titleMixin()}
`

export const col02 = styled.div`
  ${titleMixin()};
  margin-left: 15px;
`

export const col03 = styled.div`
  ${titleMixin()}
  margin-left: 200px;
`

export const col04 = styled.div`
  ${titleMixin('col04')};
`
