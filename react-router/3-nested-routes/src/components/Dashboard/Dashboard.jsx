import React from 'react'
import { Link, Outlet } from 'react-router-dom'

export const Dashboard = () => {
  return (
    <div>
        <h2>Dashboard Layout</h2>
        <nav>
            <Link to="profile">Profile</Link>
            <Link to="setting">Settings</Link>
            <Link to="analytics">Analytics</Link>
        </nav>
        <hr />
        <Outlet />
        
    </div>
  )
}
