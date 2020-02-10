import React, { useState, useEffect } from 'react'
import './App.css';
import Header from './components/Header'
import PostContainer from './containers/PostContainer'
import { BrowserRouter as Router, Route, NavLink} from 'react-router-dom'
import NewPost from './components/NewPost'
import { makeStyles } from '@material-ui/core/styles';
import { useGradientBtnStyles } from '@mui-treasury/styles/button/gradient';
import {Fade, Fab, Backdrop, Modal} from '@material-ui/core'
import AddIcon from '@material-ui/icons/Add';
import { useTagCardStyles } from '@mui-treasury/styles/cardContent/tag';

const useStyles = makeStyles(theme => ({
  fabButton: {
    position: 'fixed',
    zIndex: 1,
    bottom: '3vh',
    right: '4vw',
    margin: '0 auto',
  },
  modal: {
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
  },
  paper: {
    backgroundColor: theme.palette.background.paper,
    border: '2px solid #ff8a65',
    boxShadow: theme.shadows[0],
    padding: theme.spacing(2, 4, 3),
    outline: 0
  },
}));

function App(props) {

  // make the button rounded gradient
  const chubbyStyles = useGradientBtnStyles({ chubby: true });

  // variable for introduction modal 
  const [open, setOpen] = useState(true);
  const classes = useStyles();

  // main collection of posts
  const [posts, setPosts] = useState([])

  // pass down method in order to create reaction 
  const addReaction = (newComment) => {
    fetch(`https://atanon-api.herokuapp.com/reactions`, {
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

  // componentDidMount, fetch of data for initial rendering on homepage
  useEffect(() => {
    // console.log("Startup")
    fetch('https://atanon-api.herokuapp.com/posts')
    .then(r => r.json())
    .then((json) => {
        setPosts(json)
    })
  }, [])
  
  // infinitescroll fetch more posts, pass down to PostContainer
  const fetchMorePosts = () => {
    // console.log("fetchmoreposts")
    if (posts.length > 0) {
        setTimeout(() => {
            fetch(`https://atanon-api.herokuapp.com/posts/${posts[posts.length - 1].id}`)
            .then(r => r.json())
            .then((json) => {
                console.log(json)
                setPosts([
                    ...posts,
                    ...json
                ])
            })
        }, 2000)
    }   
  }
  // pass down to NewPost
  // when creating new post, add to front of collection so it renders first
  const addPostToFrontOfArray = (newPost) => {
    setPosts([
        newPost,
        ...posts
    ])
  }

  // handle closing introduction modal 
  const handleClose = () => {
    setOpen(false);
  };

  // Add a tag to a Post 
  const addTagToPost = (newTag, post_id) => {
    fetch(`https://atanon-api.herokuapp.com/stags`, {
      method: 'POST', 
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify({
        post_id: post_id, 
        stagname: newTag
      })
    })
    .then(r => r.json())
    .then((updatedPost) => {
      let index = posts.findIndex(post => post.id === updatedPost.id)
      setPosts([...posts.slice(0, index), updatedPost, ...posts.slice(index + 1)])
    })
  }

  return (
    <Router>
      <div className="App" >
        <Header />
        <Modal
          aria-labelledby="transition-modal-title"
          aria-describedby="transition-modal-description"
          className={classes.modal}
          open={open}
          onClose={handleClose}
          closeAfterTransition
          BackdropComponent={Backdrop}
          BackdropProps={{
            timeout: 500,
          }}
        >
          <Fade in={open}>
            <div className={classes.paper} onClick={handleClose} >
              <h2 id="transition-modal-title">Welcome to @ANON</h2>
              <p id="transition-modal-description">Where you can post and react anonymously</p>
              <p id="transition-modal-description">If you double click/tap on a post you can add tags</p>

            </div>
          </Fade>
        </Modal>
        <Route 
          exact
          path='/(|atanon)' 
          render={(props) => {
            return (
              <PostContainer {...props} 
                posts={posts} 
                fetchMorePosts={fetchMorePosts}
                addReaction={addReaction}
                addTagToPost={addTagToPost}
              />
            )}}
        />
        <Route 
          exact path='/atanon/post' 
          render={(props) => {
            return (
              <NewPost {...props} 
                addPostToFrontOfArray={addPostToFrontOfArray}
              /> 
            )
          }}
        />
        <Fab classes={chubbyStyles}  aria-label="add" className={classes.fabButton}>
          <NavLink exact to="/atanon/post" style={{ textDecoration: 'inherit', color: 'inherit'}} > 
            <AddIcon  /> 
          </NavLink>
        </Fab>
      </div>
    </Router>
  );
}

export default App;
