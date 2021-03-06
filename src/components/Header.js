import React from 'react'
import { Link, NavLink } from 'react-router-dom'
import Button from '@material-ui/core/Button';
import Menu from '@material-ui/core/Menu';
import MenuItem from '@material-ui/core/MenuItem';
import { createMuiTheme, ThemeProvider } from '@material-ui/core/styles';
import Typography from '@material-ui/core/Typography';
import { useGradientBtnStyles } from '@mui-treasury/styles/button/gradient';
import Fade from '@material-ui/core/Fade';


function Header (props) {
    const styles = useGradientBtnStyles();

    const theme = createMuiTheme({
        typography: {
          // Tell Material-UI what the font-size on the html element is.
          htmlFontSize: 8,
        },
    });

    // toggle header menu 
    const [anchorEl, setAnchorEl] = React.useState(null);
    
    const handleClick = event => {
        setAnchorEl(event.currentTarget);
    };
    
    const handleClose = () => {
        setAnchorEl(null);
        props.clearSearchBar()
    };

    const showSearchBar = () => {
        // console.log("toggle search bar")
        props.setShowSearch(!props.showSearch)
        // console.log(props.showSearch)
        setAnchorEl(null);
    }

    return (
        <div  className="header" position="fixed"  >
            <Button onClick={handleClick} classes={styles} variant={'outlined'} color={'primary'} className="logo" aria-controls="simple-menu" aria-haspopup="true"  >
                <ThemeProvider  theme={theme}>
                    {/* <Link exact to="/atanon" style={{ textDecoration: 'inherit', color: 'inherit'}}> */}
                        <Typography>@ANON</Typography>
                    {/* </Link> */}
                </ThemeProvider>
            </Button>
            <Menu
                anchorEl={anchorEl}
                keepMounted
                open={Boolean(anchorEl)}
                onClose={handleClose}
                TransitionComponent={Fade}
            >
            <MenuItem onClick={handleClose}><NavLink  
                style={{
                    textDecoration: "none",
                    fontWeight: "bold",
                    color: "#F44A26"
                }} 
                activeStyle={{
                    textDecoration: "none",
                    fontWeight: "bold",
                    color: "#F44A26"
                }} exact to="/atanon/"> Home
            </NavLink></MenuItem>
            <MenuItem onClick={handleClose}>
                <NavLink 
                    style={{
                        textDecoration: "none",
                        fontWeight: "bold",
                        color: "#F44A26"
                    }}
                    activeStyle={{
                        textDecoration: "none",
                        fontWeight: "bold",
                        color: "#F44A26"
                    }}
                    exact to="/atanon/post"> 
                    Upload 
                </NavLink>
            </MenuItem>
            <MenuItem onClick={showSearchBar} >
                <NavLink 
                    style={{
                        textDecoration: "none",
                        fontWeight: "bold",
                        color: "#F44A26"
                    }}
                    to="/atanon">
                    Search
                </NavLink>
            </MenuItem>
            </Menu>
        </div>
    )

}

export default Header 