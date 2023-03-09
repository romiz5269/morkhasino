import Tickets from 'Components/tickets/Tickets'
import MainLayout from 'Layout'
import React from 'react'

const AdminTicketsPage = () => {
  return (
    <MainLayout adminLayout={true}>
        <Tickets />
    </MainLayout>
  )
}

export default AdminTicketsPage
