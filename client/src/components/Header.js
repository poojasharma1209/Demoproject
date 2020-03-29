import React from 'react';
import { Link } from 'react-router-dom';
import GoogleAuth from './GoogleAuth';

const Header = () => {
    return (
        <div>
             <GoogleAuth />
            <span style={{margin: '100px'}}><Link to='/'>Streamy</Link></span>
            <span><Link to='/'>All Streams</Link></span>
        </div>
    )
}

export default Header;