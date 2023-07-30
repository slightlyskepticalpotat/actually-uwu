import { makeStyles } from "@mui/styles";
import React from "react";
import Link from "next/link";

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
    <Link className={classes.loginButton} href="/api/auth/login">
      Login
    </Link>
  );
};

export default LoginButton;
