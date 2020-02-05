import React from 'react'
import { makeStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardActionArea from '@material-ui/core/CardActionArea';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import CardMedia from '@material-ui/core/CardMedia';
import Button from '@material-ui/core/Button';
import Slide from '@material-ui/core/Slide';

import cx from 'clsx';
import Box from '@material-ui/core/Box';
import { useCoverCardMediaStyles } from '@mui-treasury/styles/cardMedia/cover';
// import { useLightTopShadowStyles } from '@mui-treasury/styles/shadow/lightTop';
import { useBouncyShadowStyles } from "@mui-treasury/styles/shadow/bouncy";

const useStyles = makeStyles((theme) => ({
    root: {
      maxWidth: 304,
      margin: 'auto',
      borderRadius: 10,
      position: 'relative',
    },
    content: {
      padding: 24,
    },
    title: {
      color: '#fff',
      letterSpacing: '2px',
      textShadow: "#260C0C 1px 0 10px", 
    },
    likes: {
        color: '#fff',
        letterSpacing: '2px',
        textShadow: "#260C0C 1px 0 10px", 
    },
    
  }));


const Post = (props) => {


    
    const styles = useStyles();
    const mediaStyles = useCoverCardMediaStyles();
    const shadowStyles = useBouncyShadowStyles();
    const [checked, setChecked] = React.useState(false);
    const [emotion, setEmotion] = React.useState('')

    const flashAfter = () => {
        setChecked(prev => !prev);
        setTimeout(() => { setChecked(prev => !prev) }, 2000)
    }

    // create a reaction 
    const handleClick = (number) => {
        // console.log(number)
        // setEmotion(number)

        switch (number) {
            case 1:
                // setEmotion('❤️')
                // setEmotion("https://s3.amazonaws.com/pix.iemoji.com/images/emoji/apple/ios-12/256/smiling-face-with-heart-eyes.png")
            case 2: 
                // setEmotion('😊')
                // setEmotion('https://s3.amazonaws.com/pix.iemoji.com/images/emoji/apple/ios-12/256/smiling-face-with-open-mouth-and-smiling-eyes.png')
            case 3: 
                // setEmotion('😔')
                // setEmotion("https://s3.amazonaws.com/pix.iemoji.com/images/emoji/apple/ios-12/256/crying-face.png")
            case 4: 
                // setEmotion('😠')
                // setEmotion("https://s3.amazonaws.com/pix.iemoji.com/images/emoji/apple/ios-12/256/angry-face.png")
        }


        if (props.post.id) {
            props.addReaction({
                post_id: props.post.id, 
                rtype: number
            })
            flashAfter()
        }
    }

    const returnFlash = () => {
        return (
            <Slide direction="up" in={checked} mountOnEnter unmountOnExit>
                <span>{emotion}</span>
            </Slide> 
        )
    }


    return (
        <Card variant="outlined"  className={cx(styles.root, shadowStyles.root)}>
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
                        {/* {returnFlash()}   */}

                    </Box>
                </CardContent>
            </CardActionArea>
            <CardActions className="reactionBox" >
                <Button variant={'outlined'} color={'secondary'} className="order" value="1" size="small" name="1" onClick={() => handleClick(1)}>
                    <span className={styles.likes}>{props.post.heart}</span> ❤️
                </Button>
                <Button variant={'outlined'} color={'secondary'} className="order" size="small" name="2" onClick={() => handleClick(2)}>
                <span className={styles.likes}>{props.post.smile}</span> 😊
                </Button>
                <Button variant={'outlined'} color={'secondary'} className="order" size="small" name="3" onClick={() => handleClick(3)}>
                <span className={styles.likes}>{props.post.sad}</span> 😔
                </Button>
                <Button variant={'outlined'} color={'secondary'} className="order" size="small" name="4" onClick={() => handleClick(4)}>
                <span className={styles.likes}>{props.post.angry}</span> 😠
                </Button>
            </CardActions> 
        </Card> 

    )
    
}

export default Post 