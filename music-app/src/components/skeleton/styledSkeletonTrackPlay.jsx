import styled from 'styled-components'

export const bar = styled.div`
  margin-top: 12px;
  display: grid;
  grid-template-columns: 51px 100px 100px;
  grid-template-areas: 'img track' 'img author';
  column-gap: 12px;
`

export const img = styled.div`
  grid-area: img;
  display: block;
  margin-bottom: 10px;
  margin-right: 294px;
`

export const track = styled.div`
  grid-area: track;
  display: block;
`
export const author = styled.div`
  grid-area: author;
  display: block;
`
