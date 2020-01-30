import React, { useState, useEffect } from 'react'
import Post from '../components/Post'



const PostContainer = () => {

    const [posts, setPosts] = useState([])

    const addReaction = (newComment) => {
        // console.log(newComment)
        fetch(`http://localhost:4000/reactions`, {
            method: 'POST', 
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(newComment)
        })
        .then(r => r.json())
        .then((updatedPost) => {
            let index = posts.findIndex(post => post.id === updatedPost.id)
            setPosts([...posts.slice(0, index), updatedPost, ...posts.slice(index + 1)])
        })
    }

    useEffect(() => {
        fetch('http://localhost:4000/posts')
        .then(r => r.json())
        .then((json) => {
            json.reverse()
            setPosts(json)
        })
    })

    const mapAllPosts = () => {
        return posts.map((post) => {
            return <Post key={post.id} post={post} addReaction={addReaction} />
        })
    }

    return (
        <div>
            post container
            {mapAllPosts()}
        </div>
    )

}

export default PostContainer 
