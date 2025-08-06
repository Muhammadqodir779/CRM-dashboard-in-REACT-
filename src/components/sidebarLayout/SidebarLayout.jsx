// components/SidebarLayout.jsx
import React from 'react'
import Sidebar from '../../pages/sidebar/Sidebar'
import { Outlet } from 'react-router-dom'

const SidebarLayout = () => {
  return (
    <Sidebar>
      <Outlet />
    </Sidebar>
  )
}

export default SidebarLayout
