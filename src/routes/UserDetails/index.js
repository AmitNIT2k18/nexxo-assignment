import React from 'react'
import { useLocation, useNavigate  } from "react-router-dom";

const UserDetails = () => {
  const location = useLocation();
  const navigate = useNavigate();

  const {state: {userObj}} = location

  const goBack = () => {
    navigate('/');
  }
  return (
    <div>
      <h1>User Details</h1>
      <div style={{textAlign: 'left', padding: 20}}>
        <div><b>Id:</b> {userObj.id}</div>
        <div><b>Firstname:</b> {userObj.first_name}</div>
        <div><b>Lastname:</b> {userObj.last_name}</div>
        <div><b>Email:</b> {userObj.email}</div>
        <div><b>Avatar:</b> {userObj.avatar}</div>
      </div>
      <button onClick={goBack}>Go Back</button>
    </div>
  )
}

export default UserDetails