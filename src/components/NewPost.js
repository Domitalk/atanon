import React, { useState, useEffect } from 'react'
import Post from '../components/Post'



const NewPost = (props) => {
    // controlled form fields
    const [image_url, setImage_url] = useState("")
    const [comment, setComment] = useState("")
    // object to be sent to front of main state so image shows up immediately
    let post = {
        image_url, 
        comment
    }
    // controlled form handler
    const handleChange = (event) => {
        if (event.target.name === "image_url") {
            setImage_url(event.target.value)
        } else if (event.target.name === "comment") {
            setComment(event.target.value)
        }
    }
    // fetch to create new post
    const handleSubmit = (event) => {
        event.preventDefault()
        // console.log(event)
        // for some reason the upload widget is setting off a submit so check for fields
        if (comment.length > 1 && image_url.length > 1) {
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
                // console.log("after post json", json)
                props.addPostToFrontOfArray(json)
                // redirect to main page when upload finished
                props.history.push('/');
            })
        }
    }
    // image upload widget
    let widget = window.cloudinary.createUploadWidget({ 
        cloudName: "dwazq8zps", 
        uploadPreset: "zvziodpl" }, 
        (error, result) => { 
            // console.log("result event", result)
            // console.log("error event", error)
            checkUploadResult(result, error)
        });
    // to render the widget 
    const showWidget = () => {
        widget.open()
    }
    // a check on whether the widget uploaded image
    const checkUploadResult = (resultEvent, errorEvent) => {
        if (resultEvent.event === 'success') {
            console.log("photo url", resultEvent.info.secure_url)
            setImage_url(`${resultEvent.info.secure_url}`)
        }
        // use the hook to setImage_url 
    }

    return(
        <div className="spaced">
            <br></br>
            <h2>Preview</h2>
            <Post post={post} /> 

            <form onSubmit={handleSubmit}>
                <h3>Image URL </h3>
                <input type="url" name="image_url" value={image_url} onChange={handleChange} />
                <h3>Or Upload</h3>
                <button onClick={showWidget}>Upload Your Own Photo</button>
                <h3>Comment</h3>
                <textarea name="comment" value={comment} onChange={handleChange} />
                <br></br>
                <input type="submit" />
            </form>
        </div>
    )

}

export default NewPost

