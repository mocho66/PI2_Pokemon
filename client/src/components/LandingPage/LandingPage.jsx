import React from 'react';
import './LandingPage.css'
import {Link} from 'react-router-dom';


export default function LandingPage () {
    return <div>
        <Link to='/home'>
            <h3>Welcome to Pokemon World</h3>
        </Link>
    </div>
}