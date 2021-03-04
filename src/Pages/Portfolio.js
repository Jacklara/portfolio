import React, { useState } from 'react';
import Card from '../components/Card/Card';
import Head from '../components/Head/Head';
import ecommerece from '../img/ecommerece.png';
import elAmigo from '../img/elAmigo.png';
import gateway from '../img/gateway.png';
import safehaven from '../img/safehaven.png';
import { ArrowForward, ArrowRight, Button } from '../components/PageButton/PageButton';
import '../components/Card/Card.css'

const Portfolio = () => {
    const [hover, setHover] = useState(false);

    const onHover = () => {
    setHover(!hover);
  };

    return (
        <div className="App">
            <section className="home-container home-image">
                <Head
                    Head ='Projects'
                    caption =  ''
                />
                <div className='port-card'>
                    <Card 
                    img={ecommerece}
                    title='eCommerece Project V2'
                    description='My second iteration of my eCommerece sight using React'
                    />
                    <Card 
                    img={elAmigo}
                    title='Reservations App'
                    description='HTML and CSS used to create a reservation form'
                    />
                    <Card 
                    img={gateway}
                    title='Gateway'
                    description='Adding semantic HTML to Gateway project'
                    />
                    <Card 
                    img={safehaven}
                    title='Safe Haven'
                    description='Group Hackathon using HTML and CSS'
                    />
                    
                </div>
                <Button 
                    to='projects'
                    onMouseEnter={onHover}
                    onMouseLeave={onHover}
                    primary='true'
                    dark='true'
                >
                    Full Portfolio {hover ? <ArrowForward /> : <ArrowRight />}
                </Button >
            </section>
        </div>
    )
}

export default Portfolio;