import React, { useState, useEffect } from 'react'
import './App.css';
import Header from './components/Header'
import PostContainer from './containers/PostContainer'
import { BrowserRouter as Router, Route } from 'react-router-dom'
import NewPost from './components/NewPost'
import { makeStyles } from '@material-ui/core/styles';
import { NavLink } from 'react-router-dom'
import { useGradientBtnStyles } from '@mui-treasury/styles/button/gradient';

import Fab from '@material-ui/core/Fab';
import AddIcon from '@material-ui/icons/Add';

const useStyles = makeStyles(theme => ({
  fabButton: {
    position: 'absolute',
    zIndex: 1,
    top: '90vh',
    right: '5vh',
    margin: '0 auto',
  },
}));


function App(props) {

  const chubbyStyles = useGradientBtnStyles({ chubby: true });

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

  return (
    <Router>
      <div className="App" >
        <Header display={{ xs: 'block', sm: 'block', md: 'none', lg: 'none', xl: 'none' }} />
        <Route 
          exact path='/atanon/' 
          render={(props) => {
            return (
              <PostContainer {...props} 
                posts={posts} 
                fetchMorePosts={fetchMorePosts}
                addReaction={addReaction}
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
        <Fab classes={chubbyStyles} display={{ xs: 'block', sm: 'block', md: 'none', lg: 'none', xl: 'none' }} color="secondary.main" aria-label="add" className={classes.fabButton}>
          <NavLink exact to="/atanon/post" style={{ textDecoration: 'inherit', color: 'inherit'}} > 
            <AddIcon  /> 
          </NavLink>
        </Fab>
      </div>
    </Router>
  );
}

export default App;
