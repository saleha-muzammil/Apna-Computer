import React from 'react';
import Navbar from './Navbar';
import image from './images/bg2.png';

function Buildguide () {

    const myStyle = {
        backgroundImage: `url(${image})`, backgroundRepeat: 'no-repeat',
        backgroundSize: 'cover',
        backgroundPosition: 'center',
        textAlign: 'center',
        minHeight: '100vh',
        width: '100vw'
    };

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
            <div class = "guideBody">
            <div class = "guidePage">
                <div class = "section first">
                    <h1>Build Your PC With Us!</h1>
                    <h3>Building a PC for the first time? Then you're at the right place! First comes the parts that you'll need such as a MotherBoard, RAM, CPU, GPU, Storage and Power Supply. Don't know what they are? Then read along as we'll walk you through each one of them!</h3>
                </div>
                <div class = "section second">
                    <div class="container reveal">
                        <h2>Let's Start</h2>
                        <div class="cards">
                        <div class="text-card">
                            <h3>What you need</h3>
                            <p>If you're interested in building your own custom PC, here are the essential components you'll need: CPU, Motherboard, Graphics Card, RAM, Storage, Power Supply Unit, Cooling</p>
                        </div>
                        <div class="text-card">
                            <h3>Tools</h3>
                            <p>When choosing parts, make sure they're compatible with each other, and that they suit your budget and performance requirements. Some common tools you'll need for assembly include screwdrivers, thermal paste, and cable ties.</p>
                        </div>
                        <div class="text-card">
                            <h3>Don't Rush</h3>
                            <p>When building, take your time and follow instructions carefully to avoid damaging any components. You can find helpful tutorials here to help you through the process.</p>
                        </div>
                    </div>
                </div>
            </div>
            <div class = "section third">
            <div class="container reveal">
                <h2>Essential Parts</h2>
                <div class="cards">
                <div class="text-card">
                    <h3>Mother Board</h3>
                    <p>Every other component plugs into this circuit board. It’s the highway they use to communicate and collaborate. They come in different sizes and configurations, and each one looks a little different, but they all fill the same function. Make sure you know which processor you want before you buy a motherboard.</p>
                </div>
                <div class="text-card">
                    <h3>Memory (RAM)</h3>
                    <p>RAM is one of the most important parts of your computer. It provides high-speed, short-term memory for your computer's CPU. You’ll see a lot of the same terms when you’re looking at memory and storage, but they’re very different.It’s very important, though, because software uses memory to cache (temporarily store) data in a place where it can be retrieved quickly.</p>
                </div>
                <div class="text-card">
                    <h3>Power Supply</h3>
                    <p>Your power supply unit is a little box that keeps the electricity running to every component. It determines how quick and powerful your PC can be. The faster it is, the more power it needs, and you always want to have a little more than you need, just in case. Just like GPUs, PSUs are also in and out of stock right now.</p>
                </div>
            </div>
            </div>
            </div>
            <div class = "section fourth">
                <div class="container reveal">
                    <h2>Essential Parts</h2>
                    <div class="cards">
                        <div class="text-card">
                            <h3>CPU</h3>
                            <p>This is the brain of your computer. It sockets directly into the motherboard, and it’s the single most important component of your PC. That doesn’t mean it has to be the most expensive, or that it's the most important for gaming performance.</p>
                        </div>
                        <div class="text-card">
                            <h3>GPU</h3>
                            <p>If you’ll be playing games on this PC, you’ll need a graphics processing unit (also called a graphics card). This is a specialized processor that’s designed and optimized for handling visual data like the graphics in games. It's also used in video and photo editing and other graphics-intensive tasks.</p>
                        </div>
                        <div class="text-card">
                            <h3>Storage</h3>
                            <p>This is your PC’s walk-in closet. This is where you store all your files, your games, your movies, your documents, your photos, your everything. You can always add more storage later.</p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
    </div>

    );
}

export default Buildguide;