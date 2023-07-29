import { Autocomplete, Box, Button, Switch, TextField, Typography } from "@mui/material";
import { makeStyles } from "@mui/styles";
import { useRouter } from "next/router";

const useStyles = makeStyles({
    root:{
        display: 'flex',
        width:'100vw',
        height:'100vh',
        justifyContent:'center',
        alignItems:'center',
        flexDirection: 'column',
        gap: '1rem'
    },
    container:{
        display: 'flex',
        flexDirection: 'column',
        overflow: 'hidden',
    }

})

const commuteMethod = [
    {label:"Walking"}, 
    {label:"Cycling"}, 
    {label:"Transit"}, 
    {label:"Driving"}
]

const rainProtection = [{label:"Nothing"}, {label:"Raincoat"}, {label:"Umbrella"},{label:"Both"}]


const SurveyPage = () => {
    const classes = useStyles();
    const router = useRouter();

    return (
        <form
        onSubmit={(event) => {
            event.preventDefault();
            console.log("hello")
            router.push('/Weather');
        }}>
        <Box className={classes.container}>
            <Box className={classes.root} id="q1">
                <Typography variant="subtitle1"><em>Metric or Imperial</em></Typography>
                <Box>
                    Metric (C°) <Switch /> Imperial (F°) 
                </Box>
            </Box>
            <Box className={classes.root} id="q2">
                <Typography variant="subtitle1"><em>What is your preferred method of commute?</em></Typography>
                <Autocomplete
                    disablePortal
                    id="combo-box-demo"
                    options={commuteMethod}
                    sx={{ width: 300 }}
                    renderInput={(params) => <TextField {...params} label="Commute Method" />}
                />
            </Box>
            <Box className={classes.root} id="q3">
                <Typography variant="subtitle1"><em>How do you protect yourself when it's raining?</em></Typography>
                <Autocomplete
                    disablePortal
                    id="combo-box-demo"
                    options={rainProtection}
                    sx={{ width: 300 }}
                    renderInput={(params) => <TextField {...params} label="Light Rain" />}
                />
                <Autocomplete
                    disablePortal
                    id="combo-box-demo"
                    options={rainProtection}
                    sx={{ width: 300 }}
                    renderInput={(params) => <TextField {...params} label="Heavy Rain" />}
                />
            </Box>
            <Box className={classes.root} id="q4">
                <Typography variant="subtitle1"><em>Are you ready to generate your results?</em></Typography>
                <Button variant="contained" type="submit">Generate</Button>
            </Box>
            </Box>
        </form>
    )
}

export default SurveyPage

