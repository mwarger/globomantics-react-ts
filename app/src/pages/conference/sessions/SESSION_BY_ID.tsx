import { gql } from "@apollo/client";

export const SESSION_BY_ID = gql`
  query sessionByIdQuery($id: ID!) {
    sessionById(id: $id) {
      id
      title
      day
      room
      level
      speakers {
        id
        name
      }
    }
    user: me {
      id
      favorites {
        id
      }
    }
  }
`;
