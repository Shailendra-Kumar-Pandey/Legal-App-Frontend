import React from 'react'
import { Navigate } from 'react-router-dom'

function ProtectRoute({children}) {

    let user = JSON.parse(localStorage.getItem('user')) || {};
    

    if(!user || !user.token){
      return <Navigate to='/' />
    }

  return children;
}

export default ProtectRoute;
