import React from 'react'
// import Reaction from './Reaction'
import { makeStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardActionArea from '@material-ui/core/CardActionArea';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import CardMedia from '@material-ui/core/CardMedia';
import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';

import cx from 'clsx';
import Box from '@material-ui/core/Box';
import { useCoverCardMediaStyles } from '@mui-treasury/styles/cardMedia/cover';
import { useLightTopShadowStyles } from '@mui-treasury/styles/shadow/lightTop';

const useStyles = makeStyles(() => ({
    root: {
      maxWidth: 304,
      margin: 'auto',
      borderRadius: 0,
      position: 'relative',
    },
    content: {
      padding: 24,
    },
    cta: {
      display: 'block',
      textAlign: 'center',
      color: '#fff',
      letterSpacing: '3px',
      fontWeight: 200,
      fontSize: 12,
    },
    title: {
      color: '#fff',
      letterSpacing: '2px',
    },
  }));


const Post = (props) => {

    const styles = useStyles();
    const mediaStyles = useCoverCardMediaStyles();
    const shadowStyles = useLightTopShadowStyles();

    const handleClick = (number) => {
        console.log(number)

        props.addReaction({
            post_id: props.post.id, 
            rtype: number
        })

    }

    return (
        <Card className={cx(styles.root, shadowStyles.root)}>
            <CardMedia
                classes={mediaStyles} 
                image={props.post.image_url}
            />
            <CardActionArea>
                <CardContent className={styles.content} >
                    <Box
                        display={'flex'}
                        flexDirection={'column'}
                        alignItems={'center'}
                        justifyContent={'center'}
                        minHeight={360}
                        color={'common.white'}
                        textAlign={'center'}
                    >
                        <h1 className={styles.title}>{props.post.comment}</h1>
                        
                        {/* <Typography variant="body2" color="textSecondary" component="p">
                            {props.post.comment}
                        </Typography> */}
                    </Box>
                </CardContent>
            </CardActionArea>
            <CardActions>
                <Button value="1" size="small" name="1" onClick={() => handleClick(1)}>
                    {props.post.heart} ❤️
                </Button>
                <Button size="small" name="2" onClick={() => handleClick(2)}>
                    {props.post.smile} 😊
                </Button>
                <Button size="small" name="3" onClick={() => handleClick(3)}>
                    {props.post.sad} 😔
                </Button>
                <Button size="small" name="4" onClick={() => handleClick(4)}>
                    {props.post.angry} 😠
                </Button>
            </CardActions> 
        </Card> 

    )
    
}

export default Post 