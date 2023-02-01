import Requests from 'components/requests/Requests'
import MainLayout from 'layout'
import React from 'react'

const RequestsPage = () => {
  return (
    <MainLayout adminLayout={true}>
      <Requests />
    </MainLayout>
  )
}

export default RequestsPage
