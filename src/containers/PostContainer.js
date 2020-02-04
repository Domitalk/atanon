import React, { useState, useEffect } from 'react'
import Post from '../components/Post'
import { makeStyles } from '@material-ui/core/styles';
import Grid from '@material-ui/core/Grid';
import CircularProgress from '@material-ui/core/CircularProgress';
import InfiniteScroll from 'react-infinite-scroller';

const useStyles = makeStyles(theme => ({
    root: {
      flexGrow: 1,
      spacing: 8,
    },
    paper: {
      padding: theme.spacing(2),
      textAlign: 'center',
      color: theme.palette.text.secondary,
    },
    progressRoot: {
        width: '100%',
        '& > * + *': {
          marginTop: theme.spacing(2),
        },
      },
  }));

const PostContainer = (props) => {
    const classes = useStyles();

    const [posts, setPosts] = useState([])
    
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

    useEffect(() => {
        fetch('https://atanon-api.herokuapp.com/posts')
        .then(r => r.json())
        .then((json) => {
            setPosts(json)
        })
    }, [])

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


    const mapAllPosts = () => {
        return posts.map((post) => {
            return (
                <Grid item xs={12} sm={6} md={4} lg={4}  >
                    <Post className={classes.paper} key={post.id} post={post} addReaction={addReaction} />
                </Grid>
            )
        })
    }

    const addPostToFrontOfArray = (newPost) => {
        setPosts([
            newPost,
            ...posts
        ])
    }

    return (
        <div className={classes.root} className="spaced" >

            <InfiniteScroll
                    pageStart={0}
                    loadMore={fetchMorePosts}
                    hasMore={true || false}
                    loader={<div className="loader" key={0}> <CircularProgress /></div>}
                    useWindow={false}
            >
                <Grid container spacing={4} >
                    {mapAllPosts()}
                </Grid>
            </InfiniteScroll>

        </div>
    )

}

export default PostContainer 
