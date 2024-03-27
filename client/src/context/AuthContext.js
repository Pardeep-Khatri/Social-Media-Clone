import { createContext, useEffect, useReducer } from "react";
import AuthReducer from "./AuthReducer";

const INITIAL_STATE = {
  user: JSON.parse(localStorage.getItem("user")) || null,
  //   _id: "628660e2dcfef5ff364dbeb5",
  //   username: "jaddu",
  //   email: "jaddu@gmail.com",
  //   profilePicture: "person/1.jpeg",
  //   coverPicture: "",
  //   followers: ["628661d3ce149e74a2d05336"],
  //   followings: ["628661d3ce149e74a2d05336"],
  // },
  isFetching: false,
  error: false,
};

export const AuthContext = createContext(INITIAL_STATE);

export const AuthContextProvider = ({ children }) => {
  const [state, dispatch] = useReducer(AuthReducer, INITIAL_STATE);

  useEffect(() => {
    localStorage.setItem("user", JSON.stringify(state.user));
  }, [state.user]);

  return (
    <AuthContext.Provider
      value={{
        user: state.user,
        isFetching: state.isFetching,
        error: state.error,
        dispatch,
      }}
    >
      {children}
    </AuthContext.Provider>
  );
};
