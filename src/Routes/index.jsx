import CreateTicket from 'Components/tickets/add-ticket/CreateTicket'
import Requests from 'Components/requests/Requests'
import { AdminPages, ManagerPages, RootPages, UsersPages } from 'Configs/Pages/Pages.config'
import AdminUsers from 'Pages/admin/users'
import ManagerDashboard from 'Pages/manager/dashboard/ManagerDashboard'
import NotFound from 'Pages/not-found'
import React from 'react'
import { BrowserRouter as Router,Routes,Route, Navigate } from 'react-router-dom'
import AddUserPage from 'Pages/admin/users/add-user/AddUserPage'
import LoginPage from 'Pages/login'
import TicketDetailPage from '../Pages/user/detail-ticket/TicketDetailPage'
import PrivateRoute from './Private/PrivateRoute'
import ProtectedRoute from './protected/ProtectedRoute'
import AdminDashboardPage from 'Pages/admin/dashboard/AdminDashboardPage'
import UserDashboard from 'Pages/user/dashboard'
import VacationPage from 'Pages/user/vacation'
import TicketsPage from 'Pages/user/tickets'
import CreateTicketPage from 'Pages/user/tickets/add-ticket/CreateTicketPage'
import AdminRequestsPage from 'Pages/admin/requests'
import DenyAccess from 'Pages/deny-access/DenyAccess'
import AdminTicketsPage from 'Pages/admin/tickets'
import AdminDetailTicketPage from 'Pages/admin/tickets/detail-ticket'
import ManagerRequestsPage from 'Pages/manager/requests'
import ManagerUsersPage from 'Pages/manager/users'
import ManagerAddUserPage from 'Pages/manager/users/add-user'
import ManagerTicketsPage from 'Pages/manager/tickets'
import ManagerDetailTicketPage from 'Pages/manager/tickets/detail'
import ManagerRulesPage from 'Pages/manager/rules'
import ManagerDetailRequestPage from 'Pages/manager/requests/detail'

const MainRoute = () => {
  
  return (
    <Router>
      <Routes>

        {/* redirect to login */}

        <Route path={RootPages.ROOT} element={<Navigate to={RootPages.LOGIN} />} />
        
        {/* user routing  */}

        <Route path='user' element={<PrivateRoute role={"user"} />} >

          <Route path={UsersPages.PANEL} element={<UserDashboard />}  />
          <Route path={UsersPages.VACATION} element={<VacationPage />}  />
          <Route path={UsersPages.TICKETS} element={<TicketsPage />}  />
          <Route path={UsersPages.ADD_TICKET} element={<CreateTicketPage />}  />
          <Route path={UsersPages.SINGLE_TICKET} element={<TicketDetailPage />}  />

        </Route>

        {/* admin routing */}

        <Route path='admin' element={<PrivateRoute role={"admin"} />}>

          <Route path='/admin' element={<Navigate to={AdminPages.DASHBOARD} />} />
          <Route path={AdminPages.DASHBOARD} element={<AdminDashboardPage />} />
          <Route path={AdminPages.REQUESTS} element={<AdminRequestsPage />} />
          <Route path={AdminPages.SINGLE_REQUEST} element={<Requests />} />
          <Route path={AdminPages.TICKETS} element={<AdminTicketsPage />} />
          <Route path={AdminPages.ADD_TICKET} element={<CreateTicket />} />
          <Route path={AdminPages.SINGLE_TICKET} element={<AdminDetailTicketPage />} />
          <Route path={AdminPages.SHOW_USERS} element={<AdminUsers />} />
          <Route path={AdminPages.ADD_USER} element={<AddUserPage />} />
          <Route path={AdminPages.EDIT_USER} element={<AddUserPage />} />

        </Route>


        {/*  super admin routing */}

        <Route path='manager' element={<PrivateRoute role={"manager"} />} >

          <Route path='/manager' element={<Navigate to={ManagerPages.DASHBOARD} />} />
          <Route path={ManagerPages.DASHBOARD} element={<ManagerDashboard />} />
          <Route path={ManagerPages.SHOW_USERS} element={<ManagerUsersPage />} />
          <Route path={ManagerPages.ADD_USER} element={<ManagerAddUserPage />} />
          <Route path={ManagerPages.EDIT_USER} element={<ManagerAddUserPage />} />
          <Route path={ManagerPages.REQUESTS} element={<ManagerRequestsPage />} />
          <Route path={ManagerPages.SINGLE_REQUEST} element={<ManagerDetailRequestPage />} />
          <Route path={ManagerPages.TICKETS} element={<ManagerTicketsPage />} />
          <Route path={ManagerPages.SINGLE_TICKET} element={<ManagerDetailTicketPage />} />
          <Route path={ManagerPages.RULE} element={<ManagerRulesPage />} />

        </Route>

        {/* login route */}

        <Route path='login' element={<ProtectedRoute />} >
          <Route path={RootPages.LOGIN} element={<LoginPage />} />
        </Route>

        <Route path='/deny' element={<DenyAccess />} />
        <Route path='/*' element={<NotFound />} />
      </Routes>
    </Router>
  )
}

export default MainRoute
