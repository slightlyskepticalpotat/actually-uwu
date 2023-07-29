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
    },
    submitButton:{
      width: '15%',
      padding: '1rem 2rem',
      borderRadius: '1rem',
      backgroundColor:'#546D64',
      '&:hover': {
          backgroundColor: '#3a4742',
      }
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

    const handleSubmit = async (event: { preventDefault: () => void; }) => {
        // eslint-disable-next-line @typescript-eslint/no-unsafe-call, @typescript-eslint/no-unsafe-member-access
        event.preventDefault();
    
        const preferences = {
          'imperial': useImperial,
          'commute': commute,
          'light-rain': lightRain,
          'heavy-rain': heavyRain,
        };
    
        console.log(preferences);
    
        try {
          // Simulate an async operation, like sending data to the server
          await submitPreferencesToServer(preferences);
          console.log('Preferences submitted:', preferences);
          await router.push('/Weather');
        } catch (error) {
          console.error('Error while submitting preferences:', error);
        }
      };
        //TODO luci can do all her crud operations here:
      const submitPreferencesToServer = (data: { 'imperial': boolean; 'commute': string; 'light-rain': string; 'heavy-rain': string; }) => {
        // Simulate an async operation that returns a Promise
        return new Promise<void>((resolve, reject) => {
          setTimeout(() => {
            // Simulate success
            resolve();
            // Simulate an error
            // reject(new Error('Failed to submit preferences'));
          }, 1000);
        });
      };

    return (
        <form
        // eslint-disable-next-line @typescript-eslint/no-misused-promises
        onSubmit={handleSubmit}>
        <Box className={classes.container}>
            <Box className={classes.root}>
                <Typography variant="subtitle1"><em>First question! Do you use the Metric or Imperial system when measuring temperatures?</em></Typography>
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
                    onChange={(event: unknown, value: unknown) => setCommute(value as string)}
                    renderInput={(params) => <TextField {...params} 
                    label="Commute Method" 
                    />}
                />
            </Box>
            <Box className={classes.root}>
                <Typography variant="subtitle1"><em>How do you protect yourself when it&apos;s raining?</em></Typography>
                <Autocomplete
                    disablePortal
                    options={rainProtection}
                    sx={{ width: 300 }}
                    onChange={(event: unknown, value: unknown) => setLightRain(value as string)}
                    renderInput={(params) => <TextField {...params} 
                    label="Light Rain" 
                    />}
                />
                <Autocomplete
                    disablePortal
                    options={rainProtection}
                    sx={{ width: 300 }}
                    onChange={(event: unknown, value: unknown) => setHeavyRain(value as string)}
                    renderInput={(params) => <TextField {...params} 
                    label="Heavy Rain" 
                    />}
                />
            </Box>
            <Box className={classes.root}>
                <Typography variant="subtitle1"><em>Are you ready to generate your results?</em></Typography>
                <Button className={classes.submitButton} variant="contained" type="submit">Generate</Button>
            </Box>
            </Box>
        </form>
    )
}

export default SurveyPage

