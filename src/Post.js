import React,{ useState,useEffect} from 'react';
import './Post.css';
import { db,auth,storage} from './firebase';
import Avatar from "@material-ui/core/Avatar";
import { Button,Input } from '@material-ui/core'
import firebase from 'firebase';

const Post = ({postId,user,username,caption,imageUrl}) => {
    const [comments,setComments]=useState([]);
    const [comment,setComment]=useState('');


useEffect(() => {
    let unsubscribe;
    if(postId){
        unsubscribe=db
        .collection('posts')
        .doc(postId)
        .collection('comments')
        .orderBy('timestamp','desc')
        .onSnapshot((snapshot) =>{
            setComments(snapshot.docs.map((doc) =>doc.data()));
        });
    }
    return () => {
        unsubscribe();
    }
}, [postId])

const postComment = (event) =>{
  event.preventDefault();

  db.collection('posts').doc(postId).collection('comments').add({
     text:comment, 
     username:user.displayName,
     timestamp:firebase.firestore.FieldValue.serverTimestamp()
  });
  setComment('');
}

    return (
        <div className='post'>
             {/*header _>avatar+ username*/}
             <div className='post__header'>
                <Avatar
                className="post__avatar"
                alt='barack'
                src='images/avatar/1.jpg'
                />
            
                <h1>{username}</h1>
             </div>
       
            {/*image */}
            <img className='post__image' src={imageUrl}/>
            {/*username+ caption*/}
            <h4 className='post__text'><strong>{username}</strong>:{caption}</h4>
            
            <div className='post__comments'>
               {comments.map((comment)=> (
                   <p>
                     <strong className='post__commentusername'>{comment.username}</strong>{comment.text}
                   </p>
               ))}
            </div>
            
   
            {user && (
                <form>
                <div className='post__commentBox'>
                    <Input
                    className='post__input'
                    type='text'
                    placeholder='Add a comment...'
                    value={comment}
                    onChange={(e) =>setComment(e.target.value)}
                    />
                    <Button 
                    className='post__button'
                    disabled={!comment}
                    type='submit'
                    onClick={postComment}
                    >
                    Post
                    </Button>
                </div>
               
            </form>

            )}
        
        </div>
    )
}

export default Post
