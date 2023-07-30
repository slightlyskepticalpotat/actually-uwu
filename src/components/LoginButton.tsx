import { makeStyles } from "@mui/styles";
import React from "react";
import { SignInButton } from "@clerk/clerk-react";

const useStyles = makeStyles({
  loginButton: {
    width: "30%",
    padding: "1rem 2rem",
    borderRadius: "1rem",
    border: "2px solid #546D64",
    backgroundColor: "transparent",
    "&:hover": {
      backgroundColor: "#f0f0f0",
    },
  },
});

const LoginButton = () => {
  const classes = useStyles();

  return (
    <SignInButton mode="modal">
      <button className={classes.loginButton}>Log in</button>
    </SignInButton>
  );
};

export default LoginButton;
