import React from 'react'
import TicketDetail from '../../../components/ticket-detail/TicketDetail'
import MainLayout from '../../../layout'

const TicketDetailPage = () => {
  return (
    <MainLayout adminLayout={false}>
        <TicketDetail />
    </MainLayout>
  )
}

export default TicketDetailPage
