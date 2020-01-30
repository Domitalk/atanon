import React from 'react'
import { Redirect } from 'react-router-dom'

class NewPost extends React.Component {

    state = {
        image_url: "",
        comment: ""
    }

    handleChange = (event) => {
        this.setState({
            [event.target.name]: event.target.value
        })
    }

    handleSubmit = (event) => {
        event.preventDefault()
        fetch('http://localhost:4000/posts', {
            method: "POST",
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(this.state)
        })
        .then(r => r.json())
        .then((json) => {
            // window.history.pushState("UploadFinished", "Home", "/");
            this.setState({
                image_url: "",
                comment: ""
            })
        })
    }

    render() {
        return(
            <div>
                <form onSubmit={this.handleSubmit}>
                    <input name="image_url" value={this.state.image_url} onChange={this.handleChange} />
                    <input name="comment" value={this.state.comment} onChange={this.handleChange} />
                    <input type="submit" />
                </form>
            </div>
        )
    }

}

export default NewPost