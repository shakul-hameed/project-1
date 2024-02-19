import { Box, Paper, Tab, Tabs, Typography, } from "@mui/material"
import { useRef, useState } from "react";
import Login from "../login/Login";
import SignUp from "../signup/SignUp";
import "./SignupAndLogin.css"

const paperStyle = {width:"28.1rem" ,marginTop:"10%"}

function TabPanel(props) {
  const { children, value, index, ...other } = props;

 



  return (
    <div
      role="tabpanel"
      hidden={value !== index}
      id={`simple-tabpanel-${index}`}
      aria-labelledby={`simple-tab-${index}`}
      {...other}
    >
      {value === index && (
        <Box>
          <Typography>{children}</Typography>
        </Box>
      )}
    </div>
  );
}

function SignupAndLogin() {

  const [value,setValue] = useState(0)

  


  
  const handleChange = (event, newValue) => {
    setValue(newValue);
  };
  return (
    <Paper  style={paperStyle} elevation={15} >
    {}
        <Tabs  textColor="primary"  indicatorColor="inherit" variant="fullWidth" centered className="tabs" value={value} onChange={handleChange} aria-label="disabled tabs example">
          <Tab className="tab"  sx={{fontSize:"15px",fontWeight:"600",borderRight:"1px solid #051747",borderTopLeftRadius:"5px",}} label="login" />
          <Tab  className="tab" sx={{fontSize:"15px",fontWeight:"600",borderTopRightRadius:"5px"}}  label="signup" />
        </Tabs>

        <TabPanel  value={value} index={0}><Login/></TabPanel>
        <TabPanel value={value} index={1}><SignUp/></TabPanel>
    </Paper>
  )
}

export default SignupAndLogin