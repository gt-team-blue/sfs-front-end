import axios from "axios";
import setAuthToken from "../utils/setAuthToken";
import jwt_decode from "jwt-decode";
// import {
//   GET_ERRORS,
//   SET_CURRENT_USER,
//   USER_LOADING
// } from "./types";
// Register User
export const registerUser = (userName, password) => dispatch => {
     const userData = {name: userName, password: password};
  axios
    .post("/api/users/register", userData)
    .then(res => console.log(userData + "\nRegistered!")) // re-direct to login on successful register "history.push("/login")"
    .catch(err =>
      dispatch({
        payload: err.response.data
      })
    );
};