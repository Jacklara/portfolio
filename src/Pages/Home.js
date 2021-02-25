import '../App.css';
import React, {useState} from 'react';
import Footer from '../components/Footer/Footer'
import About from '../Pages/About';
import Portfolio from './Portfolio';
import Form from '../components/Form/Form';
import ScrollArrow from '../components/ScrollArrow/ScrollArrow';
import Head from '../components/Head/Head';
import Sidebar from '../components/Sidebar/Sidebar';
import Navbar from '../components/Navbar/Navbar';
import { SiHtml5 } from 'react-icons/si';
import { SiCss3 } from 'react-icons/si';
import { SiJavascript } from 'react-icons/si';
import { SiReact } from 'react-icons/si';
import { SiNodeDotJs } from 'react-icons/si';
import { ArrowForward, ArrowRight, Button } from '../components/PageButton/PageButton';

const Home = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggle = () => {
      setIsOpen(!isOpen)

  };

  const [hover, setHover] = useState(false);

  const onHover = () => {
    setHover(!hover);
  };

return (
  <>
      <div className="App">
        <section className="home-container1 home-image">
        <Sidebar isOpen={isOpen} toggle={toggle} />
        <Navbar toggle={toggle} />
          <ScrollArrow />
        </section>

        <section className="home-container2 home-image">
          <About />
        </section>

        <section className="home-container2 home-image">
          <Portfolio />
        </section>

        <section className="home-container2 home-image">
          <Head 
            Head="Skills"
          />
          <ul>
            <li><SiHtml5 /> HTML</li>
            <li><SiCss3 /> CSS</li>
            <li><SiJavascript /> JavaScript</li>
            <li><SiNodeDotJs /> Node JS</li>
            <li><SiReact /> React</li>
          </ul>
          <Button 
                  to='resume'
                  onMouseEnter={onHover}
                  onMouseLeave={onHover}
                  primary='true'
                  dark='true'
                >
                  Resume {hover ? <ArrowForward /> : <ArrowRight />}
          </Button >
        </section>

        <section className="home-container2 home-image">
          <Head 
            Head="contact me"
          />
          <Form />
          <Footer />
        </section>
      </div>
  </>
);
}

export default Home;
