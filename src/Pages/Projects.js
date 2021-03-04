import React, {useState} from 'react';
import Card from '../components/Card/Card';
import Head from '../components/Head/Head';
import ecommerece from '../img/ecommerece.png';
import '../components/Card/Card.css';
import Footer from '../components/Footer/Footer';
import Sidebar from '../components/Sidebar/Sidebar';
import Navbar from '../components/Navbar/Navbar';

const Projects = () => {
    const [isOpen, setIsOpen] = useState(false);

    const toggle = () => {
        setIsOpen(!isOpen)
    };

    return (
        <div className="App">
            <div >
            <Sidebar isOpen={isOpen} toggle={toggle} />
            <Navbar toggle={toggle} />
                <Head
                    Head ='Projects'
                    caption =  ''
                />
                <div className='port-card'>
                    <Card 
                    img={ecommerece}
                    title='eCommerece Project'
                    description='E-commerce (electronic commerce) is the activity of electronically buying or selling of products on online services or over the Internet. The term was coined and first employed by Dr. Robert Jacobson, Principal Consultant to the California State Assembly'
                    />
                    <Card 
                    img={ecommerece}
                    title='eCommerece Project'
                    description='E-commerce (electronic commerce) is the activity of electronically buying or selling of products on online services or over the Internet. The term was coined and first employed by Dr. Robert Jacobson, Principal Consultant to the California State Assembly'
                    />
                    <Card 
                    img={ecommerece}
                    title='eCommerece Project'
                    description='E-commerce (electronic commerce) is the activity of electronically buying or selling of products on online services or over the Internet. The term was coined and first employed by Dr. Robert Jacobson, Principal Consultant to the California State Assembly'
                    />
                    <Card 
                    img={ecommerece}
                    title='eCommerece Project'
                    description='E-commerce (electronic commerce) is the activity of electronically buying or selling of products on online services or over the Internet. The term was coined and first employed by Dr. Robert Jacobson, Principal Consultant to the California State Assembly'
                    />
                    <Card 
                    img={ecommerece}
                    title='eCommerece Project'
                    description='E-commerce (electronic commerce) is the activity of electronically buying or selling of products on online services or over the Internet. The term was coined and first employed by Dr. Robert Jacobson, Principal Consultant to the California State Assembly'
                    />
                    <Card 
                    img={ecommerece}
                    title='eCommerece Project'
                    description='E-commerce (electronic commerce) is the activity of electronically buying or selling of products on online services or over the Internet. The term was coined and first employed by Dr. Robert Jacobson, Principal Consultant to the California State Assembly'
                    />
                    <Card 
                    img={ecommerece}
                    title='eCommerece Project'
                    description='E-commerce (electronic commerce) is the activity of electronically buying or selling of products on online services or over the Internet. The term was coined and first employed by Dr. Robert Jacobson, Principal Consultant to the California State Assembly'
                    />
                    <Card 
                    img={ecommerece}
                    title='eCommerece Project'
                    description='E-commerce (electronic commerce) is the activity of electronically buying or selling of products on online services or over the Internet. The term was coined and first employed by Dr. Robert Jacobson, Principal Consultant to the California State Assembly'
                    />
                    <Card 
                    img={ecommerece}
                    title='eCommerece Project'
                    description='E-commerce (electronic commerce) is the activity of electronically buying or selling of products on online services or over the Internet. The term was coined and first employed by Dr. Robert Jacobson, Principal Consultant to the California State Assembly'
                    />
                    <Card 
                    img={ecommerece}
                    title='eCommerece Project'
                    description='E-commerce (electronic commerce) is the activity of electronically buying or selling of products on online services or over the Internet. The term was coined and first employed by Dr. Robert Jacobson, Principal Consultant to the California State Assembly'
                    />
                </div>
                <Footer />
            </div>
        </div>
    )
}

export default Projects;