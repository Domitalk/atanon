import React, { useState, useEffect } from 'react'

const NewPost = (props) => {

    const [image_url, setImage_url] = useState("")
    const [comment, setComment] = useState("")

    const handleChange = (event) => {
        if (event.target.name === "image_url") {
            setImage_url(event.target.value)
        } else if (event.target.name === "comment") {
            setComment(event.target.value)
        }
    }

    const handleSubmit = (event) => {
        event.preventDefault()
        fetch('http://localhost:4000/posts', {
            method: "POST",
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({
                image_url,
                comment
            })
        })
        .then(r => r.json())
        .then((json) => {
            setImage_url("")
            setComment("")
            console.log("create new post")
        })
    }

    return(
        <div>
            <form onSubmit={handleSubmit}>
                <input name="image_url" value={image_url} onChange={handleChange} />
                <input name="comment" value={comment} onChange={handleChange} />
                <input type="submit" />
            </form>
        </div>
    )

}

export default NewPost

