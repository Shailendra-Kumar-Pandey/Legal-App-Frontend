import React from 'react'
import { Navigate } from 'react-router-dom'

function ProtectRoute({children}) {

    let user = JSON.parse(localStorage.getItem('user')) || {};
    // const navigator = useNavigate()

    //         if(user.result.role === 'ADMIN'){
    //             navigator('/admin-dashboard')
    //           }else if(user.result.role === 'CLIENT'){
    //             navigator('/client-dashboard')
    //           }else if(user.result.role === 'LAWYER'){
    //             navigator('/lawyer-dashboard')
    //           }
    
    let isAuthentication = user?.token;
    
    console.log(isAuthentication)

    if(!isAuthentication){
      return <Navigate to='/' />
    }

  return children;
}

export default ProtectRoute;
