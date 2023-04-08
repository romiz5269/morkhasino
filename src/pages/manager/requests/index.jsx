import Requests from 'Components/requests/Requests'
import MainLayout from 'Layout'
import React from 'react'

const ManagerRequestsPage = () => {
  return (
    <MainLayout managerLayout={true}>
        <Requests />
    </MainLayout>
  )
}

export default ManagerRequestsPage
