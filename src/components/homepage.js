import React from 'react';
import Navbar from './Navbar';
import image from './images/bg2.png';
import img1 from '../assets/img5.jpeg'
import img2 from '../assets/img6.jpeg'
import img3 from '../assets/img7.jpeg'

function Homepage() {

    const myStyle = {
        backgroundImage: `url(${image})`, backgroundRepeat: 'no-repeat',
       backgroundSize: 'cover',
       backgroundPosition: 'center',
       textAlign: 'center',
        maxHeight: '100%',
        maxwidth: '100%'
    };
    return (
        <div class="homepage_main min-h-screen" style={myStyle}>
            
            <Navbar />

            <html class = "mainhtml">
                <body class = "mainBody">
                    <div class="CSSgal">
                        <s id="s1"></s> 
                        <s id="s2"></s>
                        <s id="s3"></s>
      
                        <div class="slider">
                            <div class = "firstPage">
                                <img src={img1} class = "firstimg"/>
                                <div class="content first">
                                    <h2 className="slideheader1">Build Your Own Custom PC!</h2>
                                    <button class="btn first"><span>Let's Build</span> </button>
                                </div>
                            </div>
                            <div class = "secondPage">
                                <img src={img2} class = "secondimg"/>
                                <div class="content second">
                                <h2 className="slideheader1">Pre Built PCs</h2>
                                    <button class="btn second"><span>View</span></button>
                                </div>
                            </div>
                            <div class = "thirdPage">
                                <img src={img3} class = "thirdimg"/>
                                <div class = "content third">
                                    <h2>Build Guide</h2>
                                    <button class="btn third"><span>Need Help?</span></button>  
                                </div>
                            </div>
                        </div>
        
                        <div class="prevNext">
                            <div><a href="#s3"></a><a href="#s2"></a></div>
                            <div><a href="#s1"></a><a href="#s3"></a></div>
                            <div><a href="#s2"></a><a href="#s1"></a></div>
                        </div>
      
                    </div>
                </body>
            </html>

        </div>
    );
}

export default Homepage;
