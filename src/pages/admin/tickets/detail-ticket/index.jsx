import TicketDetail from 'Components/tickets/ticket-detail/TicketDetail'
import MainLayout from 'Layout'
import React from 'react'

const AdminDetailTicketPage = () => {
  return (
    <MainLayout adminLayout={true}>
      <TicketDetail />
    </MainLayout>
  )
}

export default AdminDetailTicketPage
