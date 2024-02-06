import React, { Children } from 'react'
import { useSelector } from 'react-redux'
import { Navigate } from 'react-router-dom';

export const PrivateRoute = ({children}) => {
    const {token}=useSelector((state)=>state.auth);
    console.log("From private Route",token)

    if(token!==null){
        return children
    }
    else{
        return <Navigate to="/login"/>
    }
  
}
