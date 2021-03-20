import React, { useContext } from "react";
import { Link, useHistory } from "react-router-dom";
import { AuthContext, useAuthContext } from "./context/AuthProvider";
import { gql, useMutation } from "@apollo/client";

const signOutMutation = gql`
  mutation signOutUser {
    signOut {
      user {
        id
        email
      }
    }
  }
`;

export const AuthLink = ({ children }: { children: React.ReactNode }) => {
  const [signOutUser] = useMutation(signOutMutation);
  const { isAuthenticated, setAuthInfo } = useAuthContext();
  const history = useHistory();

  const handleSignOut = async () => {
    await signOutUser();
    setAuthInfo({ userData: null });
    history.push("/auth/sign-in");
  };

  return isAuthenticated ? (
    <Link onClick={handleSignOut} to="#">
      Sign Out
    </Link>
  ) : (
    <Link to="/auth/sign-in">{children}</Link>
  );
};
