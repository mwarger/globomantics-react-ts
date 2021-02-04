import * as React from "react";
import { gql, useQuery, useMutation } from "@apollo/client";
import "./style-sessions.css";
import { useParams, Link } from "react-router-dom";
import { Formik, Form, Field } from "formik";
import { AuthContext } from "../../context/AuthProvider";

const SESSIONS = gql`
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

const SESSION_BY_ID = gql`
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

const CREATE_SESSION = gql`
  mutation createSession($session: SessionInput) {
    createSession(session: $session) {
      id
      title
    }
  }
`;

const TOGGLE_FAVORITE = gql`
  mutation ToggleFavorite($sessionId: ID!) {
    toggleFavoriteSession(sessionId: $sessionId) {
      id
      favorites {
        id
      }
    }
  }
`;

function SessionItem({ session }) {
  const { isAuthenticated } = React.useContext(AuthContext);
  const [toggle] = useMutation(TOGGLE_FAVORITE, {
    variables: { sessionId: session.id },
  });

  const markFavorite = async () => {
    await toggle();
  };

  const { id, title, day, room, level, favorite, speakers = [] } = session;
  return (
    <div key={id} className="col-xs-12 col-sm-6" style={{ padding: 5 }}>
      <div className="panel panel-default">
        <div className="panel-heading">
          <h3 className="panel-title">{title}</h3>
        </div>
        <div className="panel-body">
          <h5>{`Day: ${day}`}</h5>
          <h5>{`Room Number: ${room}`}</h5>
          <h5>{`Level: ${level}`}</h5>
        </div>
        <div className="panel-footer">
          {isAuthenticated && (
            <span style={{ padding: 2 }}>
              <button
                type="button"
                className="btn btn-default btn-lg"
                onClick={markFavorite}
              >
                <i
                  className={`fa ${favorite ? "fa-star" : "fa-star-o"}`}
                  aria-hidden="true"
                  style={{
                    color: favorite ? "gold" : undefined,
                  }}
                ></i>{" "}
                Favorite
              </button>
            </span>
          )}
          {speakers.map(({ id, name }) => (
            <span key={id} style={{ padding: 2 }}>
              <Link
                className="btn btn-default btn-lg"
                to={`/conference/speakers/${id}`}
              >
                View {name}'s Profile
              </Link>
            </span>
          ))}
        </div>
      </div>
    </div>
  );
}

const SessionList = () => {
  const { loading, error, data } = useQuery(SESSIONS);

  if (loading) return <p>Loading...</p>;
  if (error) return <p>Error :(</p>;

  return data.sessions.map((session) => (
    <SessionItem
      key={session.id}
      session={{
        ...session,
        favorite: data.user?.favorites
          .map((favorite) => favorite.id)
          .includes(session.id),
      }}
    />
  ));
};

const SessionDetails = () => {
  const { session_id } = useParams();
  const { loading, error, data } = useQuery(SESSION_BY_ID, {
    variables: { id: session_id },
  });

  if (loading) return <p>Loading...</p>;
  if (error) return <p>Error :(</p>;

  const session = data.sessionById;
  if (!session) {
    return <div>No session.</div>;
  }

  return (
    <SessionItem
      session={{
        ...session,
        favorite: data.user?.favorites
          .map((favorite) => favorite.id)
          .includes(session.id),
      }}
    />
  );
};

export function Session() {
  return (
    <>
      <section className="banner">
        <div className="container">
          <div className="row">
            <SessionDetails />
          </div>
        </div>
      </section>
    </>
  );
}

export function Sessions() {
  return (
    <>
      <section className="banner">
        <div className="container">
          <div className="row" style={{ padding: 10 }}>
            <Link
              className="btn btn-primary btn-lg center-block"
              to={`/conference/sessions/new`}
            >
              Submit a Session!
            </Link>
          </div>
          <div className="row">
            <SessionList />
          </div>
        </div>
      </section>
    </>
  );
}

export function SessionForm() {
  const [create] = useMutation(CREATE_SESSION);

  return (
    <div
      style={{
        width: "100%",
        display: "flex",
        alignContent: "center",
        justifyContent: "center",
        padding: 10,
      }}
    >
      <Formik
        initialValues={{
          title: "",
          description: "",
          format: "",
          level: "",
        }}
        onSubmit={async (values) => {
          await create({ variables: { session: values } });
        }}
      >
        {() => (
          <Form style={{ width: "100%", maxWidth: 500 }}>
            <h3 className="h3 mb-3 font-weight-normal">Submit a Session!</h3>
            <div className="mb-3" style={{ paddingBottom: 5 }}>
              <label htmlFor="inputTitle">Title</label>
              <Field
                id="inputTitle"
                className="form-control"
                required
                autoFocus
                name="title"
              />
            </div>
            <div className="mb-3" style={{ paddingBottom: 5 }}>
              <label htmlFor="inputDescription">Description</label>
              <Field
                type="textarea"
                id="inputDescription"
                className="form-control"
                required
                name="description"
              />
            </div>
            <div className="mb-3" style={{ paddingBottom: 5 }}>
              <label htmlFor="inputFormat">Format</label>
              <Field
                name="format"
                id="inputFormat"
                className="form-control"
                required
              />
            </div>
            <div className="mb-3" style={{ paddingBottom: 5 }}>
              <label htmlFor="inputLevel">Level</label>
              <Field
                name="level"
                id="inputLevel"
                className="form-control"
                required
              />
            </div>
            <button className="btn btn-primary">Submit</button>
          </Form>
        )}
      </Formik>
    </div>
  );
}

export function AddSession() {
  return (
    <>
      <section className="banner">
        <div className="container">
          <div className="row">
            <SessionForm />
          </div>
        </div>
      </section>
    </>
  );
}
