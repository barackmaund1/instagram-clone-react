import React,{useState} from 'react';
import './App.css';
import Post from './Post'; 
function App() {
    const [posts,setPosts]=useState([
        {
            username:'diana',
            caption:'wow! DOPE', 
            imageUrl:'https://bit.ly/2D5Re14'
        },
        {
            username:'barack',
            caption:'wow! Puumped', 
            imageUrl:'https://bit.ly/2D5Re14'
        }
    ]);
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
            posts.map(post =>(
              <Post username={post.username} caption={post.caption} imageUrl={post.imageUrl}/>  
            ))  
          }
         
           {/*header*/}
          {/*posts*/}
          {/*Posts*/}
        </div>
    );
}

export default App;