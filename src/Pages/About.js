import React from 'react';
import Head from '../components/Head/Head';
import '../components/Card/Card.css';
import about from '../img/about.jpg'

function About() {
    return (
        <div className="App">
            <section className="home-container home-image">
                <Head
                Head ='About Me'
                caption =  ''
                />
                <div className='about-card'>
                    <div><img src={about} alt='profile pic' className='about-pic'/></div>
                    <div>
                    <p>I have first-hand experience working in HTML, CSS, JavaScript, React and Node, building websites and SPAs, both collaboratively on a team and in solo projects. Having that experience has helped me not only further develop my skills with language but also to get a feel for working in groups in the work place. During the course of my fellowship I have come to enjoy and understand the creative aspect to the work, from executing layout to coding style. My previous experience in customer service provided me with added stakeholder communication skills, patience and empathy when working with others.</p>
                    </div>
                </div>
            </section>
        </div>
    )
}

export default About;