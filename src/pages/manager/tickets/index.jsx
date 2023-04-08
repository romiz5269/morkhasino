import Tickets from 'Components/tickets/Tickets'
import MainLayout from 'Layout'
import React from 'react'

const ManagerTicketsPage = () => {
  return (
    <MainLayout managerLayout={true}>
      <Tickets />
    </MainLayout>
  )
}

export default ManagerTicketsPage
