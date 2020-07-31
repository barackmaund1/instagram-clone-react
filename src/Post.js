import React from 'react'
import './Post.css'
import Avatar from "@material-ui/core/Avatar"

const Post = () => {
    return (
        <div className='post'>
             {/*header _>avatar+ username*/}
             <div className='post__header'>
                <Avatar
                className="post__avatar"
                alt='barack'
                src='images/avatar/1.jpg'
                />
            
                <h>username</h>
             </div>
       
            {/*image */}
            <img className='post__image' src='https://bit.ly/2D5Re14'/>
            {/*username+ caption*/}
            <h4 className='post__text'><strong>Barack baib</strong>:Wow my beautiful lady</h4>
        </div>
    )
}

export default Post
