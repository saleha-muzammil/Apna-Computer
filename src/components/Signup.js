import React from 'react';
import { useNavigate } from 'react-router-dom';

function Signup(){
  let navigate = useNavigate();


  return (

   // <div className="base-csontainer">
      <div className="content">
        <div className="form">
        <div class="smallheader"> Login</div>
        <hr class="tag"/>
          <div className="form-group">
            <label htmlFor='username'>Username</label>
            <input type="text" name="username" placeholder="username" />
          </div>

          <div className="form-group">
            <label htmlFor='password'>Password</label>
            <input type="password" name="password" placeholder="password" />
          </div>
      <div className="footer">
        <button class="button" onClick= {() => {navigate('/homepage')}}>Login</button>
        <div><label>Not a member?</label>
        </div>
      <div className="footer">
        <button class="button" onClick= {() => {navigate('/partpicker')}}>Register</button>

      </div>
      </div>
      </div>
    </div>
  );
}

export default Signup ;
