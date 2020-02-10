import React, { useState } from 'react'
import { makeStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardActionArea from '@material-ui/core/CardActionArea';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import CardMedia from '@material-ui/core/CardMedia';
import Button from '@material-ui/core/Button';
import cx from 'clsx';
import Box from '@material-ui/core/Box';
import { useCoverCardMediaStyles } from '@mui-treasury/styles/cardMedia/cover';
import { useBouncyShadowStyles } from "@mui-treasury/styles/shadow/bouncy";
import ReactCardFlip from 'react-card-flip';
import Tooltip from '@material-ui/core/Tooltip';


import TextField from '@material-ui/core/TextField';
import CreateIcon from '@material-ui/icons/Create';


const useStylesForm = makeStyles(theme => ({
    root: {
      '& .MuiTextField-root': {
        margin: theme.spacing(1),
        width: 200,
      },
    },
  }));

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

    const [isFlipped, setIsFlipped] = useState(false)

    const classesForm = useStylesForm();

    const [formField, setFormField] = useState("")

    // create a reaction 
    const handleClick = (number) => {
        // console.log(number)
        // setEmotion(number)
        if (props.post.id) {
            props.addReaction({
                post_id: props.post.id, 
                rtype: number
            })
        }
    }

    const handleDoubleClick = () => {
        setIsFlipped(!isFlipped)
    }

    const handleFormChange = (event) => {
        setFormField(event.target.value)
    }

    const submitNewTag = (event) => {
        if (props.post.id) {
            props.addTagToPost(formField, props.post.id)
            setFormField("")
        } else {
            alert("You cannot add tags until you finish creating the post!")
        }
    }

    return (
        <ReactCardFlip isFlipped={isFlipped} flipDirection="horizontal" infinite="true" >
            <Card key="front" variant="outlined"  className={cx(styles.root, shadowStyles.root)}>
                <CardMedia 
                    classes={mediaStyles} 
                    image={props.post.image_url}
                />
                <CardActionArea>
                    <CardContent onDoubleClick={handleDoubleClick} className={styles.content} >
                        
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
        
            <Card key="back" className={cx(styles.root, shadowStyles.root)}>
                <CardMedia 
                    classes={mediaStyles} 
                    image={props.post.image_url}
                />
                <CardActionArea>
                    <CardContent onDoubleClick={handleDoubleClick} className={styles.content}>
                    <Box
                        display={'flex'}
                        flexDirection={'column'}
                        alignItems={'center'}
                        justifyContent={'center'}
                        minHeight={360}
                        color={'common.white'}
                        textAlign={'center'}
                    >
                        <h1 className={styles.title}>Tag goes here, maybe as a button</h1>
                        <form className={classesForm.root} autoComplete="on" >
                            <TextField
                                label="new tag"
                                defaultValue=""
                                variant="filled"
                                size="small"
                                onChange={handleFormChange}
                                value={formField}
                            />
                        </form>
                    </Box>

                        {/* <form className={classesForm.root} autoComplete="on">
                            <TextField
                                label="new tag"
                                defaultValue=""
                                variant="filled"
                                size="small"
                                onChange={handleFormChange}
                                value={formField}
                            />
                            {formField.length > 0 ? <Button onClick={submitNewTag}><CreateIcon color="secondary" /></Button> : null } 
                        </form> */}
                    </CardContent>
                </CardActionArea>
                <CardActions direction='' className="reactionBox" >
                    <Tooltip title="Create New Tag">
                        <Button size="small" variant={'outlined'} color={'secondary'} onClick={submitNewTag}><CreateIcon color="secondary" /></Button> 
                    </Tooltip>
                </CardActions>
            </Card>
        </ReactCardFlip>

    )
}

export default Post 