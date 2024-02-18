import { CiLock } from "react-icons/ci";

import "./SignUp.css";
import { Button, Stack, } from "@mui/material";
import { FaLongArrowAltRight } from "react-icons/fa";


function SignUp() {
  return (
    
      <div id="container">
        <Stack spacing={3} direction="column" alignItems="center">
        <div className="icon">
          <CiLock color="#051747" fontSize="2rem" />
        </div>
        <h2 className="title">SignUp</h2>
        <form action="">
          <Stack direction="column" spacing={3}>
           <div className="input-container">
              <input type="name" placeholder="Name*" required     className="email input" />
           </div>
           <div className="input-container">
            <input type="email" placeholder="Email*" required className="email input" />
            </div>
            <div className="input-container">
            <input type="password" placeholder="Password*" required className="email input" />
            </div>
            <div className="input-container">
            < input type="password" placeholder="Confirm Password*" required className="email input" />
            </div>
            
            <Stack className="remember-pass" direction="row" spacing={1} alignItems="center" >
              <input type="checkbox" className="checkbox"/>
              <span className="remember">Remember Password</span>
          </Stack>
          <Stack direction="row" spacing={2} >
          <Button sx={{bgcolor:"#FEFEFE",fontWeight:"bold",color:"#081762",fontFamily:"Poppins", fontSize:"20px",p:0 ,width:"11.1rem","&:hover": {
      backgroundColor: "#051747",border:"1px solid #FEFEFE",color:"#FEFEFE"
    }}} >Submit </Button>
          <Button sx={{bgcolor:"#FEFEFE",fontWeight:"bold",color:"#081762",fontFamily:"Poppins", fontSize:"20px",p:0 ,width:"11rem","&:hover": {
      backgroundColor: "#051747",border:"1px solid #FEFEFE",color:"#FEFEFE"
    }}} >Login<FaLongArrowAltRight className="arrow-icon" /></Button>

          </Stack>
          </Stack>
        </form>
        </Stack>
        
      </div>
  );
}

export default SignUp;
