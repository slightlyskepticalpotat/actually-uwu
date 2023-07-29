import { Box, Button, Typography } from "@mui/material";
import { makeStyles } from '@mui/styles';
import CommentSkeleton from "~/components/CommentSkeleton";

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
        backgroundColor:'#158dfc'
    },
    rightSide:{
        display:'flex',
        flexDirection:'column',
        gap: '2rem',
        backgroundColor: '#e2e2e2',
        height: '100vh',
        width:'40vw',
        padding:'7%'
    }
})


function LandingPage(){
const classes= useStyles();
  return (
    <Box className={classes.root}>
        <Box className={classes.leftSide}>
            <Box>
                <Typography variant="h1" component="h2"className={classes.header}>
                    Actually Useful
                </Typography>
                <Typography variant="h1" component="h1" className={`${classes.header} ${classes.heading1}`}>
                        Weather Utility
                </Typography>
            </Box>

            <Typography variant="subtitle1">
            Instead of bombarding you with information about temperature, humidity, and other pressure, Actually Useful Weather Utility (ActuallyUWU for short) gives you a personalized overview of the weather conditions you&apos;ll encounter during the day with actionable insights you can use to choose regarding your outfit and commute method. Just set your preferences once, and it&apos;ll always be by your side.
            </Typography>
            <Button variant="contained" className={classes.homeButton}>Get Started</Button>
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