import React from 'react'
import Post from '../components/Post'

class PostContainer extends React.Component {
    state = {
        posts: []
    }

    componentDidMount() {
        fetch('http://localhost:4000/posts')
        .then(r => r.json())
        .then((json) => {
            // console.log(json)
            this.setState({
                posts: json
            })
        })
    }

    mapAllPosts = () => {
        return this.state.posts.map((post) => {
            return <Post key={post.id} post={post} />
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