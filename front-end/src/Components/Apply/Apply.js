import React, { Component } from 'react'
import Navbar from '../Navbar/Navbar'
import { container } from './ApplyStyle'

const Apply = () => {
    return (
        <div>
            <Navbar home={true}/>
            <div className={container}>
                <img src={require('../../utils/images/underConstruction.png')} alt="under construction" width='500'/>
                <p>Ooops.. Sorry, the application process is under maitenance. Please check back at a later time.</p>
            </div>
        </div>
    )
}

export default Apply