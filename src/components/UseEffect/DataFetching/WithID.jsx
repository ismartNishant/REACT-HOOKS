
import React , {useState,useEffect} from 'react';
import axios from 'axios';

const WithId = () => {
  const [post, setPost] = useState({});
  const [id, setId] = useState(1);

  useEffect(() => {
    axios.get(`https://jsonplaceholder.typicode.com/posts/${id}`)
         .then( res =>{
           console.log(res);
           console.log(res.status)
           setPost(res.data);
         })
         .catch(err =>{
           console.log(err)
         })
  },[id])
  
  return (
    <div>
      <h1>List</h1>
      <input type='number'  value={id} onChange={ (event) => setId(event.target.value)}/>
       <h2>{post.title}</h2>
    </div>
  )
}

export default WithId;