import React, { useEffect, useState } from 'react'
import { useLocation } from 'react-router-dom'
import TicketDetail from 'Components/tickets/ticket-detail/TicketDetail'
import MainLayout from 'Layout';

const TicketDetailPage = () => {
  const location = useLocation();
  const [test,setTest]=useState(null)
  useEffect(()=>{
    function beforeLoad(){
        alert('goh')
    }
    window.addEventListener('beforeunload',beforeLoad);
    if(test !== null ){
      beforeLoad()
    }

  },[])

  return (
    <MainLayout>
      <TicketDetail />
    </MainLayout>
  )
}

export default TicketDetailPage
