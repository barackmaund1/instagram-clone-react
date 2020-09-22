import React,{useState,useEffect} from 'react';
import './App.css';
import Post from './Post'; 
import { db,auth,storage} from './firebase';
import { makeStyles } from '@material-ui/core/styles';
import Modal from '@material-ui/core/Modal';
import { Button,Input } from '@material-ui/core'
import ImageUpload from './ImageUpload';
import InstragramEmbed from 'react-instagram-embed';


function getModalStyle() {
  const top = 50;
  const left = 50 ;

  return {
    top: `${top}%`,
    left: `${left}%`,
    transform: `translate(-${top}%, -${left}%)`,
  };
}

const useStyles = makeStyles((theme) => ({
  paper: {
    position: 'absolute',
    width: 400,
    backgroundColor: theme.palette.background.paper,
    border: '2px solid #000',
    boxShadow: theme.shadows[5],
    padding: theme.spacing(2, 4, 3),
  },
}));

function App() {
    const classes=useStyles();
    const [modalStyle] =useState(getModalStyle);

    const [posts,setPosts]=useState([]);
    const [open,setOpen]=useState(false);
    const [opensignIn,setOpenSignIn]=useState(false);
    const [username,setUsername]=useState('');
    const [password,setPassword]=useState('');
    const [email,setEmail]=useState('');
    const [user,setUser]=useState(null);
// useEffect-Run a piece of code based on a specific condition
useEffect(() =>{
  const unsubscribe = auth.onAuthStateChanged((authUser) =>{
    if(authUser){
      //user has logged in.. .
      console.log(authUser);
      setUser(authUser);
      if(authUser.displayName){
        //dont update username
      } else{
        //if we just created someone
        return authUser.updateProfile({
          displayName:username,
        });
      }
    } else{
      // user has logged out
      setUser(null)
    }
  })
  return()=>{
    //perform some cleanup actions
    unsubscribe();
  }
},[user,username])  ;

useEffect(() =>{
  //this is where the code runs
  db.collection('posts').orderBy('timestamp','desc').onSnapshot(snapshot => {
 //every time a new post is added ,this code fire up
 setPosts(snapshot.docs.map(doc =>({
   id: doc.id,
   post: doc.data()
 })));
  })
 
},[])

const signUp= (event)=>{
 event.preventDefault();

auth.createUserWithEmailAndPassword(email,password)
.then((authUser) =>{
  return authUser.user.updateProfile({
    displayName:username
  });
})
.catch((error) =>alert(error.message));
setOpen(false)
}

const signIn = (event) =>{
  event.preventDefault();
   
  auth.signInWithEmailAndPassword(email,password)
  .catch((error) =>alert(error.message))
  setOpenSignIn(false)
}
return ( 
        
      <div className = "app" >
        
         

          <Modal
            open={open}
            onClose={() => setOpen(false)}
            >
              <div style={modalStyle} className={classes.paper}>
               <form className="app__signup">
                  <center>
                    <img
                      className='app__headerImage'
                      src='https://bit.ly/30hrLdP'
                    />
                    </center>
                    <Input
                      placeholder='username'
                      type='text'
                      value={username}
                      onChange={(e) => setUsername(e.target.value)}
                    />
                    
                    <Input
                      placeholder='email'
                      type='text'                      value={email}
                      onChange={(e) => setEmail(e.target.value)}
                    />
                    <Input
                      placeholder='password'
                      type='password'
                      value={password}
                      onChange={(e) => setPassword(e.target.value)}
                    />
                    <Button type='submit' onClick={signUp}>Sign Up</Button>
                   
               </form>
              </div>
          </Modal>
          <Modal
          open={opensignIn}
          onClose={() => setOpenSignIn(false)}
          >
            <div style={modalStyle} className={classes.paper}>
             <form className="app__signup">
                <center>
                  <img
                    className='app__headerImage'
                    src='https://bit.ly/30hrLdP'
                  />
                  </center>
                 
                  
                  <Input
                    placeholder='email'
                    type='text'                      value={email}
                    onChange={(e) => setEmail(e.target.value)}
                  />
                  <Input
                    placeholder='password'
                    type='password'
                    value={password}
                    onChange={(e) => setPassword(e.target.value)}
                  />
                  <Button type='submit' onClick={signIn}>Sign In</Button>
                 
             </form>
            </div>
           </Modal>
           {/*header*/}
                <div className="app__header">
                  <img
                  className='app__headerImage'
                  src='https://bit.ly/30hrLdP'
                  />

                  {user ?(
                    <Button onClick={() =>auth.signOut()}>logout</Button>
                  ):(
                    
                    <div className='app__loginContainer'>
                    <Button onClick={() => setOpenSignIn(true)}>Sign In</Button>
                    <Button onClick={() => setOpen(true)}>Sign Up</Button>
                    </div>
                    )}
                </div>
                {/*posts*/}
               <div className='app_posts'>
                  <div className='app__postsLeft'>
                        {
                          posts.map(({id,post}) =>(
                            <Post key={id} postId={id} user={user} username={post.username} caption={post.caption} imageUrl={post.imageUrl}/>  
                          ))  
                        }
                  </div>
                  <div className='app__postsRight'>
                      <InstragramEmbed
                      url='https://www.instagram.com/p/CC-tn9epzK9/?utm_source=ig_web_copy_link'
                      maxwidth={320}
                      hideCaption={false}
                      cointerTagName='div'
                      protocol=''
                      injectscript
                      onLooading={() =>{}}
                      onSuccess={() =>{}}
                      onAfterRender={() =>{}}
                      onFailure={() =>{}}
                      />
                      <InstragramEmbed
                      url='https://www.instagram.com/p/B1bI4PjFvjY/?utm_source=ig_web_copy_link'
                      maxwidth={320}
                      hideCaption={false}
                      cointerTagName='div'
                      protocol=''
                      injectscript
                      onLooading={() =>{}}
                      onSuccess={() =>{}}
                      onAfterRender={() =>{}}
                      onFailure={() =>{}}
                      />
                  </div>
                  
                </div>
                 
                
                 <div className='imageUpload__text'>
                  { user?.displayName?(
                    <ImageUpload username={user.displayName}/>
                  ):(
                    <h3>Oops! you need to login to upload</h3>
                  )}
         
                 </div>
                
         
        </div>
    );
}

export default App;