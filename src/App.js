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

import { useSearchInputStyles } from '@mui-treasury/styles/input/search';
import Search from '@material-ui/icons/Search';
import InputBase from '@material-ui/core/InputBase';







const useStyles = makeStyles(theme => ({
  root: {
    position: 'fixed',
    zIndex: 1,
    padding: '2px 4px',
    display: 'flex',
    alignItems: 'center',
    bottom: '3vh',
    margin: '0 auto',
    right: '20vw', 
  },
  
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
  
  const [showSearch, setShowSearch] = useState(false) 

  const [searchTerms, setSearchTerms] = useState("")

  const styles = useSearchInputStyles();

  const [canFetch, setCanFetch] = useState(true)


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
    if (posts.length > 0 && canFetch) {
        setTimeout(() => {
            fetch(`https://atanon-api.herokuapp.com/posts/${posts[posts.length - 1].id}`)
            .then(r => r.json())
            .then((json) => {
              if (json.length > 0) {
                setPosts([
                    ...posts,
                    ...json
                ])
              } else {
                setCanFetch(false)
              }
            })
        }, 1500)
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

  const handleSearchChange = (event) => {
    setSearchTerms(event.target.value)
  }

  const filteredPosts = () => {
    // let tempposts = [...posts]

    // check to see if search field is relevant 
    if (searchTerms.length > 2) {
      setCanFetch(false)
      return posts.filter(post => {
        let searchable = false 
        if(post.id) {
          Object.keys(post.stags).forEach(stagname => {
            if(stagname.toLowerCase().includes(searchTerms.toLowerCase())) {
              searchable = true 
            }
        })
        if (searchable) {
            return true 
        } else {
            return false
        }
        }
      })

    } else {
      setCanFetch(true)
      return posts 
    }
    // apply search 
    // console.log(tempposts)
    // return tempposts 
  }

  const clearSearchBar = () => {
    setSearchTerms("")
    setShowSearch(false)
  }

  const handleAddAfterSearch = () => {
    setSearchTerms("")
    setShowSearch(false)
  }

  return (
    <Router>
      <div className="App" >
        <Header clearSearchBar={clearSearchBar} setShowSearch={setShowSearch} showSearch={showSearch} />
        {showSearch? 
        <div className={classes.root}>
          <InputBase
            classes={styles}
            placeholder={'Search...'}
            startAdornment={<Search />}
            value={searchTerms} 
            onChange={handleSearchChange}
          />
        </div>
        // <div className={classes.root}><TextField  fullWidth value={searchTerms} onChange={handleSearchChange} variant="outlined"/><SearchIcon/></div> 
        : null}
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
                posts={filteredPosts()} 
                fetchMorePosts={fetchMorePosts}
                addReaction={addReaction}
                addTagToPost={addTagToPost}
                canFetch={canFetch}
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
        <Fab onClick={handleAddAfterSearch} classes={chubbyStyles}  aria-label="add" className={classes.fabButton}>
          <NavLink exact to="/atanon/post" style={{ textDecoration: 'inherit', color: 'inherit'}} > 
            <AddIcon  /> 
          </NavLink>
        </Fab>
      </div>
    </Router>
  );
}

export default App;
