import Vacation from 'Components/vacation/Vacation'
import VacationDetailBox from 'Components/vacation/vacation-detail-box/VacationDetailBox'
import MainLayout from 'Layout'
import React from 'react'

const ManagerDetailRequestPage = () => {
  return (
    <MainLayout managerLayout={true}>
      <Vacation />
    </MainLayout>
  )
}

export default ManagerDetailRequestPage
