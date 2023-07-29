import { useAuth0 } from "@auth0/auth0-react";
import { makeStyles } from '@mui/styles';
import React from "react";

const useStyles = makeStyles({
  loginButton:{
    width: '30%',
    padding: '1rem 2rem',
    borderRadius: '1rem',
    border: '2px solid #546D64',
    backgroundColor:'transparent',
    '&:hover': {
        backgroundColor: '#f0f0f0',
    }
  }
})

const LoginButton = () => {
  const classes= useStyles();
  const { loginWithRedirect } = useAuth0();

  return <button  className={classes.loginButton} onClick={() => loginWithRedirect()}>LOG IN</button>;
};

export default LoginButton;