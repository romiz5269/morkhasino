import AddUser from 'Components/users/add-user/AddUser'
import { useNotif } from 'hooks/toast/useNotif';
import MainLayout from 'Layout'
import React from 'react'
import { useSelector } from 'react-redux';
import { useNavigate } from 'react-router-dom';

const ManagerAddUserPage = () => {
  const navigate = useNavigate();
  const AddUserStatus = useSelector(state => state.users.status)
  useNotif(AddUserStatus,true)
  return (
      <MainLayout managerLayout={true}>
        <AddUser editmode={false} />
      </MainLayout>

  )
}

export default ManagerAddUserPage
