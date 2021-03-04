import React from 'react';
import './Card.css';

function Card(props) {
    return (
        <div className='card-container'>
            <img src={props.img} alt='background' className='card-img'></img>
            <h3>{props.title}</h3>
            <div className='desc'>{props.description}</div>
            
        </div>
    )
}

export default Card;