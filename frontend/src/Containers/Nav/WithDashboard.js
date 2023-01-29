import React from 'react'
import DashboardComponent from '../Components/DashboardComponent'
import { Navigate } from 'react-router-dom'

const WithDashboard = ({ component }) => {

  const checkValidToken = () => {
    const token = localStorage.getItem('token');
    if (token) { return true } else { return false; }
  }

  const checkIfIsAdmin = () => {
    const adminPath = ["/userManagment", "/manageWorkDay", '/createUser']
    const path = window.location.pathname
    const loggedUser = JSON.parse(localStorage.getItem('loggedUser'));
    if (loggedUser?.role_id === 1) {
      return true
    }
    else {
      if (adminPath.includes(path)) {
        return false
      }
      else {
        return true
      }
    }
  }

  return (
    <div>{checkValidToken() ?
      <>
        {checkIfIsAdmin() ? <DashboardComponent component={component} /> : <Navigate to="/work" />}
      </>
      : <Navigate to="/" />}</div>
  )
}

export default WithDashboard