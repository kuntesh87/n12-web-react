import React, { useState } from 'react';
import {Container,CssBaseline,TextField,Button, Typography} from '@material-ui/core';
import useStyles from './email.styles';
import { useDispatch } from "react-redux";
import { updateEmail } from '.././notification.slice';
import { useHistory } from "react-router-dom";

export default function Email() {
  const classes = useStyles();
  const dispatch = useDispatch();
  const [email, setEmail] = useState('');
  const [isEmailError, setIsEmailError] = useState(false);
  let history = useHistory();  
    
  const handleNext = (e) => {
    e.preventDefault();
    if (email !== '') {
      try {
        dispatch(updateEmail(email));  
        history.push("/confirm")     
      } catch (err) {
        setIsEmailError(true);       
      }
    } else {
      if (email === '') {
        setIsEmailError(true);       
      }
    }    
    setEmail('');        
    }
    return (
        <Container component="main" maxWidth="xs">
            <CssBaseline />
            <form className={classes.form} noValidate>
                <Typography gutterBottom variant="h5" component="h2">
                 Where would you like to receive the notifications?
                </Typography>
                <TextField
                    error={isEmailError}
                    helperText={isEmailError ?'Invalid Email.':''}
                    variant="outlined"
                    margin="normal"
                    required
                    fullWidth
                    id="email"
                    label="Email Address"
                    name="email"
                    autoComplete="email"
                    autoFocus
                    value={email}
                    onChange={(e)=>setEmail(e.target.value)}
                />
                <Button variant="contained" color="primary" onClick ={handleNext}>
                        Next
                </Button>
            </form>
        </Container>
    );
}