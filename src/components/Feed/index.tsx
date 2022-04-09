import { useEffect, useState } from 'react'
import Swal from 'sweetalert2'
import * as SC from './styles'
import { getAllPosts } from '../../services/posts/get-all'
import FeedPost from '../FeedPost'
import { Post, UsersInPhoto } from '../../interfaces'

const Feed: React.FC = () => {
  const [feedImages, setFeedImages] = useState<Post[]>([])
  const [isLoading, setIsLoading] = useState(true)

  const getUsernames = (usersInPhoto: UsersInPhoto[]) =>
    usersInPhoto.map(({ user }) => user.username)

  const loadFeedPosts = () =>
    getAllPosts()
      .then(response => {
        setFeedImages(response.data)
      })
      .catch(error =>
        Swal.fire({
          icon: 'error',
          title: 'Oops...',
          text: `${error}`,
        }),
      )
      .finally(() => setIsLoading(false))

  useEffect(() => {
    loadFeedPosts()
  }, [])

  return (
    <SC.FeedContainer className="container">
      {isLoading && (
        <div className="loader big" role="status">
          <span className="visually-hidden">Loading...</span>
        </div>
      )}
      <SC.Feed className="container">
        {feedImages.map(
          ({
            _id,
            link,
            imagens,
            upvotes,
            comentarios,
            metadados,
            criadoEm,
          }) => (
            <FeedPost
              key={_id}
              linkToPost={link}
              imageUrl={imagens.resolucaoPadrao.url}
              upvotes={upvotes}
              comments={comentarios}
              userInPhoto={getUsernames(metadados.users_in_photo)}
              createdAt={criadoEm}
            />
          ),
        )}
      </SC.Feed>
    </SC.FeedContainer>
  )
}

export default Feed
