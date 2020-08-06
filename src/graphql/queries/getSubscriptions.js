import { gql } from '@apollo/client';

export const GET_SUBSCRIPTIONS = gql`
  query getUserSubscriptions($userUuid: String!) {
    getUserSubscriptions(userUuid: $userUuid ){
      uuid
      dAppUuid,
      userUuid,
      Notification{
        name
        shortDescription
        longDescription
      },
      DApp{
        name
        logoUrl
      },
      User{
        email
      }
    }
  }
`;