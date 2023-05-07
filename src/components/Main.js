import React from 'react';
import image from './images/bg1.png';
import Formfile from './formfile';
import { useNavigate } from 'react-router-dom';


function Main(){
  const navigate = useNavigate();

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
        <div classname= "test">
      <Formfile/> </div>

<button class="button" onClick={() => { navigate('/productform') }}>test</button>
<button class="button" onClick={() => { navigate('/partpicker') }}>partpicker</button>
<button class="button" onClick={() => { navigate('/homepage') }}>homepage</button>           
<button class="button" onClick={() => { navigate('/Buildguide') }}>guide</button>            
<button class="button" onClick={() => { navigate('/testing') }}>test2</button>  

</div>
  );
}

export default Main;
