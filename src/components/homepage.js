import React from 'react';
import Navbar from './Navbar';
import image from './images/bg2.png';
import Slider from './Slider';
import SliderTwo from './Slider2';
import img1 from '../assets/img4.jpeg'
import img2 from '../assets/img2.jpg'
import img3 from '../assets/img3.webp'

const content = [
    {
        img: img1,
    },
    {
        img: img2,
    },
    {
        img: img3,
    }
]

function Homepage() {

    const myStyle = {
        backgroundImage: `url(${image})`, backgroundRepeat: 'no-repeat',
        backgroundSize: 'cover',
        backgroundPosition: 'center',
        textAlign: 'center',
        minHeight: '100vh',
        width: '100vw'
    };
    return (
        <div class="homepage_main min-h-screen" style={myStyle}>
            <Navbar />
            <div class="slider">
                <div class="buttons">
                    <a href="#slide-1" class ="firstSlideButton">BUILD</a>
                    <a href="#slide-2" class ="secondSlideButton">BUY</a>
                    <a href="#slide-3" class ="thirdSlideButton">HELP</a>
                </div>
                <span id="slide-1"></span>
                <span id="slide-2"></span>
                <span id="slide-3"></span>
                <div class="image-container">
                    <div class = "image1">
                        <img src={img1} class="slide"/> 
                         <div class = "txt1">Build Your Own Custom PC</div>
                        <button class="btn first"><span>Let's Build</span></button>
                    </div>
                    <div class = "image2">
                        <img src={img2} class="slide"/>
                        <div class = "txt2">PRE Build PC's</div>
                        <button class="btn second"><span>Perfect!</span></button>
                    </div>
                    <div class = "image3">
                        <img src={img3} class="slide"/>
                        <div class = "txt3">BUILD GUIDES</div>
                        <button class="btn third"><span>Need Help</span></button>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Homepage;