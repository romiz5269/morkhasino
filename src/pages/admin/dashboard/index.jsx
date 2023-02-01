import React from 'react'
import AdminDashboard from '../../../components/admin-dashboard/AdminDashboard'
import MainLayout from '../../../layout'

const AdminDashboardPage = () => {
  return (
    <MainLayout adminLayout={true}>
      <AdminDashboard />
    </MainLayout>
  )
}

export default AdminDashboardPage
