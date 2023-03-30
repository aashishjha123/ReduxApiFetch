import logo from './logo.svg';
import { useEffect } from 'react';
import './App.css';
import { useDispatch , useSelector } from 'react-redux';
import { getPosts } from './Redux/Features/PostSlice';

function App() {

  const dispatch=useDispatch();
  const {posts,loading} = useSelector((state)=>state.post)
  useEffect(()=>{
    console.log(posts);
    dispatch(getPosts());
  },[])


  return (
   <>
   {posts.map((item)=>(
    // <h2>{item.title}</h2>
    <h1>{item.body}</h1>
   ))}
   </>
  );
}

export default App;
