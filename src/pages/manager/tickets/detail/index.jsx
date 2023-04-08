import TicketDetail from 'Components/tickets/ticket-detail/TicketDetail'
import MainLayout from 'Layout'
import React from 'react'

const ManagerDetailTicketPage = () => {
  return (
    <MainLayout managerLayout={true}>
      <TicketDetail />
    </MainLayout>
  )
}

export default ManagerDetailTicketPage
