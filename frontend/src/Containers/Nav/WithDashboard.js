import React from 'react'
import DashboardComponent from '../Components/DashboardComponent'

const WithDashboard = ({component}) => {
  return (
    <div><DashboardComponent component={component} /></div>
  )
}

export default WithDashboard