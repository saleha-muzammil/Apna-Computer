import React from 'react';
import image from './images/bg1.png';
import Formfile from './formfile';
import TextTransition, { presets } from 'react-text-transition';

function Main(){

  const TEXTS = ['Apna Computer', 'Build your dream pc with us.'];
  const [index, setIndex] = React.useState(0);

  React.useEffect(() => {
    const intervalId = setInterval(
      () => setIndex((index) => index + 1),
      2000,
    );
    return () => clearTimeout(intervalId);
  }, []);

  const myStyle = {backgroundImage: `url(${image})`, backgroundRepeat: 'no-repeat' , 
  backgroundSize : 'cover' ,
  backgroundPosition: 'center' ,
   textAlign: 'center'  ,
  height: '100vh' ,
  width: '100vw' ,
  margin: 0,
  padding: 0
};
  return (

    <div className="page" style={myStyle}>
      <h3 class="header">
    اپنا کمپیوٹر
        </h3>
        <h2 className= "header2">
      <TextTransition springConfig={presets.wobbly}>{TEXTS[index % TEXTS.length]}</TextTransition>      
    </h2>
        <div classname= "test">
      <Formfile/> </div>

</div>
  );
}

export default Main;
