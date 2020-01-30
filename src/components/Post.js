import React from 'react'
import Reaction from './Reaction'

function Post (props) {

    return (
        <div>
            <img src={props.post.image_url} alt="" />
            {props.post.comment}
            <Reaction post={props.post} addReaction={props.addReaction} /> 
        </div>
    )
    
}

export default Post 