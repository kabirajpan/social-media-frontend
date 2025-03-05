import React, { useState } from 'react'
import "./post.css"
import {MoreVert, PostAddTwoTone } from '@mui/icons-material'
import { Users } from '../dummyData'


export default function Post({post}) {
    const [like, setLike] = useState(post.like)
    const [isLike, setIsLike] = useState(false)

    const likeHandler = () => {
        setLike(isLike ? like-1 : like + 1)
        setIsLike(!isLike)
    }



    
    console.log(post);
  return (
    <div className='post'>
        <div className="postWrapper">
            <div className="postTop">
                <div className="postTopLeft">
                    <img src={Users.filter(u => u.id === post.userId)[0].profilePicture} alt="" className="postProfileImg" />
                    <span className="postUserName">
                        {Users.filter(u => u.id === post.userId)[0].username} </span>
                    <span className="postDate">{post.date} </span>
                </div>
                <div className="postTop">
                    <MoreVert/>   
                </div>
            </div>
            <div className="postCenter">
                <span className="postText">
                    {post?.desc}
                </span>
                <img src={post.photo} className='postImg' />
            </div>
            <div className="postBottom">
                <div className="postBottomLeft">
                    <img className='likeIcon' src="assets/like.png" onClick={likeHandler} alt="" />
                    <img className='likeIcon' src="assets/heart.png" onClick={likeHandler} alt="" />
                    <span className="postLikeCounter">{like}  people like it</span>
                </div>
                <div className="postBottomRight">
                    <span className="postCommentText">{post.comment} comments
                    </span>
                </div>
            </div>
        </div>

    </div>
  )
}
