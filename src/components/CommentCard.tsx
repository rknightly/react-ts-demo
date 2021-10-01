import { Card } from 'antd'
import React from 'react'
import CommentData from '../types/CommentData'


function CommentCard(props: {
  data: CommentData,
  children: React.ReactNode
}) {
  return (
    <Card className="commentCard">
      <p>
        <b>Post ID: </b>{props.data.postId}
      </p>
      <p>
        <b>Comment ID: </b>{props.data.id}
      </p>
      <p>
        <b>User Email: </b>{props.data.email}
      </p>
      <p>
        <b>Comment Body: </b>{props.data.body}
      </p>
    </Card>
  )
}

export default CommentCard
