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

    return(
        <div class="homepage_main min-h-screen" style={myStyle}>
            <Navbar />
            <div class = "mainInfo">
            <div class = "userGuide">
                <div class = "guideHeading">
                    <h1>User Guide</h1>
                </div>
                <div class = "guideContent">
                    <p>If you're interested in building your own custom PC, here are the essential components you'll need: <span class = "Items">CPU, Motherboard, Graphics Card, RAM, Storage, Power Supply Unit, Cooling</span>. When choosing parts, make sure they're compatible with each other, and that they suit your budget and performance requirements. Some common tools you'll need for assembly include screwdrivers, thermal paste, and cable ties. When building, take your time and follow instructions carefully to avoid damaging any components. You can find helpful tutorials here to help you through the process.
                    </p>
                </div>
            </div>

            <div class = "userGuide">
                <div class = "guideHeading">
                    <h1>Mother board</h1>
                </div>
                <div class = "guideContent">
                    <p>Every other component plugs into this circuit board. It’s the highway they use to communicate and collaborate. They come in different sizes and configurations, and each one looks a little different, but they all fill the same function. Make sure you know which processor you want before you buy a motherboard.
                    </p>
                </div>
            </div>

            <div class = "userGuide">
                <div class = "guideHeading">
                    <h1>Processor (CPU)</h1>
                </div>
                <div class = "guideContent">
                    <p>This is the brain of your computer. It sockets directly into the motherboard, and it’s the single most important component of your PC. That doesn’t mean it has to be the most expensive (we’ll get to that later), or that it's the most important for gaming performance. Like your brain, everything your PC does goes through here. Your legs are important for running, but it's your brain that tells them to move. 
                    </p>
                </div>
            </div>

            <div class = "userGuide">
                <div class = "guideHeading">
                    <h1>Graphic Card (GPU)</h1>
                </div>
                <div class = "guideContent">
                    <p>If you’ll be playing games on this PC, you’ll need a graphics processing unit (also called a graphics card). This is a specialized processor that’s designed and optimized for handling visual data like the graphics in games. It's also used in video and photo editing and other graphics-intensive tasks. Your GPU can process thousands, millions, of things at the same time–think about all the things your GPU is rendering any time you play a game. Every rock, every tree, every gun, every player, every enemy, and on and on. She's got to think about all those things all at once and weave them into a coherent three-dimensional environment for you to explore and enjoy
                    </p>
                </div>
            </div>

            <div class = "userGuide">
                <div class = "guideHeading">
                    <h1>Memory (RAM)</h1>
                </div>
                <div class = "guideContent">
                    <p>You’ll see a lot of the same terms when you’re looking at memory and storage, but they’re very different. Memory is more like that one table you toss things on to deal with later. It’s scratch paper; it’s short-term. It’s very important, though, because software uses memory to cache (temporarily store) data in a place where it can be retrieved quickly.
                    </p>
                </div>
            </div>

            <div class = "userGuide">
                <div class = "guideHeading">
                    <h1>Storage</h1>
                </div>
                <div class = "guideContent">
                    <p>This is your PC’s walk-in closet. This is where you store all your files, your games, your movies, your documents, your photos, your everything. You can always add more storage later.
                    </p>
                </div>
            </div>

            <div class = "userGuide">
                <div class = "guideHeading">
                    <h1>Power Supply (PSU)</h1>
                </div>
                <div class = "guideContent">
                    <p>Your power supply unit is a little box that keeps the electricity running to every component. It determines how quick and powerful your PC can be. The faster it is, the more power it needs, and you always want to have a little more than you need, just in case. Just like GPUs, PSUs are also in and out of stock right now.
                    </p>
                </div>
            </div>
        </div>
    </div>
    );
}

export default Buildguide;