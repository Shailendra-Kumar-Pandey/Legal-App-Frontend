import React from 'react'
import { Navigate } from 'react-router-dom'

function ProtectRoute({children}) {

    let isAuthentication = localStorage.getItem('token');

    if(!isAuthentication){
      return <Navigate to='/' />
    }

  return children;
}

export default ProtectRoute;
