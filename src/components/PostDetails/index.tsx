import moment from 'moment'
import * as SC from './styles'

interface PostDetailsProps {
  upvotes: number
  comments: number
  userInPhoto: string[]
  createdAt: string
}

const PostDetails: React.FC<PostDetailsProps> = ({
  upvotes,
  comments,
  userInPhoto,
  createdAt,
}) => (
  <SC.PostDetails>
    {userInPhoto.length
      ? userInPhoto.map(username => (
          <SC.DetailsItem>
            <SC.Text>@{username}</SC.Text>
          </SC.DetailsItem>
        ))
      : null}

    <SC.DetailsItem>
      <SC.Icon className="fa-solid fa-heart" />
      <SC.Text>{upvotes}</SC.Text>
    </SC.DetailsItem>
    <SC.DetailsItem>
      <SC.Icon className="fa-solid fa-comment" />
      <SC.Text>{comments}</SC.Text>
    </SC.DetailsItem>
    <SC.DetailsItem>
      <SC.Icon className="fa-solid fa-calendar-days" />
      <SC.Text>{moment(createdAt).format('DD/MM/YYYY HH:mm')}</SC.Text>
    </SC.DetailsItem>
  </SC.PostDetails>
)

export default PostDetails
