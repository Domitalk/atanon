import React, { useState } from 'react'
import Post from '../components/Post'
import Grid from '@material-ui/core/Grid';
import { makeStyles } from '@material-ui/core/styles';
import TextField from '@material-ui/core/TextField';
import Card from '@material-ui/core/Card';
import Button from '@material-ui/core/Button';
import { useGradientBtnStyles } from '@mui-treasury/styles/button/gradient';
import Box from '@material-ui/core/Box';


const useStylesButton = makeStyles(theme => ({
    root: {
      '& > *': {
        margin: theme.spacing(1),
      },
    },
  }));

const useStylesCard = makeStyles({
    root: {
      maxWidth: '70vw',
    },
  });

const useStyles = makeStyles(theme => ({
    root: {
      flexGrow: 1,
    },
}));

const useStylesForm = makeStyles(theme => ({
    root: {
      '& .MuiTextField-root': {
        margin: theme.spacing(1),
        width: '67vw'
      },
    },
  }));


const NewPost = (props) => {
    const classes = useStyles();
    const classesForm = useStylesForm();
    const classesCard = useStylesCard();
    const classesButton = useStylesButton();


    // controlled form fields
    const [image_url, setImage_url] = useState("")
    const [comment, setComment] = useState("")

    const styles = useGradientBtnStyles();


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
                props.history.push('/atanon/');
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
        <div className="spaced" className={classes.root}>
            <br></br>
            <Grid container
                direction="row"
                justify="center"
                alignItems="center"
                spacing={9}
            > 
                <Grid item>
                    <br></br>
                    <h1></h1>
                    <br></br>
                    <Post post={post} /> 
                </Grid>
                <Grid item >
                    <Card className={classesCard.root}>
                        <form className={classesForm.root} onSubmit={handleSubmit} noValidate autoComplete="off">
                            {/* <h3>Image URL </h3> */}
                            {/* <input type="url" name="image_url" value={image_url} onChange={handleChange} /> */}
                            <TextField 
                                label="Image URL"
                                type="url"
                                name="image_url"
                                value={image_url}
                                onChange={handleChange}
                                variant="filled"
                                />
                            {/* <h3>Or Upload</h3> */}
                            <TextField 
                                label="Comment"
                                multiline
                                type="text"
                                name="comment"
                                rows="5"
                                value={comment}
                                onChange={handleChange}
                                variant="filled"
                            />
                            {/* <h3>Comment</h3>
                            <textarea name="comment" value={comment} onChange={handleChange} /> */}
                            {/* <br></br> */}
                            <Box align="center" className={classesButton.root} >
                                <Button onClick={showWidget} classes={styles}>Upload Your Own Photo</Button>
                                {/* <button onClick={showWidget}>Upload Your Own Photo</button> */}
                                <Button onClick={handleSubmit} classes={styles}>Submit Your Post</Button>
                            {/* <input type="submit" /> */}
                            </Box>
                        </form>
                    </Card>
                </Grid>
            </Grid>
        </div>
    )

}

export default NewPost

