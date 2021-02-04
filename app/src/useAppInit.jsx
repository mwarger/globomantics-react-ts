import { useContext, useEffect } from "react";
import { useMutation, gql } from "@apollo/client";
import { AuthContext } from "./context/AuthProvider";

const userInfoMutation = gql`
  mutation userInfo {
    userInfo {
      user {
        id
        email
        role
      }
    }
  }
`;

export const useAppInit = () => {
  const [getUserInfo, { loading }] = useMutation(userInfoMutation);
  const { setAuthInfo } = useContext(AuthContext);

  useEffect(() => {
    const handleSession = async () => {
      try {
        const {
          data: { userInfo },
        } = await getUserInfo();
        setAuthInfo({ userData: userInfo.user });
      } catch (error) {
        console.log("error", error);
      }
    };

    handleSession();
  }, [setAuthInfo, getUserInfo]);

  return { loading };
};
