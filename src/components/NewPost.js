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
        fetch('https://atanon-api.herokuapp.com/posts', {
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
            // console.log("create new post")
        })
    }

    let widget = window.cloudinary.createUploadWidget({ 
        cloudName: "demo", 
        uploadPreset: "preset1" }, 
        (error, result) => { });
    
    const showWidget = () => {
        widget.open()
    }

    return(
        <div className="spaced">
            <br>
            </br>

            <form onSubmit={handleSubmit}>
                <h3>Image URL </h3>
                <input name="image_url" value={image_url} onChange={handleChange} />
                <h3>Or Upload</h3>
                <button onClick={showWidget}>Upload Your Own Photo</button>
                <h3>Comment</h3>
                <input name="comment" value={comment} onChange={handleChange} />
                <br></br>
                <input type="submit" />
            </form>
        </div>
    )

}

export default NewPost

