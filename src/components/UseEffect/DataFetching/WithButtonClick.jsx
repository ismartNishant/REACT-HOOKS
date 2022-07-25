
import React , {useState,useEffect} from 'react';
import axios from 'axios';
import { Button ,TextField} from '@mui/material';

const WithButton = () => {
  const [post, setPost] = useState({});
  const [id, setId] = useState(1);
  const [idOnButtonClick, setIdOnButtonClick] = useState(1);

  useEffect(() => {
    axios.get(`https://jsonplaceholder.typicode.com/posts/${idOnButtonClick}`)
         .then( res =>{
           console.log(res);
           console.log(res.status)
           setPost(res.data);
         })
         .catch(err =>{
           console.log(err)
         })
  },[idOnButtonClick])
  
  const handleClick = () =>{
  setIdOnButtonClick(id)
  }
  return (
    <div>
      <h1>List</h1>
       <TextField size='small' required   value={id} onChange={ (event) => setId(event.target.value)} id="outlined-required" label="Required"  />
       <Button variant='outlined' color='warning' onClick={handleClick}>Fetch Post</Button>
       <h2>{post.title}</h2>
    </div>
  )
}

export default WithButton;