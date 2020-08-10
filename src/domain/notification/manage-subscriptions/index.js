import React from 'react';
import { useQuery, useMutation } from '@apollo/client';
import { Typography, Button,Card, Grid,CircularProgress } from '@material-ui/core';import useStyles from './styles';
import { useDispatch } from "react-redux";
import { useHistory } from "react-router-dom";
import { useParams } from 'react-router-dom';
import { openSnackbar } from '../../../components/snackbar/snackbar.slice';
import { GET_SUBSCRIPTIONS } from '../../../graphql/queries/getSubscriptions';
import { UNSUBSCRIBE_NOTIFICATIONS } from '../../../graphql/mutations/unsubscribeNotifications';
import ErrorMessage from '../../../components/error-message';
import ListNotifications from '../../../components/list-notifications';
import DApp from '../../../components/dApp';

export default function ManageSubscriptions() {
  const classes = useStyles();
  const dispatch = useDispatch();
  let history = useHistory();
  const { userUuid } = useParams();
  const checkedNotifications = {};
  const { error, data, loading } = useQuery(GET_SUBSCRIPTIONS, {
    variables: { userUuid },
  });


  const [unSubscribeNotifications] = useMutation(UNSUBSCRIBE_NOTIFICATIONS, {
    onCompleted() {
      dispatch(openSnackbar({ message: "Succeeded. Notification Unsubscribed.", type: "success" }));
      history.push('/');
    },
    onError() {
      dispatch(openSnackbar({ message: "Unable to complete the request please try again", type: "error" }));
    }
  });

  const handleUnSubscribe = () => {
    // translate notification uuid to subscription uuid
    const subscriptionIds = [];
    data.UserSubscriptions.forEach(item => {
      if (checkedNotifications[item.Notification.uuid]) {
        subscriptionIds.push(item.uuid);
      }
    });
    unSubscribeNotifications({ variables: { userNotifications: subscriptionIds } });
  };

  const onChange = (event) => {
    checkedNotifications[event.target.value] = !checkedNotifications[event.target.value];
  };

  // loading data
  if (loading) {
    return <div className={classes.loadingWrapper} ><CircularProgress /></div>;
  }


  // error message
  if (error) {
    const message = error.message;
    return <ErrorMessage message={message} />;
  }

  // No Active Subscription
  if (Object.keys(data.UserSubscriptions).length === 0) {
    const message = "No Active Subscription";
    dispatch(openSnackbar({ message, type: "error" }));
    return <ErrorMessage message={message} />;
  }

  const dApps = {};
  const [userSubscription] = data.UserSubscriptions;
  const email = userSubscription.User.email;
  
  data.UserSubscriptions.forEach(item => {
    if (!dApps[item.dAppUuid]) {
      dApps[item.dAppUuid] = {
        dApp: item.DApp,
        notifications: []
      }
    }
    checkedNotifications[item.Notification.uuid] = false;
    dApps[item.dAppUuid].notifications.push(item.Notification);
  });

  return (
    <Card>
      {
        data ?
          <Grid
            container
            spacing={2}
            direction="column"
            justify="flex-end"
            alignItems="center"
          >
            {/* <Grid item xs={12} >
              <Avatar alt={data.dApps.name} src={data.dApps.logoUrl} className={classes.large} />
            </Grid> */}
            {/* <Grid item xs={12} >
              <Typography gutterBottom variant="h5" component="h5">
                {data.dApps.name}
              </Typography>
            </Grid> */}
            <Grid item xs={12} className={classes.headerWraper}>
              <Typography variant="body2" color="textSecondary" component="p">
                Please select the notifications to unsubscribe
            </Typography>
            </Grid>
            <Grid item xs={12} >
              <Typography variant="body2" color="textSecondary" component="p">
                {email}
              </Typography>
            </Grid>
            {

              Object.values(dApps).map(dApp => {
                return (
                  <div>
                    <DApp dApp ={dApp} />  
                    <ListNotifications notifications={dApp.notifications} onChange={onChange} />
                  </div>
                )
              })              
            }
            <Grid item xs={12} >
              <Button variant="contained" color="primary" onClick={handleUnSubscribe}>
                UnSubscribe
              </Button>
            </Grid>
          </Grid>
          : console.log(error)
      }
    </Card>
  );
}