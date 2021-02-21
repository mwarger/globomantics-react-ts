import * as React from "react";
import { useQuery, gql } from "@apollo/client";
import { useParams } from "react-router-dom";
import { SessionItem } from "./SessionItem";

export const SESSION_BY_ID = gql`
  query sessionById($id: ID!) {
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

export function SessionDetails() {
  const { session_id } = useParams();
  const { loading, error, data } = useQuery(SESSION_BY_ID, {
    variables: { id: session_id },
  });

  if (loading) return <p>Loading...</p>;
  if (error) return <p>Error :(</p>;

  const session = data.sessionById;

  return (
    <SessionItem
      session={{
        ...session,
        favorite: data.user?.favorites
          .map(favorite => favorite.id)
          .includes(session.id),
      }}
    />
  );
}
