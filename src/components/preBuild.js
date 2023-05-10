import React from 'react';
import Navbar from './Navbar';
import img1 from '../assets/pc1.jpg'
import img2 from '../assets/pc2.jpg'
import img3 from '../assets/pc3.jpg'
import img4 from '../assets/pc4.jpg'
import img5 from '../assets/pc5.jpg'
import img6 from '../assets/pc6.jpg'

function PreBuild () {


    window.addEventListener('scroll', reveal);

    function reveal(){
        var reveals = document.querySelectorAll('.reveal');

        for(var i = 0; i < reveals.length; i++){

            var windowheight = window.innerHeight;
            var revealtop = reveals[i].getBoundingClientRect().top;
            var revealpoint = 150;

            if(revealtop < windowheight - revealpoint){
            reveals[i].classList.add('active');
            }
            else{
            reveals[i].classList.remove('active');
            }
        }
    }

    return(
        <div>
            <Navbar />
            <div class = "preBody">
                <div class = "prePage">
                    <div class = "preSection first">
                        <div class = "mainHeading">
                            <h1>PRE BUILT PC'S</h1>
                        </div>
                    </div>
                    <div class = "preSection second">
                        <div class="container">
                            <div class="cards">
                                <div class="preText-card">
                                <div>
                            <img src={img1} class = "buildimg"/>
                            </div>
                            <div class = "buildname">
                            CYBERPOWERPC Gamer Xtreme VR Gaming PC
                            </div>
                            <div class = "buildspecs">
                                <ul class="myUL"> 
                                    <li>NVIDIA GeForce GTX 1660 6GB</li>
                                    <li>Intel Core i5-9400F 2.9 GHz</li>
                                    <li>8GB DDR4</li>
                                    <li>240GB SSD</li>
                                    <li>1TB HDD</li>
                                </ul>
                            </div>
                            <div class>
                                <a href='https://amazon.com/dp/B07VGJDKZ4?tag=pcbuilder00-20'><button class="btn first build" ><span>Buy Now</span></button></a>
                            </div>
                        </div>
                        <div class="preText-card">
                        <div>
                            <img src={img2} class = "buildimg"/>
                            </div>
                            <div class = "buildname">
                            iBUYPOWER Pro Gaming PC Computer
                            </div>
                            <div class = "buildspecs">
                                <ul class="myUL"> 
                                    <li>RX 6500XT 4 GB</li>
                                    <li>Intel i3 10105F 3.7 GHz</li>
                                    <li>8GB DDR4</li>
                                    <li>480 GB SSD</li>
                                    <li>1TB HDD</li>
                                </ul>
                            </div>
                            <div class>
                                <a href='https://amazon.com/dp/B09SVQ9H2D?tag=pcbuilder00-20'><button class="btn first build"><span>Buy Now</span></button></a>
                            </div>
                        </div>
                        <div class="preText-card">
                        <div>
                            <img src={img3} class = "buildimg"/>
                            </div>
                            <div class = "buildname">
                            iBUYPOWER Gaming PC Computer Element 9260
                            </div>
                            <div class = "buildspecs">
                                <ul class="myUL"> 
                                    <li>NVIDIA GeForce GTX 1660 Ti 6GB</li>
                                    <li> Intel Core i7-9700F 8-Core 3.0 GHz</li>
                                    <li>16GB DDR4-2666 RAM</li>
                                    <li>240GB SSD</li>
                                    <li>1TB HDD</li>
                                </ul>
                            </div>
                            <div class>
                                <a href='https://amazon.com/dp/B07V34QQ3C?tag=pcbuilder00-20'><button class="btn first build"><span>Buy Now</span></button></a>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div class = "preSection third">
            <div class="container reveal">
                <div class="cards">
                <div class="preText-card">
                <div>
                            <img src={img4} class = "buildimg"/>
                            </div>
                            <div class = "buildname">
                            SkyTech Archangel 3.0 Gaming Computer
                            </div>
                            <div class = "buildspecs">
                                <ul class="myUL"> 
                                    <li> AMD Ryzen 5 3600X 6-Core 3.8 GHz</li>
                                    <li>GeForce RTX 2060 6G</li>
                                    <li>16GB DDR4</li>
                                    <li>1TB SSD</li>
                                    <li>1TB HDD</li>
                                </ul>
                            </div>
                            <div class>
                                <a href='https://amazon.com/dp/B094CC6WVW?tag=pcbuilder00-20'><button class="btn first build"><span>Buy Now</span></button></a>
                            </div>
                </div>
                <div class="preText-card">
                <div>
                            <img src={img5} class = "buildimg"/>
                            </div>
                            <div class = "buildname">
                            iBUYPOWER Pro Gaming PC Computer
                            </div>
                            <div class = "buildspecs">
                                <ul class="myUL"> 
                                    <li>AMD Ryzen 7 5800X 8-Core 3.8 GHz </li>
                                    <li>GeForce RTX 3080 10GB</li>
                                    <li>16G DDR4 3200</li>
                                    <li>1TB Gen4 SSD</li>
                                    <li>750W Gold PSU</li>
                                </ul>
                            </div>
                            <div class>
                                <a href='https://amazon.com/dp/B09699NMFK?tag=pcbuilder00-20'><button class="btn first build"><span>Buy Now</span></button></a>
                            </div>
                </div>
                <div class="preText-card">
                <div>
                            <img src={img6} class = "buildimg"/>
                            </div>
                            <div class = "buildname">
                            Alienware Aurora R14 Gaming Desktop
                            </div>
                            <div class = "buildspecs">
                                <ul class="myUL"> 
                                    <li>AMD Ryzen 9 5900</li>
                                    <li>NVIDIA GeForce RTX 3080 10GB</li>
                                    <li>32GB DDR4-2666 RAM</li>
                                    <li>1TB SSD</li>
                                    <li>2TB HDD</li>
                                </ul>
                            </div>
                            <div class>
                                <a href='https://amazon.com/dp/B09NLDMKVR?tag=pcbuilder00-20'><button class="btn first build"><span>Buy Now</span></button></a>
                            </div>
                </div>
            </div>
            </div>
            </div>
        </div> 
        </div>

    </div>

    );
}

export default PreBuild;