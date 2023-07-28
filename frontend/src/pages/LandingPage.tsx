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
                        Weather App
                </Typography>
            </Box>

            <Typography variant="subtitle1">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Morbi non ex in est eleifend dictum vitae sed lectus. Donec vitae elementum lorem. Nam in nisl a libero faucibus rutrum. Praesent tristique non nisl et facilisis. Quisque interdum suscipit libero consectetur cursus. Morbi at fermentum massa, nec dictum risus. Duis vel libero sit amet tellus elementum posuere eget nec erat.
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