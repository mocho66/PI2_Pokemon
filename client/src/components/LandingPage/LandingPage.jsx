import React from 'react';
import {Link} from 'react-router-dom';
import './LandingPage.css'


export default function LandingPage () {
    return <div className="background">
        <div className="containerButton">
            <Link to = "/home">
                <button className="button"> GO! </button>
            </Link>
        </div>
        <div className="containerBar">
            <h4 className="Text">Developed by Adrian Quintana</h4>
            <div className="containerIcon">
                <a href="https://github.com/mocho66" >
                    <button className="Git" />
                </a>
                <a href="www.linkedin.com/in/radrianquintana" >
                    <button className="LinkedIn" />
                </a>
                <a href="https://wa.me/5493816242392" >
                    <button className="Wap" />
                </a>
            </div>
        </div>
    </div> 
}