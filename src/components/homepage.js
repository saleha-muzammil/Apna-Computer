import React from 'react';
import Navbar from './Navbar';
import './homepage.css';
import image from './images/bg2.png';

function Homepage()
{

    const myStyle = {backgroundImage: `url(${image})`, backgroundRepeat: 'no-repeat' , 
    backgroundSize : 'cover' ,
    backgroundPosition: 'center' ,
    textAlign: 'center' ,
    height: '100vh' ,
    width: '100vw' 
};
return(
    <div class= "homepage_main" style={myStyle}>
        <Navbar/>

    <div class="container">
        <section>
        <div class= "buildguideinfo">
        <div class="guidesinfo">
            <div class="child">
            <h1>Build Guides</h1>
            </div>
            <div class="child">
            <p>ur build guidihhhhdkdkdkdddkkdkdd
            ddddddwiiw wwwkwkwk
             wwkwkkwety of use-cases and budgets.</p>
             </div>
             <div class="child">
                <button class="button">View all</button>
</div>

        </div>
        <div class="guidesinfo">
<ul>
<li class= "guideGroup">
<a href="/guide/qFLrxr/entry-level-intel-gaming-build" class="guideGroup__target"></a>
<div class>
<h1 class="guide__title">Entry Level Intel Build</h1>
<ul class="guide__keyProducts list-unstyled">
<li>Intel Core i3-13100F</li>
</ul>
</div>
<div>
<ul class="guide__images list-unstyled">
<li class="guide__images--1">
    {/* <img src="//cdna.pcpartpicker.com/static/forever/images/product/b32fb28bca9fb6780a07e11767da9f38.256p.jpg"></img> */}
    </li>
</ul>
</div>
</li>
<li class="guideGroup">
<a href="/guide/KrQzK8/great-amd-gaming-build" class="guideGroup__target"></a>
<div class="guideGroup__content--wrapper1">
<h1 class="guide__title">Great Gaming Build</h1>
<ul class="guide__keyProducts list-unstyled">
<li>AMD Ryzen 5 5600X</li>
</ul>
</div>
<div class>
<div class="guide__numbers">

</div>
<ul class="guide__images list-unstyled">
<li class="guide__images--1">
    {/* <img src="//cdna.pcpartpicker.com/static/forever/images/product/c2a0ee7e8f2578f5da520a4c0d89a3c8.256p.jpg"></img> */}
    </li>
</ul>
</div>
</li>
<li class="guideGroup">
<a href="/guide/FV9TwP/magnificent-intel-gamingstreaming-build" class="guideGroup__target"></a>
<div class="guideGroup__content--wrapper1">
<h1 class="guide__title">Magnificent Streaming Build</h1>
<ul class="guide__keyProducts list-unstyled">
<li>Intel Core i7-13700K</li>
</ul>
</div>
<div class="guideGroup__content--wrapper2">
<div class="guide__numbers">
</div>
<ul class="guide__images list-unstyled">
<li class="guide__images--1">
    {/* <img src="//cdna.pcpartpicker.com/static/forever/images/product/0610d363ccccf52837f07d811e4eb2a3.256p.jpg"></img> */}
    </li>
</ul>
</div>
</li>
</ul>
</div>
        
        </div>
        </section>
    </div>

    
    </div>
);
}

export default Homepage;