import { useMutation, useQuery } from "@vue/apollo-composable";
import { JOIN_MUTATION } from "@api/users/users.queries";
import { LOGIN_MUTATION, ME_QUERY } from "./users.queries";

const useUser = () => {
  const join = async ({ email, username, password }) => {
    try {
      const { mutate, loading } = useMutation(JOIN_MUTATION);
      if (!loading) return null;

      const {
        data: { join },
      } = await mutate({
        email,
        username,
        password,
      });
      return join;
    } catch (e) {
      console.error("[join]", e);
    }
  };

  const login = async ({ email, password }) => {
    try {
      const { mutate, loading } = useMutation(LOGIN_MUTATION);
      if (!loading) return null;

      const {
        data: { login },
      } = await mutate({
        email,
        password,
      });
      return login;
    } catch (e) {
      console.error("[login]", e);
    }
  };

  const me = () => {
    try {
      const { result } = useQuery(ME_QUERY);
      return result;
    } catch (e) {
      console.error("[me]", e);
    }
  };

  return {
    join,
    login,
    me,
  };
};

export default useUser;
