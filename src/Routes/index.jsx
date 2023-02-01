import RequestsPage from 'pages/admin/requests/RequestsPage'
import ManagerDashboardPage from 'pages/manager/dashboard/ManagerDashboardPage'
import React from 'react'
import { BrowserRouter as Router,Routes,Route, Navigate } from 'react-router-dom'
import AddUserPage from '../pages/admin/add-user/AddUserPage'
import AdminDashboardPage from '../pages/admin/dashboard'
import LoginPage from '../pages/login'
import CreateTicketPage from '../pages/user/add-ticket/CreateTicketPage'
import TicketDetailPage from '../pages/user/detail-ticket/TicketDetailPage'
import PanelPage from '../pages/user/panel'
import TicketsPage from '../pages/user/tickets'
import VacationPage from '../pages/user/vacation'

import AdminRoute from './admin/AdminRoute'
import PrivateRoute from './Private/PrivateRoute'
import ProtectedRoute from './protected/ProtectedRoute'
const MainRoute = () => {
  return (
    <Router>
      <Routes>

        {/* redirect to login */}
        <Route path='/' element={<Navigate to={'/login'} />} />

        {/* user routing  */}

        <Route path='panel' element={<PrivateRoute />} >
          <Route path='/panel' element={<PanelPage />}  />
          <Route path='/panel/vacation' element={<VacationPage />}  />
          <Route path='/panel/tickets' element={<TicketsPage />}  />
          <Route path='/panel/tickets/create' element={<CreateTicketPage />}  />
          <Route path='/panel/tickets/detail/:id' element={<TicketDetailPage />}  />
        </Route>

        {/* admin routing */}

        <Route path='admin' element={<AdminRoute />}>
          <Route path='/admin' element={<Navigate to={'/admin/dashboard'} />} />

          <Route path='/admin/dashboard' element={<AdminDashboardPage />} />
          <Route path='/admin/dashboard/add-user' element={<AddUserPage />} />
          <Route path='/admin/requests' element={<RequestsPage />} />
          <Route path='/admin/requests/:id' element={<RequestsPage />} />
        </Route>


        {/*  super admin routing */}
        <Route path='manager' element={<AdminRoute />} >
          <Route path='/manager' element={<Navigate to={'/manager/dashboard'} />} />
          <Route path='/manager/dashboard' element={<ManagerDashboardPage />} />
        </Route>

        {/* login route */}
        <Route path='/login' element={<ProtectedRoute><LoginPage /></ProtectedRoute>} />

      </Routes>
    </Router>
  )
}

export default MainRoute
