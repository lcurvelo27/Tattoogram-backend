import React, { Component } from 'react'
import Navbar from '../Navbar/Navbar'
import { socialMediaGrid, footer, applyButton, splash, container } from './HomeStyle'
import { Link } from 'react-router-dom'

class Home extends Component {
    render(){
        return(
            <div style={{width: '100%'}}>
                <Navbar home={true}/>
                <div className={splash}>
                </div>
                <div className={container}>
                    <h1 style={{fontSize: '3.8rem'}}>Partner with Tattoogram!</h1> 
                    <p>Welcome! Thank you so much for your interest in partnering with us. <br/><br/> Our mission is to showcase a thoughtfully curated selection of brands for our urban customer, so we're looking for partners who share in our passion and uphold our standards for quality products and experiences. 
                    <br/><br/> Think we're a good match? Applications are coming soon!</p>
                </div>
                <div className={footer}>
                    <h3>Follow Us</h3>
                    <div className={socialMediaGrid}> 
                        <i className="fab fa-twitter"></i>
                        <i className="fab fa-instagram"></i>
                        <i className="fab fa-facebook-f"></i>
                    </div>
                </div>
            </div>
        )
    }
}

export default Home

