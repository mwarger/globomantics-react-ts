import * as React from "react";
import { useQuery, gql } from "@apollo/client";
import { SessionItem } from "./SessionItem";

export const SESSIONS = gql`
  query sessions {
    sessions {
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

export function SessionList() {
  const { loading, error, data } = useQuery(SESSIONS);

  if (loading) return <p>Loading...</p>;
  if (error) return <p>Error :(</p>;

  return data.sessions.map(session => (
    <SessionItem
      key={session.id}
      session={{
        ...session,
        favorite: data.user?.favorites
          .map(favorite => favorite.id)
          .includes(session.id),
      }}
    />
  ));
}
