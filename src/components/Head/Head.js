import React from 'react';
import './Head.css'

function Head(props) {
    return (
        <div className='Head-container'>
            <h1>{props.Head}</h1>
            <h2>{props.caption}</h2>
        </div>
    )
}

export default Head;