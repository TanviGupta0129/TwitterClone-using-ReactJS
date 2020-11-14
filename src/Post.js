import React from 'react'
import './Post.css'
import {Avatar} from '@material-ui/core'
import VerifiedUserIcon from "@material-ui/icons/VerifiedUser";
import ChatBubbleOutlineIcon from "@material-ui/icons/ChatBubbleOutline";
import RepeatIcon from "@material-ui/icons/Repeat";
import FavoriteBorderIcon from "@material-ui/icons/FavoriteBorder";
import PublishIcon from "@material-ui/icons/Publish";

function Post({displayName, username, verified, text, image, avatar}) {
    return (
        <div className="Post">

            <div className="Post_Avatar">
                
              <Avatar src ={avatar}/>
               
            </div>

            <div className="Post_Body">

                <div className="Post_Header">

                    <div className="Post_HeaderText">

                       <h3>
                           {displayName}{""}

                           <span className="Post_Username"> 
                           {verified && <VerifiedUserIcon className="Post_Badge" />} 
                            @  {username}
                             </span>

                       </h3>
                    </div>

                    <div className="Post_HeaderContent">
                      
                    <p>{text}</p>

                    </div>

                    <img src={image} alt= ""/>

                </div>

                <div className="Post_Footer">
                     <ChatBubbleOutlineIcon fontSize="small" />
                     <RepeatIcon fontSize="small" />
                     <FavoriteBorderIcon fontSize="small" />
                     <PublishIcon fontSize="small" />
                </div>


            </div>

            
            
        </div>
    )
}

export default Post
