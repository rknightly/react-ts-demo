import { Card } from 'antd'
import React from 'react'
import { PostData } from '../types/PostData'


function PostCard(props: {
  data: PostData, 
  onClick: () => void,
  children: React.ReactNode
}) {
  return (
    <Card hoverable={true} className="postCard" onClick={() => props.onClick()}>
      <p>
        <b>Post ID: </b>{props.data.id}
      </p>
      <p>
        <b>Title: </b>{props.data.title}
      </p>
      <p>
        <b>Body: </b>{props.data.body}
      </p>
    </Card>
  )
}

export default PostCard
