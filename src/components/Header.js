import React from 'react'
import { NavLink } from 'react-router-dom'

function Header (props) {

    return (
        <div>
            <NavLink 
                exact 
                to="/"
            > HOME 
            </NavLink>

            <NavLink 
                exact 
                to="/post"
            > Upload 
            </NavLink>
        </div>
    )

}

export default Header 