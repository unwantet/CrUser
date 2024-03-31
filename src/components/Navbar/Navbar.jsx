import React from 'react'

import './Navbar.css'

function Navbar({usersLength}) {
    
    return (
        <>
        <div className='navbar'>
            <div className="navbar-container ">
                <h1 className='navbar-logo'>User creator</h1>
                <h3 className='navbar-counter'>{usersLength > 0 ? `You have: ${usersLength}` : `Empty users 🥲`}</h3>
            </div>
        </div>            
        </>
    )
}

export default Navbar;