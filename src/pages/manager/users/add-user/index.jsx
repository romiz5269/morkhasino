import AddUser from 'Components/users/add-user/AddUser'
import MainLayout from 'Layout'
import React from 'react'

const ManagerAddUserPage = () => {
  return (
    <MainLayout  managerLayout={true}>
        <AddUser />
    </MainLayout>
  )
}

export default ManagerAddUserPage
