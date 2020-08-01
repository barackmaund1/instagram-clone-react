import React from 'react'
import './Post.css'
import Avatar from "@material-ui/core/Avatar"

const Post = ({username,caption,imageUrl}) => {
    return (
        <div className='post'>
             {/*header _>avatar+ username*/}
             <div className='post__header'>
                <Avatar
                className="post__avatar"
                alt='barack'
                src='images/avatar/1.jpg'
                />
            
                <h>{username}</h>
             </div>
       
            {/*image */}
            <img className='post__image' src={imageUrl}/>
            {/*username+ caption*/}
            <h4 className='post__text'><strong>{username}</strong>:{caption}</h4>
        </div>
    )
}

export default Post
