import * as React from "react";
import { useQuery } from "@apollo/client";
import { useParams } from "react-router-dom";
import { SessionItem } from "./SessionItem";
import { SESSION_BY_ID } from "./SESSION_BY_ID";

function useSessionData(id) {
  const [result, setResult] = React.useState();
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
  const { session_id } = useParams();
  const { loading, error, data } = useSessionData(session_id);
  // const { loading, error, data } = useQuery(SESSION_BY_ID, {
  //   variables: { id: session_id },
  // });

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
