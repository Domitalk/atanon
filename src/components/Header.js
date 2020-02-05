import React from 'react'
import { Link } from 'react-router-dom'
import Button from '@material-ui/core/Button';
import Menu from '@material-ui/core/Menu';
import MenuItem from '@material-ui/core/MenuItem';
import { createMuiTheme, ThemeProvider } from '@material-ui/core/styles';
import Typography from '@material-ui/core/Typography';
import { useGradientBtnStyles } from '@mui-treasury/styles/button/gradient';

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
    };

    return (
        <div  className="header" position="fixed"  >
            <Button classes={styles} variant={'outlined'} color={'primary'} className="logo" aria-controls="simple-menu" aria-haspopup="true" onClick={handleClick} >
                <ThemeProvider  theme={theme}>
                    <Link exact to="/atanon" style={{ textDecoration: 'inherit', color: 'inherit'}}>
                        <Typography>@ANON</Typography>
                    </Link>
                </ThemeProvider>
            </Button>
            {/* <Menu
                id="simple-menu"
                anchorEl={anchorEl}
                keepMounted
                open={Boolean(anchorEl)}
                onClose={handleClose}
                
            >
            <MenuItem onClick={handleClose}><NavLink  
                style={{
                    textDecoration: "non"
                }} 
                activeStyle={{
                    textDecoration: "none",
                    fontWeight: "bold",
                    color: "black"
                }} exact to="/atanon/"> HOME 
            </NavLink></MenuItem>
            <MenuItem onClick={handleClose}><NavLink 
                style={{
                    textDecoration: "non"
                }}
                activeStyle={{
                    textDecoration: "none",
                    fontWeight: "bold",
                    color: "black"
                }}
                exact to="/atanon/post"> UPLOAD 
            </NavLink></MenuItem> */}
            {/* </Menu> */}
        </div>
    )

}

export default Header 