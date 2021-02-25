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
const Home = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggle = () => {
      setIsOpen(!isOpen)
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
