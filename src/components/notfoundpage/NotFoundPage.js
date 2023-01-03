import React from "react";
import { Link } from 'react-router-dom'
import notapageimage from './pipa.jpg'

import './NotFoundPage.css'

const NotFound = () => {
    return (
        <div className="not-found-box">
            <img className="notapage" src={notapageimage} alt=" "></img>
            <h1 className="title">404 Not Found</h1>
            <p className="text">Oops! You seem to be lost.</p>
            <p className="tryagain">Please try again here:</p>
            <Link className="back" to='/artworks'>Artworks</Link>
        </div>
    )
}

export default NotFound