import React from "react";
import { useNavigate } from 'react-router-dom';



function Cpu()
{
    const navigate = useNavigate();
    const fetchdata = async (event) => {
        event.preventDefault();
    
        try {
          const response = await fetch('http://localhost:4000/api/auth/test', {
            method: "GET", // *GET, POST, PUT, DELETE, etc.
            mode: "cors", // no-cors, *cors, same-origin
            cache: "no-cache", // *default, no-cache, reload, force-cache, only-if-cached
            credentials: "same-origin", // include, *same-origin, omit
            headers: {
              "Content-Type": "application/json",
            },
            redirect: "follow", // manual, *follow, error
            referrerPolicy: "no-referrer", // no-referrer, *no-referrer-when-downgrade, origin, origin-when-cross-origin, same-origin, strict-origin, strict-origin-when-cross-origin, unsafe-url
            //body: JSON.stringify({username: username, password: password}),
          });
    
          if (response.status=== 200)
          {
            const data= await response.json(); 
            console.log(data); 
          // If login is successful, navigate to the homepage
          if (data.status===200)
          navigate('/homepage');
          }
          else 
          {
           console.log(response) 
          }
        } catch (error) {
          console.log(error);
        }
      };
    

    return(<button type="submit" className="button" onClick={fetchdata}>
    Register
  </button>
    )
}

export default Cpu ;