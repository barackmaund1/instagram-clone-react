import React from 'react';
import './App.css';
import Post from './Post'; 
function App() {
    return ( 
        
        <div className = "app" >
           <div className="app__header">
            <img
             className='app__headerImage'
             src='https://bit.ly/30hrLdP'
            />
          </div>
          <h1> HELLO Clever Programmer Lets build an instagram clone with react 🔥  </h1> 
          <Post/>
          <Post/>
          <Post/>
           {/*header*/}
          {/*posts*/}
          {/*Posts*/}
        </div>
    );
}

export default App;