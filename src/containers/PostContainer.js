import React, { useState, useEffect } from 'react'
import Post from '../components/Post'
import { makeStyles } from '@material-ui/core/styles';
import Grid from '@material-ui/core/Grid';
import CircularProgress from '@material-ui/core/CircularProgress';

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

const PostContainer = () => {
    const classes = useStyles();

    const [posts, setPosts] = useState([])

    const [isFetching, setIsFetching] = useState(true)

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
            // console.log("adding reaction trigger")
            let index = posts.findIndex(post => post.id === updatedPost.id)
            setPosts([...posts.slice(0, index), updatedPost, ...posts.slice(index + 1)])
        })
    }

    useEffect(() => {
        fetch('https://atanon-api.herokuapp.com/posts')
        .then(r => r.json())
        .then((json) => {
            setPosts(json)
            // console.log("use effect")
            setTimeout(() => {
                setIsFetching(false)
            }, 1500)
        })
    }, [])

    useEffect(() => {
        window.addEventListener('scroll', handleScroll);
        return () => { 
            window.removeEventListener('scroll', handleScroll);
        }
    }, [])

    useEffect(() => {
        if (!isFetching) return; 
        fetchMorePosts()
    }, [isFetching])

    const fetchMorePosts = () => {
        console.log("fetchmoreposts")
        if (posts.length > 0) {
            setTimeout(() => {
                fetch(`https://atanon-api.herokuapp.com/${posts[posts.length - 1].id}`)
                .then(r => r.json())
                .then((json) => {
                    console.log(json)
                    setPosts([
                        ...posts,
                        ...json
                    ])
                    setTimeout(() => {
                        setIsFetching(false)
                    }, 1500)
                })

            }, 2000)
        }   
    }

    const handleScroll = () => {
        console.log("innerHeight", window.innerHeight)
        console.log("document.scrollTop", document.documentElement.scrollTop)
        console.log("document offsetheight", document.documentElement.offsetHeight)


        if (window.innerHeight + window.scrollTop  > document.documentElement.offsetHeight ) return;

        // if (window.innerHeight + document.documentElement.scrollTop  > document.documentElement.offsetHeight ) return;
        setIsFetching(true);
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
            ...newPost,
            ...posts
        ])
    }

    return (
        <div className={classes.root} className="spaced" >

      
                <Grid container spacing={4} >
                    {mapAllPosts()}
                </Grid>
                {isFetching && (
                <div className={classes.root}>
                    <CircularProgress />
                </div>)}

        </div>
    )

}

export default PostContainer 
