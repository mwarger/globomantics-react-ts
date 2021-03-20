import * as React from "react";
import { useQuery } from "@apollo/client";
import { useParams } from "react-router-dom";
import { SessionItem } from "./SessionItem";
import { SESSION_BY_ID } from "./SESSION_BY_ID";
import { sessionInfo, sessionInfoVariables } from "../../../graphql-types";

function useSessionData(id: string) {
  const [result, setResult] = React.useState<
    | undefined
    | {
        sessionById: {
          id: string;
          title: string;
          day: string;
          room: string;
          level: string;
          speakers: {
            id: string;
            name: string;
          }[];
          user: {
            id: string;
            favorites: {
              id: string;
            }[];
          };
        };
      }
  >();
  const [loading, setLoading] = React.useState(true);
  const [error, setError] = React.useState(null);

  React.useEffect(() => {
    function getData() {
      setLoading(true);
      fetch("/graphql", {
        headers: {
          "Content-Type": "application/json",
          Accept: "application/json",
        },
        method: "POST",
        credentials: "same-origin",
        body: JSON.stringify({
          query: `query sessionInfo($id: ID!) {
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
        }`,
          variables: { id },
        }),
      })
        .then(data => {
          return data.json();
        })
        .then(result => {
          console.log("result", result.data);
          setResult(result.data);
        })
        .catch(err => {
          setError(err);
        })
        .finally(() => {
          setLoading(false);
        });
    }

    getData();
  }, []);

  return { loading, error, data: result };
}

export function SessionDetails() {
  const { session_id } = useParams<{ session_id: string }>();
  // const { loading, error, data } = useSessionData(session_id);
  const { loading, error, data } = useQuery<sessionInfo, sessionInfoVariables>(
    SESSION_BY_ID,
    {
      variables: { id: session_id },
    }
  );

  if (loading) return <p>Loading...</p>;
  if (error) return <p>Error :(</p>;

  if (data === undefined) {
    return null;
  }

  const session = data.sessionById;

  if (!session) {
    return <div>No session found.</div>;
  }

  const favorites = data.user?.favorites ?? [];
  return (
    <SessionItem
      session={{
        ...session,
        favorite: favorites.map(favorite => favorite.id).includes(session.id),
      }}
    />
  );
}
