import styled from 'styled-components'

export const FeedContainer = styled.main`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  margin-top: 32px;
  padding: 16px;
`

export const Feed = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fill, 11rem);
  grid-template-rows: auto;
  grid-gap: 12px;
  place-content: center;
  place-items: center;
  overflow-y: auto;
  width: 100%;
  height: 100%;
`
