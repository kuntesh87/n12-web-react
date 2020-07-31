import React from 'react';
import { Typography,  Avatar, Button, Grid, ExpansionPanel, ExpansionPanelSummary, ExpansionPanelDetails } from '@material-ui/core';
import ExpandMoreIcon from '@material-ui/icons/ExpandMore';
import LabeledSwitch from '../../../components/labeled-switch';
import useStyles from './select-notifications.styles';
import { useSelector } from "react-redux";
import { Notification } from "../notification.slice";

export default function Confirm() {
    const classes = useStyles();
    const { selectedNotifications } = useSelector(Notification);    
    console.log('selectedNotifications', selectedNotifications);
    const data = [];
    const handleNext = () => {
        
    }
    
    return (
    <div> 
      {
        data ?
        <Grid
          container
          spacing={2}
          direction="column"
          justify="flex-end"
          alignItems="center"
        >
          <Grid item xs={12} >
            <Avatar alt={data.dApps.name} src={data.dApps.logoUrl} className={classes.large} />
          </Grid>
          <Grid item xs={12} >
            <Typography gutterBottom variant="h5" component="h5">
                {data.dApps.name}
            </Typography>
          </Grid>
          <Grid item xs={12} >
            <Typography variant="body2" color="textSecondary" component="p">
            {data.dApps.description}
            </Typography> 
          </Grid>
            {data.dApps.Notifications ? data.dApps.Notifications.map( notification => (
              <Grid item xs={12} >
                <LabeledSwitch title={notification.name}  value={notification.uuid} />
                <ExpansionPanel>
                  <ExpansionPanelSummary
                    expandIcon={<ExpandMoreIcon />}
                    aria-controls="panel1a-content"
                    id="panel1a-header"
                  >
                    <Typography className={classes.heading}>{notification.shortDescription}</Typography>
                  </ExpansionPanelSummary>
                  <ExpansionPanelDetails>
                    <Typography>
                      {notification.longDescription}
                    </Typography>
                  </ExpansionPanelDetails>
                </ExpansionPanel>
              </Grid>
            )) : 
              <Grid item xs={12} >
                <Typography variant="body" color="textSecondary" component="p">
                    No notifications
                </Typography> 
              </Grid> 
            }  
            <Grid item xs={12} >
              <Button variant="contained" color="primary" onClick ={()=>handleNext()}>
                Next
              </Button>
            </Grid>       
        </Grid>
        : console.log(error)      
      }
    </div>
  );
}
