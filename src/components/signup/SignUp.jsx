import { CiLock } from "react-icons/ci";

import "./SignUp.css";
import { Button, Stack, } from "@mui/material";
import { useEffect, useRef } from "react";


function SignUp() {

  const inputRef = useRef(null);

  useEffect(() => {
    inputRef.current.focus()
    console.log(inputRef)
  })

  return (

    
    
      <div id="container">
        <Stack spacing={3} direction="column" alignItems="center">
        <div className="icon">
          <CiLock color="#051747" fontSize="2rem" />
        </div>
        <h2 className="title">SignUp</h2>
        <form action="">
          <Stack direction="column" spacing={3}>
           <div className="input-container"  style={{border:"2px solid #2196f3"}}>
              <input  ref={inputRef} type="name" placeholder="Name*" required autoFocus className="name input" />
           </div>
           <div className="input-container">
            <input type="email" placeholder="Email*" required className="email input" />
            </div>
            <div className="input-container">
            <input type="password" placeholder="Password*" required className="password input" />
            </div>
            <div className="input-container">
            <input type="password" placeholder="Confirm Password" required className="cpassword input"/>
            </div> 
            <Stack className="remember-pass" direction="row" spacing={1} alignItems="center" >
              <input type="checkbox" className="checkbox"/>
              <span className="remember">Remember Password</span>
          </Stack>
          <Stack direction="row" spacing={2} >
          <Button sx={{bgcolor:"#FEFEFE",fontWeight:"bold",color:"#081762",fontFamily:"Poppins", fontSize:"20px",p:0 ,width:"23rem","&:hover": {
      backgroundColor: "#051747",border:"1px solid #FEFEFE",color:"#FEFEFE"
    }}} >Submit </Button>
          
          </Stack>
          <p className="signup">Already have an account? <a href="">Login</a> </p>
          </Stack>
        </form>
        </Stack>
        
      </div>
  );
}

export default SignUp;
