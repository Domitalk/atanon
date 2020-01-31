import React, { useState, useEffect } from 'react'
import Post from '../components/Post'
import { makeStyles } from '@material-ui/core/styles';
import Grid from '@material-ui/core/Grid';

const useStyles = makeStyles(theme => ({
    root: {
      flexGrow: 1,
    },
    paper: {
      padding: theme.spacing(2),
      textAlign: 'center',
      color: theme.palette.text.secondary,
    },
  }));

const PostContainer = () => {
    const classes = useStyles();

    const [posts, setPosts] = useState([])

    const [isFetching, setIsFetching] = useState(false)

    const addReaction = (newComment) => {
        fetch(`http://localhost:4000/reactions`, {
            method: 'POST', 
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(newComment)
        })
        .then(r => r.json())
        .then((updatedPost) => {
            // console.log("adding reaction trigger")
            let index = posts.findIndex(post => post.id === updatedPost.id)
            setPosts([...posts.slice(0, index), updatedPost, ...posts.slice(index + 1)])
        })
    }

    useEffect(() => {
        fetch('http://localhost:4000/posts')
        .then(r => r.json())
        .then((json) => {
            // json.reverse()
            setPosts(json)
            // console.log("use effect")
        })
    }, [])

    useEffect(() => {
        window.addEventListener('scroll', handleScroll);
        return () => window.removeEventListener('scroll', handleScroll);
    }, [])

    useEffect(() => {
        if (!isFetching) return; 
        fetchMorePosts()
    }, [isFetching])

    const fetchMorePosts = () => {
        console.log("fetchmoreposts")
        setTimeout(() => {
            fetch(`http://localhost:4000/posts/${posts[posts.length - 1].id}`)
            .then(r => r.json())
            .then((json) => {
                // console.log(json)
                setPosts([
                    ...posts,
                    ...json
                ])
            })

            // fetch more and setPosts 

            setIsFetching(false)
        }, 2000)
    }

    function handleScroll() {
        if (window.innerHeight + document.documentElement.scrollTop !== document.documentElement.offsetHeight) return;
        setIsFetching(true);
      }

    const mapAllPosts = () => {
        return posts.map((post) => {
            return (
                <Grid item xs={12} sm={6} md={4} lg={4} >
                    <Post className={classes.paper} key={post.id} post={post} addReaction={addReaction} />
                </Grid>
            )
        })
    }

    return (
        <div className={classes.root}>
            <Grid container spacing={3}>
                {mapAllPosts()}
            </Grid>
            {isFetching && 'Grabbing moar kittens...'}
        </div>
    )

}

export default PostContainer 
