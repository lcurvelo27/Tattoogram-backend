import React from 'react'
import { Link } from 'react-router-dom'
import { textDecoration, wrapper } from './NavbarStyle'

let Navbar = (props) => {
    return(
        <div className={wrapper}>
            <div style={{height: '30px'}}>
                { !props.home ?
                <Link to='/edit' className={textDecoration} key='edit'>Home</Link>
                :
                <Link to='/' className={textDecoration} key='home'>Home</Link>
                }
            </div>
            <div style={{height: '30px'}}>
                { !props.home ?
                <a href='https://lcurvelo.auth0.com/v2/logout?returnTo=http%3A%2F%2Flocalhost:3000/#/' className={textDecoration} key='logout'>Logout</a>
                :
                <a href='http://localhost:3005/login' className={textDecoration} key='login'>Login</a>
                }
            </div>
        </div>
    )
}

export default Navbar