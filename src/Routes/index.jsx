import CreateTicket from 'components/add-ticket/CreateTicket'
import AdminDashboard from 'components/admin-dashboard/AdminDashboard'
import Dashboard from 'components/dashboard'
import Requests from 'components/requests/Requests'
import Tickets from 'components/tickets/Tickets'
import Vacation from 'components/vacation/Vacation'
import ManagerDashboard from 'pages/manager/dashboard/ManagerDashboard'
import NotFound from 'pages/not-found'
import React from 'react'
import { BrowserRouter as Router,Routes,Route, Navigate } from 'react-router-dom'
import AddUserPage from '../pages/admin/add-user/AddUserPage'
import LoginPage from '../pages/login'
import TicketDetailPage from '../pages/user/detail-ticket/TicketDetailPage'


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

          <Route path='/panel' element={<Dashboard />}  />
          <Route path='/panel/vacation' element={<Vacation />}  />
          <Route path='/panel/tickets' element={<Tickets />}  />
          <Route path='/panel/tickets/create' element={<CreateTicket />}  />
          <Route path='/panel/tickets/detail/:id' element={<TicketDetailPage />}  />

        </Route>

        {/* admin routing */}

        <Route path='admin' element={<PrivateRoute />}>

          <Route path='/admin' element={<Navigate to={'/admin/dashboard'} />} />
          <Route path='/admin/dashboard' element={<AdminDashboard />} />
          <Route path='/admin/dashboard/add-user' element={<AddUserPage />} />
          <Route path='/admin/requests' element={<Requests />} />
          <Route path='/admin/requests/:id' element={<Requests />} />
          <Route path='/admin/tickets' element={<Tickets />} />
          <Route path='/admin/tickets/create' element={<CreateTicket />} />

        </Route>


        {/*  super admin routing */}
        <Route path='manager' element={<PrivateRoute />} >

          <Route path='/manager' element={<Navigate to={'/manager/dashboard'} />} />
          <Route path='/manager/dashboard' element={<ManagerDashboard />} />

        </Route>

        {/* login route */}
        <Route path='/login' element={<ProtectedRoute><LoginPage /></ProtectedRoute>} />


        <Route path='/*' element={<NotFound />} />
      </Routes>
    </Router>
  )
}

export default MainRoute
