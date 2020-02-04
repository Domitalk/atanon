import React from 'react'
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
    // render all the items in posts 
    const mapAllPosts = () => {
        return props.posts.map((post) => {
            return (
                <Grid item xs={12} sm={6} md={4} lg={4}  >
                    <Post className={classes.paper} key={post.id} post={post} addReaction={props.addReaction}  />
                </Grid>
            )
        })
    }

    return (
        <div className={classes.root} className="spaced" >
            <InfiniteScroll
                    pageStart={0}
                    loadMore={props.fetchMorePosts}
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
