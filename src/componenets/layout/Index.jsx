import React from 'react'
import Navbar from './Navbar'
import { Outlet } from 'react-router'

const Layout = () => {
  return (
    <div>
          <Navbar />
          <Outlet/>
    </div>
  )
}

export default Layout;
