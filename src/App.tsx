import React, { useEffect, useState } from 'react';
import './App.css';
import PostCard from './components/PostCard';
import { PostData } from './types/PostData';

import 'antd/dist/antd.css'; // or 'antd/dist/antd.less'
import CommentCard from './components/CommentCard';
import CommentData from './types/CommentData';

function App() {

  const [posts, setPosts] = useState<PostData[]>([])
  const [comments, setComments] = useState<CommentData[]>([])
  const [selectedPostID, setSelectedPostID] = useState(1)

  // Load in initial posts
  useEffect(() => {
    fetch('https://jsonplaceholder.typicode.com/posts')
      .then(response => response.json())
      .then(data => setPosts(data.slice(0, 4)))
  }, []);

  // Fetch the comments for the selected post
  useEffect(() => {
    fetch(`https://jsonplaceholder.typicode.com/comments?postId=${selectedPostID}`)
      .then(response => response.json())
      .then(data => setComments(data))
  }, [selectedPostID]);

  return (
    <div className="App">
      <h2>Posts</h2>
      
      <div>
      {
        posts.map((post, i) => 
          <PostCard 
            onClick={() => setSelectedPostID(i + 1)} 
            data={post} key={i}>
          </PostCard>)
      }
      </div>
      
      <br/>

      <h2>Comments for post {selectedPostID}</h2>
      <div>
        {
        comments.map((comment, i) => 
          <CommentCard
            data={comment} key={i}>
          </CommentCard>)
        }
      </div>
    </div>
  );
}

export default App;
