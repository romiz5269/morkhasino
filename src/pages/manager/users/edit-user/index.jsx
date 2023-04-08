import AddUser from 'Components/users/add-user/AddUser';
import { useNotif } from 'hooks/toast/useNotif';
import MainLayout from 'Layout';
import React from 'react'
import { useSelector } from 'react-redux';
import { useNavigate } from 'react-router-dom';

const ManagerEditUserPage = () => {
    const navigate = useNavigate();
    const EditUserStatus = useSelector(state => state.users.status)
    useNotif(EditUserStatus,true)
    return (
        <MainLayout managerLayout={true}>
          <AddUser editmode={true} />
        </MainLayout>
  
    )
}

export default ManagerEditUserPage
