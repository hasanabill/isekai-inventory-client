import React from 'react';
import { Carousel } from 'react-bootstrap';
import img1 from '../../../../assets/images/watch-1.jpg'
import img2 from '../../../../assets/images/watch-2.jpg'
import img3 from '../../../../assets/images/watch-3.jpg'
import img4 from '../../../../assets/images/watch-4.jpg'

const Banner = () => {
    return (
        <div>
            <Carousel fade interval="1000" controls={false}>
                <Carousel.Item>
                    <img
                        className="d-block w-100"
                        src={img1}
                        alt="First slide"
                    />
                </Carousel.Item>
                <Carousel.Item>
                    <img
                        className="d-block w-100"
                        src={img2}
                        alt="Second slide"
                    />
                </Carousel.Item>
                <Carousel.Item>
                    <img
                        className="d-block w-100"
                        src={img3}
                        alt="Third slide"
                    />
                </Carousel.Item>
                <Carousel.Item>
                    <img
                        className="d-block w-100"
                        src={img4}
                        alt="Fourth Slide"
                    />
                </Carousel.Item>
            </Carousel>
        </div>
    );
};

export default Banner;