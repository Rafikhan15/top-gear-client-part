import React from 'react';
import { Card } from 'react-bootstrap';
import './Footer.css';


const Footer = () => {
    const today = new Date();
    const year = today.getFullYear();
    return (
        <div >
            <Card className="text-center sticky-bottom  bg-dark">
                {/* <Card.Header>Featured</Card.Header> sticky-bottom  */}
                <Card.Body className='blockquote-footer '>
                    <Card.Title className='color-white'>Top Gear</Card.Title>
                    <Card.Text>
                        <p><small>copyright @ {year} </small></p>
                    </Card.Text>

                </Card.Body>
            </Card>
        </div>




    );
};

export default Footer;