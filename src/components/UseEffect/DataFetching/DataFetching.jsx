
import React , {useState,useEffect} from 'react';
import axios from 'axios';

const Basic = () => {
  const [posts, setPosts] = useState([]);

  useEffect(() => {
    axios.get('https://jsonplaceholder.typicode.com/posts')
         .then( res =>{
           console.log(res);
           console.log(res.status)
           setPosts(res.data);
         })
         .catch(err =>{
           console.log(err)
         })
  },[])
  
  return (
    <div>
      <h1>List</h1>
        <ul>
          {
            posts.map(post => <li key={post.id}> {post.title}</li>)
          }
        </ul>
    </div>
  )
}

export default Basic