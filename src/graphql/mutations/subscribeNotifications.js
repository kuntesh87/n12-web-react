import gql from 'graphql-tag';

export const SUBSCRIBE_NOTIFICATIONS = gql`
  mutation subscribeNotifications($email: String!, $dAppUuid: String!, $selectedNotifications: [String!]!) {
    subscribeNotifications(email: $email,dAppUuid:$dAppUuid,selectedNotifications: $selectedNotifications){
    uuid
    userUuid
    dAppUuid
    notificationsUuid
  }
  }
`;