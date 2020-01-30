import React from 'react'
import Post from '../components/Post'

class PostContainer extends React.Component {

    state = {
        posts: []
    }

    addReaction = (newComment) => {
        console.log(newComment)
        fetch(`http://localhost:4000/reactions`, {
            method: 'POST', 
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(newComment)
        })
        .then(r => r.json())
        .then((updatedPost) => {
            // console.log(updatedPost)
            let index = this.state.posts.findIndex(post => post.id === updatedPost.id)
            this.setState({
                posts: [...this.state.posts.slice(0, index), updatedPost, ...this.state.posts.slice(index + 1)]
            })
            
        })
    }

    componentDidMount() {
 
        fetch('http://localhost:4000/posts')
        .then(r => r.json())
        .then((json) => {
            json.reverse()
            this.setState({
                posts: json
            })
        })
    }

    mapAllPosts = () => {
        return this.state.posts.map((post) => {
            return <Post key={post.id} post={post} addReaction={this.addReaction} />
        })
    }

    render() {
        return (
            <div>
                post container
                {this.mapAllPosts()}
            </div>
        )
    }

}

export default PostContainer 