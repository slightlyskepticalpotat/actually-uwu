import {Paper, Box, Typography} from '@mui/material';
import { makeStyles } from '@mui/styles';

const useStyles = makeStyles({
    root:{
        display:'flex',
        gap: '2rem',
        textAlign:'center',
        fontWeight: 500,
        fontSize: '125%',
        height: '100vh',
        justifyContent: 'start'
    },
    box: {
        display:'flex',
        padding: '1rem', 
        borderRadius: '5%',
        border:'1rem',
        justifyContent: 'space-evenly', 
        backgroundColor: 'blue'
    },
    pic: {
        height: "100%"
    },
    text:{
        justifyContent:'start',
        color:'white'
    }
}
)

type activity = {
    title: string,
    desc: string,
    imgid: string,
}

function CarouselItem({title, desc, imgid}: activity) {
    const classes=useStyles();
    return (
        <Paper >
            <Box className= {classes.box}>
                <img className={classes.pic}src={imgid}></img>
                <Box className={classes.text}>
                    <Typography fontSize='150%' fontWeight="600"> {title}</Typography>
                    <h1>{desc}</h1>
                </Box>
            </Box>
        </Paper>
    )
}

export default CarouselItem