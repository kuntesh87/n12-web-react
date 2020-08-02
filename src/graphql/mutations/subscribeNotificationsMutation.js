import gql from 'graphql-tag';

export const SUBSCRIBE_NOTIFICATIONS = gql`
  mutation subscribeNotificcations($email: String!, $dAppUuid: String!, $selectedNotifications: [String!]!) {
    subscribeNotificcations(email: $email,dAppUuid:$dAppUuid,selectedNotifications: $selectedNotifications){
    uuid
    userUuid
    dAppUuid
    notificationsUuid
  }
  }
`;