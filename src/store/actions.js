import { push } from "connected-react-router";

export const signIn = () => dispatch => {
  return new Promise(resolve =>
    setTimeout(() => {
      console.log("Go!");
      dispatch(push("/user"));
    }, 3000)
  );
};
