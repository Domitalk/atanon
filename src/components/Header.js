import React from 'react'
import { NavLink } from 'react-router-dom'
import Button from '@material-ui/core/Button';
import Menu from '@material-ui/core/Menu';
import MenuItem from '@material-ui/core/MenuItem';
import { createMuiTheme, ThemeProvider } from '@material-ui/core/styles';
import Typography from '@material-ui/core/Typography';


function Header (props) {

    const theme = createMuiTheme({
        typography: {
          // Tell Material-UI what the font-size on the html element is.
          htmlFontSize: 8,
        },
    });

    const [anchorEl, setAnchorEl] = React.useState(null);

    const handleClick = event => {
        setAnchorEl(event.currentTarget);
    };

    const handleClose = () => {
        setAnchorEl(null);
    };

    return (
        <div className="header" position="fixed" >
            <Button aria-controls="simple-menu" aria-haspopup="true" onClick={handleClick} >

                <ThemeProvider theme={theme}>
                    <Typography>@ANON</Typography>
                </ThemeProvider>
            </Button>
            <Menu
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
                }} exact to="/"> HOME 
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
                exact to="/post"> UPLOAD 
            </NavLink></MenuItem>
            </Menu>
        </div>
    )

}

export default Header 