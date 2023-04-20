import React from 'react';
import image from './images/bg1.png';
import Signup from './Signup';

function Login(){
  //let navigate = useNavigate();

  const myStyle = {backgroundImage: `url(${image})`, backgroundRepeat: 'no-repeat' , 
  backgroundSize : 'cover' ,
  backgroundPosition: 'center' ,
  textAlign: 'center'  ,
  height: '100vh' ,
  width: '100vw' 
};
  return (

    <div className="page" style={myStyle}>
      <h3 class="header">
    اپنا کمپیوٹر
        </h3>
        <div className="formbox">
      <Signup/> </div>
      </div>
  );
}

export default Login;
