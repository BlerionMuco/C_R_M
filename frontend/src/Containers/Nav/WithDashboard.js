import React from 'react'
import DashboardComponent from '../Components/DashboardComponent'
import { Navigate } from 'react-router-dom'

const WithDashboard = ({component}) => {
  const checkValidToken = () => {
    const token = localStorage.getItem('token');
    if (token) { return true } else { return false; }
  }
  return (
    <div>{checkValidToken() ? <DashboardComponent component={component} /> : <Navigate to="/" /> }</div>
  )
}

export default WithDashboard