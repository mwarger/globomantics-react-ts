import { gql } from "@apollo/client";

export const CREATE_SESSION = gql`
  mutation createSession($session: SessionInput) {
    createSession(session: $session) {
      id
      title
    }
  }
`;
