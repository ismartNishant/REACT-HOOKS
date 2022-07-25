import React ,{useReducer , useEffect} from 'react';
import axios from 'axios';
const initialState = {
    loading:true,
    error:"",
    post:{}
}
const reducer =(state, action)=>{
    switch (action.type) {
        case 'FETCH_SUCCESS':
            return {
                loading: false,
                error:'',
                post: action.payload
            }
         case 'FETCH_ERROR':
            return {
                loading: false,
                error:'Soething went wrong',
                post: {}
            }
        default:
            return state
    }
}
const DetaFetchWithReducer = () => {
    const [posts, dispatch] = useReducer(reducer, initialState);
    useEffect(() => {
        axios.get( `https://jsonplaceholder.typicode.com/posts/1`)
             .then ( response => {
                dispatch( { type: 'FETCH_SUCCESS', payload:response.data})
             })
             .catch(error =>{
                 dispatch({ type:'FETCH_ERROR'})
             })
       }, [])
  return (
    <div>
         {posts.loading ? "Loading": posts.post.title }
         {posts.error ? posts.error: null}
    </div>
  )
} 
export default DetaFetchWithReducer