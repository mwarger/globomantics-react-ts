import * as React from "react";
import { useQuery } from "@apollo/client";
import { useParams } from "react-router-dom";
import { SessionItem } from "./SessionItem";
import { SESSION_BY_ID } from "./SESSION_BY_ID";

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
