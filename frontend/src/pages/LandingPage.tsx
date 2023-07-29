/* eslint-disable @typescript-eslint/no-misused-promises */
import { Box, Button, Typography } from "@mui/material";
import { makeStyles } from '@mui/styles';
import { useRouter } from "next/router";
import CommentSkeleton from "~/components/CommentSkeleton";
import LoginButton from "~/components/LoginButton";

const useStyles = makeStyles({
    root:{
        display:'flex',
        gap: '2rem',
    },
    header:{
        fontWeight: 600, 
    },
    heading1: {
        color:'#4271e7',
    },
    leftSide:{
        display:'flex',
        backgroundColor: '#fefcfb',
        flexDirection: 'column',
        justifyContent: 'center',
        width:'60vw',
        padding: '5rem',
        gap: '2rem'
    },
    homeButton:{
        width: '30%',
        padding: '1rem 2rem',
        borderRadius: '1rem',
        backgroundColor:'#546D64',
        '&:hover': {
            backgroundColor: '#3a4742',
        }
    },
    rightSide:{
        display:'flex',
        flexDirection:'column',
        gap: '2rem',
        backgroundColor: '#caf0f8',
        height: '100vh',
        width:'40vw',
        padding:'7%'
    },
    buttons:{
        display: 'flex',
        gap: '2rem'
    },
    keyPoint:{
        fontWeight: 600,
    }
})

function LandingPage(){
    const router = useRouter();

    const handleButtonClick = () => {
      router.push('/SurveyPage').catch(() => 'obligatory catch');
    };
    const classes= useStyles();

  return (
    <Box className={classes.root}>
        <Box className={classes.leftSide}>
            <Box>
                <Typography variant="subtitle1">
                    The
                </Typography>
                <Typography variant="h1" component="h2"className={classes.header}>
                    Actually Useful
                </Typography>
                <Typography variant="h1" component="h1" className={`${classes.header} ${classes.heading1}`}>
                        Weather Utility
                </Typography>
            </Box>

            <Typography variant="subtitle1">
            Instead of bombarding you with information about temperature, humidity, and other statistics, the <span className={classes.keyPoint}> Actually Useful Weather Utility (ActuallyUWU)</span> gives you a <span className={classes.keyPoint}>personalised overview</span> of the weather conditions you&apos;ll encounter during the day with <span className={classes.keyPoint}>actionable insights</span> you can use to choose your outfit and commute method. <span className={classes.keyPoint}>Set your preferences once,</span> and UWU will always be by your side with helpful recommendations.            </Typography>
            <Box className={classes.buttons}>
                <Button variant="contained" 
                className={classes.homeButton}
                onClick={handleButtonClick}
                >Get Started</Button>
                <LoginButton/>
            </Box>
        </Box>
        <Box className={classes.rightSide}>
            <CommentSkeleton/>
            <CommentSkeleton/>
            <CommentSkeleton/>
        </Box>
    </Box>
  );
}

export default LandingPage
