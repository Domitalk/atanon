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

const useStyles = makeStyles({
    card: {
      maxWidth: 345,
      maxHeight: 400
    },
});


const Post = (props) => {

    const classes = useStyles();

    const handleClick = (event) => {

        let rtypenumber = parseInt(event.target.name)

        props.addReaction({
            post_id: props.post.id, 
            rtype: rtypenumber
        })

    }

    return (
        <Card className={classes.card}>
            <CardActionArea>
                <CardMedia
                    component="img"
                    alt=""
                    height="140"
                    image={props.post.image_url}
                />
                <CardContent>
                    <Typography variant="body2" color="textSecondary" component="p">
                        {props.post.comment}
                    </Typography>
                </CardContent>
            </CardActionArea>
            <CardActions>
                <Button size="small" color="primary" name="1" onClick={handleClick}>
                    ❤️
                </Button>
                <Button size="small" color="primary" name="2" onClick={handleClick}>
                    😊
                </Button>
                <Button size="small" color="primary" name="3" onClick={handleClick}>
                    😔
                </Button>
                <Button size="small" color="primary" name="4" onClick={handleClick}>
                    😠
                </Button>
            </CardActions> 
        </Card> 

    )
    
}

export default Post 