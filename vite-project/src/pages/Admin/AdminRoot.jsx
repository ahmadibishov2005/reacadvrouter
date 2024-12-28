import React from 'react'
import AdminNavbar from '../../components/Admin/AdminNavbar'
import AdminFooter from '../../components/Admin/AdminFooter'
import { Outlet } from 'react-router-dom'

function AdminRooter() {
  return (
    <>
    <AdminNavbar/>
    <Outlet/>
    <AdminFooter/>
    
    
    </>
  )
}

export default AdminRooter