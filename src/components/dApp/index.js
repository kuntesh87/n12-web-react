import React from 'react';
import { Grid, Typography, Avatar } from '@material-ui/core';
import useStyles from './styles';

export default function DApp(props) {
  const { dApp } = props;
  const classes = useStyles();
    
  return (
      <div>
        <Grid
          container
          spacing={2}
          direction="column"
          justify="flex-end"
          alignItems="center"
        >
       <Grid item xs={12} >
            <Avatar alt={dApp.dApp.name} src={dApp.dApp.logoUrl} className={classes.large} />
          </Grid>
          <Grid item xs={12} >
            <Typography gutterBottom variant="h5" component="h5">
                {dApp.dApp.name}
            </Typography>
          </Grid>
          <Grid item xs={12} >
            <Typography variant="body2" color="textSecondary" component="p">
            {dApp.dApp.description}
            </Typography> 
              </Grid>  
          </Grid>    
    </div>
  )
}