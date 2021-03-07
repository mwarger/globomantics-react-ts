import React from "react";

interface UserData {
  role: "ADMIN" | "USER";
}

interface AuthInfo {
  userData: UserData | null;
}

interface AuthContextType {
  isAdmin: boolean;
  isAuthenticated: boolean;
  setAuthInfo: (authInfo: AuthInfo) => void;
  authInfo: AuthInfo;
}

export const AuthContext = React.createContext<undefined | AuthContextType>(
  undefined
);
const Provider = AuthContext.Provider;

export function AuthProvider({ children }: { children: React.ReactNode }) {
  const [authInfo, setAuthInfo] = React.useState<AuthInfo>({
    userData: null,
  });

  const isAuthenticated = authInfo.userData !== null;

  const isAdmin = authInfo.userData?.role === "ADMIN";

  function handleAuthInfo(authInfo: AuthInfo) {
    setAuthInfo(authInfo);
  }

  return (
    <Provider
      value={{
        authInfo,
        isAuthenticated,
        setAuthInfo: handleAuthInfo,
        isAdmin,
      }}
    >
      {children}
    </Provider>
  );
}

export function useAuthProvider() {
  const context = React.useContext(AuthContext);
  if (context === undefined) {
    throw new Error("useAuthProvider must be used within a AuthProvider");
  }
  return context;
}
