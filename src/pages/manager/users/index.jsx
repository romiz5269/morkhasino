import Users from 'Components/users/Users'
import MainLayout from 'Layout'
import React from 'react'

const ManagerUsersPage = () => {
  return (
    <MainLayout managerLayout={true}>
        <Users />
    </MainLayout>
  )
}

export default ManagerUsersPage
