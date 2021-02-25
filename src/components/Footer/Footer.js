import React from 'react';
import './Footer.css';

function Footer() {
    return (
        <div className="footer">
            <footer>
                <div className="copyright-text">
                    Copyright &copy; 2021 All Rights Reserved by JLX Development.
                    <br />
                    <a href="https://www.linkedin.com/in/jaquelin-lara-xochicale/"  rel="noreferrer" className="fa fa-linkedin" target='_blank'> </a>
                    <a href="https://twitter.com/" rel="noreferrer" className="fa fa-twitter" target='_blank'> </a>
                    <a href="https://github.com/Jacklara" rel="noreferrer" className="fa fa-github" target='_blank'> </a>
                </div>
            </footer>
        </div>
    )
}

export default Footer