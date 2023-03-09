import AddUser from 'Components/users/add-user/AddUser';
import MainLayout from 'Layout';
import React from 'react'
import { useNavigate } from 'react-router-dom';

import AddUserForm from 'Validations/add-user/AddUserForm'

const AddUserPage = () => {
  const navigate = useNavigate();
  return (
      <MainLayout adminLayout={true}>
        <AddUser />
      </MainLayout>

  )
}

export default AddUserPage
