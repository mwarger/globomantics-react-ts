import * as React from "react";
import { useQuery } from "@apollo/client";
import { useParams } from "react-router-dom";
import { SessionItem } from "./SessionItem";
import { sessionById, sessionByIdVariables } from "../../../../graphql-types";
import { SESSION_BY_ID } from "./SESSION_BY_ID";

export function SessionDetails() {
  const { session_id } = useParams<{ session_id: string }>();
  const { loading, error, data } = useQuery<sessionById, sessionByIdVariables>(
    SESSION_BY_ID,
    {
      variables: { id: session_id },
    }
  );

  if (loading) return <p>Loading...</p>;
  if (error) return <p>Error :(</p>;

  if (!data) {
    return <div>No session for ID {session_id}.</div>;
  }

  const session = data.sessionById;

  if (!session) {
    return <div>No session for ID {session_id}.</div>;
  }

  const favorites = data.user?.favorites ?? [];

  const favorite = favorites.map(favorite => favorite.id).includes(session.id);

  return (
    <SessionItem
      session={{
        ...session,
        favorite,
      }}
    />
  );
}
