import React, {useState} from 'react';
import Head from '../components/Head/Head';
import resume from '../img/resume.png'
import Footer from '../components/Footer/Footer';
import Sidebar from '../components/Sidebar/Sidebar';
import Navbar from '../components/Navbar/Navbar';
import '../components/Card/Card.css';

const Credentials = () => {
    const [isOpen, setIsOpen] = useState(false);

    const toggle = () => {
      setIsOpen(!isOpen)
  };
    return (
        <div className="App">
            <div>
            <Sidebar isOpen={isOpen} toggle={toggle} />
            <Navbar toggle={toggle} />
                <Head
                Head ='Resume'
                caption =  ''
                />
                <img className="resume" src={resume} alt="resume"></img>
                <Footer/>
            </div>
        </div>
    )
}

export default Credentials;