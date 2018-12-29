import React from 'react'
import { Link } from 'react-router-dom'
import { textDecoration, wrapper } from './NavbarStyle'

let Navbar = (props) => {
    console.log(process.env)
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
                <a href={process.env.REACT_APP_LOGOUT} className={textDecoration} key='logout'>Logout</a>
                :
                <a href={process.env.REACT_APP_LOGIN} className={textDecoration} key='login'>Login</a>
                }
            </div>
        </div>
    )
}

export default Navbar