import React, { useState } from 'react';
import { Carousel } from 'react-bootstrap';



const Banner = () => {
    const [index, setIndex] = useState(0);

    const handleSelect = (selectedIndex, e) => {
        setIndex(selectedIndex);
    };
    return (
        <Carousel activeIndex={index} onSelect={handleSelect}>
            <Carousel.Item>
                <img
                    className="d-block w-100"
                    src='https://i.ibb.co/G0512z2/rsz-garry-neesam-kv9ad9yd55m-unsplash.png'
                    alt="First slide"
                />
                <Carousel.Caption>
                    <h3>Top Brand</h3>
                    <p>World Class Bike Supplier</p>
                </Carousel.Caption>
            </Carousel.Item>
            <Carousel.Item>
                <img
                    className="d-block w-100"
                    src='https://i.ibb.co/W6kM85g/rsz-bjorn-magnus-kristiansen-nxvhr5eabcy-unsplash-1.png'
                    alt="Second slide"
                />

                <Carousel.Caption>
                    <h3>High Quality</h3>
                    <p>World Best Quality Bike</p>
                </Carousel.Caption>
            </Carousel.Item>
            <Carousel.Item>
                <img
                    className="d-block w-100"
                    src='https://i.ibb.co/y4dC5dH/rsz-kirill-petropavlov-f-gcjlncvwo-unsplash-1.png'
                    alt="Third slide"
                />

                <Carousel.Caption>
                    <h3>Super Bike</h3>
                    <p>
                        High Speed Super Car Ever
                    </p>
                </Carousel.Caption>
            </Carousel.Item>
        </Carousel>
    );
};

export default Banner;