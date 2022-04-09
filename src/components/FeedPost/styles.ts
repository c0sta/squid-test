import styled from 'styled-components'

interface FeedPostProps {
  imageUrl: string
}

export const FeedPost = styled.a<FeedPostProps>`
  width: 11rem;
  height: 11rem;
  background-image: url(${(props: FeedPostProps) => props.imageUrl});
  background-position: center;
  background-repeat: no-repeat;
  background-size: cover;
  color: #fff;
  cursor: pointer;
  transition: all ease-in-out 3s;

  &:hover {
    text-decoration: none;
    background-image: linear-gradient(rgba(0, 0, 0, 0.527), rgba(0, 0, 0, 0.5)),
      url(${(props: FeedPostProps) => props.imageUrl});
  }
`
