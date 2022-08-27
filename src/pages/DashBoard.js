import React from 'react'
import { Link } from 'react-router-dom';
import apiClient from "../api/http-common";


const DashBoard = (props) => {
  if (props.match.path === '/account-verification/:token') {
    apiClient.get("account-activation", {token: props.match.params.token});
  }

  // display user data from db
  const user = apiClient.get("user");
  console.log("user", user);

  

  return (
    <div>
      <h1>Account  Activated  </h1>
      <Link to="/login">Login</Link>
    </div>

  )
}

export default DashBoard;