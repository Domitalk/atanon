import React from 'react'
import { makeStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardActionArea from '@material-ui/core/CardActionArea';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import CardMedia from '@material-ui/core/CardMedia';
import Button from '@material-ui/core/Button';
import Slide from '@material-ui/core/Slide';
import { SvgIcon } from '@material-ui/core';



import cx from 'clsx';
import Box from '@material-ui/core/Box';
import { useCoverCardMediaStyles } from '@mui-treasury/styles/cardMedia/cover';
import { useLightTopShadowStyles } from '@mui-treasury/styles/shadow/lightTop';

const useStyles = makeStyles((theme) => ({
    root: {
      maxWidth: 304,
      margin: 'auto',
      borderRadius: 30,
      position: 'relative',
    },
    content: {
      padding: 24,
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
    const [checked, setChecked] = React.useState(false);

    const flashAfter = () => {
        setChecked(prev => !prev);
        setTimeout(() => { setChecked(prev => !prev) }, 2000)
    }

    // create a reaction 
    const handleClick = (number) => {
        // console.log(number)
        if (props.post.id) {
            props.addReaction({
                post_id: props.post.id, 
                rtype: number
            })
        }
        flashAfter()
    }

    return (
        <Card  className={cx(styles.root, shadowStyles.root)}>
            <CardMedia
                classes={mediaStyles} 
                image={props.post.image_url}
            />
            <CardActionArea>
                <CardContent className={styles.content} >
                    <Box
                        // onClick={() => { }}
                        display={'flex'}
                        flexDirection={'column'}
                        alignItems={'center'}
                        justifyContent={'center'}
                        minHeight={360}
                        color={'common.white'}
                        textAlign={'center'}
                    >
                        <h1 className={styles.title}>{props.post.comment}</h1>
                        <Slide direction="up" in={checked} mountOnEnter unmountOnExit>
                            {/* put something to slide up and down here  */}
                        </Slide>
                    </Box>
                </CardContent>
            </CardActionArea>
            <CardActions className="reactionBox" >
                <Button className="order" value="1" size="small" name="1" onClick={() => handleClick(1)}>
                    {props.post.heart} ❤️
                </Button>
                <Button className="order" size="small" name="2" onClick={() => handleClick(2)}>
                    {props.post.smile} 😊
                </Button>
                <Button className="order" size="small" name="3" onClick={() => handleClick(3)}>
                    {props.post.sad} 😔
                </Button>
                <Button className="order" size="small" name="4" onClick={() => handleClick(4)}>
                    {props.post.angry} 😠
                </Button>
            </CardActions> 
        </Card> 

    )
    
}

export default Post 