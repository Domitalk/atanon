import React from 'react'
import Reaction from './Reaction'

class Post extends React.Component {

    render() {
        console.log(this.props.post)
        return (
            <div>
                {/* post  */}
                <img src={this.props.post.image_url} alt="" />
                {this.props.post.comment}
                <Reaction post={this.props.post} /> 
            </div>
        )
    }
}

export default Post 