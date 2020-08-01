import React,{useState,useEffect} from 'react';
import './App.css';
import Post from './Post'; 
import { db } from './firebase';

function App() {
    const [posts,setPosts]=useState([]);
// useEffect-Run a piece of code based on a specific condition
  
useEffect(() =>{
  //this is where the code runs
  db.collection('posts').onSnapshot(snapshot => {
 //every time a new post is added ,this code fire up
 setPosts(snapshot.docs.map(doc =>({
   id: doc.id,
   post: doc.data()
 })));
  })
 
},[])

return ( 
        
        <div className = "app" >
           <div className="app__header">
            <img
             className='app__headerImage'
             src='https://bit.ly/30hrLdP'
            />
          </div>
          <h1> HELLO Clever Programmer Lets build an instagram clone with react 🔥  </h1> 
          {
            posts.map(({id,post}) =>(
              <Post key={id} username={post.username} caption={post.caption} imageUrl={post.imageUrl}/>  
            ))  
          }
         
           {/*header*/}
          {/*posts*/}
          {/*Posts*/}
        </div>
    );
}

export default App;