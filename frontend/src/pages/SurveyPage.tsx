import { Autocomplete, Box, Button, Switch, TextField, Typography } from "@mui/material";
import { makeStyles } from "@mui/styles";
import { useRouter } from "next/router";
import { useState } from "react";

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

    const [useImperial, setImperial] = useState(true);
    const [commute, setCommute] = useState('');
    const [lightRain, setLightRain] = useState('');
    const [heavyRain, setHeavyRain] = useState('');

    return (
        <form
        onSubmit={(event:any) => {
            event.preventDefault();
            const preferences = {
                "imperial": useImperial,
                "commute": commute,
                "light-rain": lightRain,
                "heavy-rain": heavyRain
            }
            console.log(preferences)
            router.push('/Weather');
        }}>
        <Box className={classes.container}>
            <Box className={classes.root}>
                <Typography variant="subtitle1"><em>Metric or Imperial</em></Typography>
                <Box>
                    Metric (C°) <Switch onChange={(e, v) => {setImperial(v)
                    console.log(v)
                    }}/> Imperial (F°) 
                </Box>
            </Box>
            <Box className={classes.root}>
                <Typography variant="subtitle1"><em>What is your preferred method of commute?</em></Typography>
                <Autocomplete
                    disablePortal
                    options={commuteMethod}
                    sx={{ width: 300 }}
                    onChange={(event: any, value: any) => setCommute(value)}
                    renderInput={(params) => <TextField {...params} 
                    label="Commute Method" 
                    />}
                />
            </Box>
            <Box className={classes.root}>
                <Typography variant="subtitle1"><em>How do you protect yourself when it's raining?</em></Typography>
                <Autocomplete
                    disablePortal
                    options={rainProtection}
                    sx={{ width: 300 }}
                    onChange={(event: any, value: any) => setLightRain(value)}
                    renderInput={(params) => <TextField {...params} 
                    label="Light Rain" 
                    />}
                />
                <Autocomplete
                    disablePortal
                    options={rainProtection}
                    sx={{ width: 300 }}
                    onChange={(event: any, value: any) => setHeavyRain(value)}
                    renderInput={(params) => <TextField {...params} 
                    label="Heavy Rain" 
                    />}
                />
            </Box>
            <Box className={classes.root}>
                <Typography variant="subtitle1"><em>Are you ready to generate your results?</em></Typography>
                <Button variant="contained" type="submit">Generate</Button>
            </Box>
            </Box>
        </form>
    )
}

export default SurveyPage

