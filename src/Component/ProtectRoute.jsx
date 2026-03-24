import React from 'react'
import { Navigate } from 'react-router-dom'

function ProtectRoute({children}) {

    let user = JSON.parse(localStorage.getItem('user')) || {};
    let isAuthentication = user?.token;
    
    console.log(isAuthentication)

    if(!isAuthentication){
      return <Navigate to='/' />
    }

  return children;
}

export default ProtectRoute;
