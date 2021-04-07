import { gql } from "@apollo/client";

export const POST_FRAGMENT = gql`
  fragment PostFragment on Post {
    id
    title
    file
    likes
    views
  }
`;

export const USER_FRAGMENT = gql`
  fragment UserFragment on User {
    id
    username
    isMe
  }
`;
