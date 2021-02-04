import * as React from "react";
import {
  Switch,
  Route,
  Link,
  useRouteMatch,
  Redirect,
  useHistory,
} from "react-router-dom";
import { Form, Formik, Field } from "formik";
import { useMutation, gql } from "@apollo/client";
import { AuthContext } from "../../context/AuthProvider";
import { useContext } from "react";

function FormLayout({ children }) {
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
      <div style={{ width: "100%", maxWidth: 500 }}>{children}</div>
    </div>
  );
}

const AuthForm = ({ onSubmit, children }) => (
  <Formik initialValues={{ email: "", password: "" }} onSubmit={onSubmit}>
    <Form className="form-signin">
      <div className="mb-3" style={{ paddingBottom: 5 }}>
        <label htmlFor="inputEmail">Email address</label>
        <Field
          name="email"
          type="email"
          id="inputEmail"
          className="form-control"
          required
          autoFocus
        />
      </div>

      <div className="mb-3" style={{ paddingBottom: 5 }}>
        <label htmlFor="inputPassword">Password</label>
        <Field
          name="password"
          type="password"
          id="inputPassword"
          className="form-control"
          required
        />
      </div>
      <button className="btn btn-lg btn-primary btn-block" type="submit">
        {children}
      </button>
    </Form>
  </Formik>
);

const signUpMutation = gql`
  mutation signUpUser($email: String!, $password: String!) {
    signUp(credentials: { email: $email, password: $password }) {
      user {
        id
        email
      }
    }
  }
`;

function SignUpForm() {
  const history = useHistory();
  const [signUpUser] = useMutation(signUpMutation);
  const [error, setError] = React.useState("");

  const authContext = useContext(AuthContext);

  const handleSubmit = async (values) => {
    try {
      const {
        data: { signUp },
      } = await signUpUser({ variables: values });
      authContext.setAuthInfo({ userData: signUp.user });
      history.push("/conference");
    } catch (error) {
      console.log("error", error);
      setError(error.message);
    }
  };

  return (
    <FormLayout>
      <span>
        <h1 className="h3 mb-3 font-weight-normal">Sign Up</h1>
        <h6>
          Already have an account? <Link to={`/auth/sign-in`}>Sign In</Link>
        </h6>
      </span>
      <AuthForm onSubmit={handleSubmit}>Sign up</AuthForm>
      {error && <p style={{ color: "red" }}>{error}</p>}
    </FormLayout>
  );
}

const signInMutation = gql`
  mutation signInUser($email: String!, $password: String!) {
    signIn(credentials: { email: $email, password: $password }) {
      user {
        id
        email
      }
    }
  }
`;

function SignInForm() {
  const [signInUser] = useMutation(signInMutation);
  const history = useHistory();
  const [error, setError] = React.useState("");

  const authContext = useContext(AuthContext);

  const handleSubmit = async (values) => {
    try {
      const {
        data: { signIn },
      } = await signInUser({ variables: values });
      authContext.setAuthInfo({ userData: signIn.user });
      history.push("/conference");
    } catch (error) {
      console.log("error", error);
      setError(error.message);
    }
  };

  return (
    <FormLayout>
      <span>
        <h1 className="h3 mb-3 font-weight-normal">Sign In</h1>
        <h6>
          Need an account? <Link to={`/auth/sign-up`}>Sign Up</Link>
        </h6>
      </span>
      <AuthForm onSubmit={handleSubmit}>Sign in</AuthForm>
      {error && <p style={{ color: "red" }}>{error}</p>}
    </FormLayout>
  );
}

export function Auth() {
  const { path, url } = useRouteMatch();

  return (
    <>
      <Switch>
        <Route path={`${path}/sign-in`}>
          <SignInForm />
        </Route>
        <Route path={`${path}/sign-up`}>
          <SignUpForm />
        </Route>
        <Route path={`${path}`}>
          <Redirect to={`${url}/sign-in`} />
        </Route>
      </Switch>
    </>
  );
}
