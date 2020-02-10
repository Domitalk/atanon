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

const useStylesStag = makeStyles(theme => ({
    margin: {
      margin: theme.spacing(1),
    }
}))

const useStylesForm = makeStyles(theme => ({
    root: {
      '& .MuiTextField-root': {
        margin: 'none', 
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

    const classesStag = useStylesStag();

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

    // flip the card back and forth so you can add tags on the back
    const handleDoubleClick = () => {
        setIsFlipped(!isFlipped)
    }

    // controlled form 
    const handleFormChange = (event) => {
        setFormField(event.target.value)
    }
    // check for 'ENTER'
    const catchReturn = (event) => {
        if (event.key === 'Enter') {
            event.preventDefault() 
            submitNewTag()
        }
    }

    // create new tag 
    const submitNewTag = (event) => {
        if (props.post.id) {
            props.addTagToPost(formField, props.post.id)
            setFormField("")
        } else {
            alert("You cannot add tags until you finish creating the post!")
        }
    }

    // show all the search tags as buttons 
    const showAllStags = () => {
        // console.log(Object.keys(props.post.stags))
        let stagkeys = Object.keys(props.post.stags)
        return stagkeys.map( key => {
            return <Button className={classesStag.margin} color='secondary' size="large" variant={'outlined'}><span className={styles.likes}>{key}</span></Button>
        })
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
                            className={classesStag.root}
                        >
                            {/* <div className={classesStag.root}> */}
                                <h3 className={styles.title}>{showAllStags()}</h3>
                            {/* </div> */}
                        </Box>
                    </CardContent>
                </CardActionArea>
                <CardActions direction='' className="reactionBox" >
                    <form className={classesForm.root} autoComplete="on" >
                        <TextField
                            label="new tag"
                            defaultValue=""
                            name="New Tag Field"
                            variant="standard"
                            color="secondary"
                            size="small"
                            onChange={handleFormChange}
                            value={formField}
                            onKeyPress={catchReturn}
                        />
                    </form>
                    <Tooltip title="Create New Tag">
                        <Button size="small" variant={'outlined'} color={'secondary'} onClick={submitNewTag}><CreateIcon color="secondary" /></Button> 
                    </Tooltip>
                </CardActions>
            </Card>
        </ReactCardFlip>

    )
}

export default Post 