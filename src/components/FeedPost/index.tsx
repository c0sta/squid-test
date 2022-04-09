import { useState } from 'react'
import NoImage from '../../assets/no-image.png'
import * as SC from './styles'
import PostDetails from '../PostDetails'

interface FeedPostProps {
  linkToPost: string
  imageUrl: string
  upvotes: number
  comments: number
  userInPhoto: string[]
  createdAt: string
}

const FeedPost: React.FC<FeedPostProps> = ({
  linkToPost,
  imageUrl,
  upvotes,
  comments,
  userInPhoto,
  createdAt,
}) => {
  const [showDetails, setShowDetails] = useState(false)

  return (
    <SC.FeedPost
      imageUrl={imageUrl.length ? imageUrl : NoImage}
      href={linkToPost}
      target="_blank"
      onMouseEnter={() => setShowDetails(true)}
      onMouseLeave={() => setShowDetails(false)}
    >
      {showDetails && (
        <PostDetails
          upvotes={upvotes}
          comments={comments}
          userInPhoto={userInPhoto}
          createdAt={createdAt}
        />
      )}
    </SC.FeedPost>
  )
}

export default FeedPost
