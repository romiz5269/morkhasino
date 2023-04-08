import Requests from 'Components/requests/Requests'
import MainLayout from 'Layout'
import React from 'react'

const AdminRequestsPage = () => {
  return (
    <MainLayout adminLayout={true}>
      <Requests />
    </MainLayout>
  )
}

export default AdminRequestsPage
