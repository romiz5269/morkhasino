import React from 'react'
import { BrowserRouter as Router,Routes,Route, Navigate } from 'react-router-dom'
import CreateTicketPage from '../pages/add-ticket/CreateTicketPage'
import LoginPage from '../pages/login'
import PanelPage from '../pages/panel'
import TicketsPage from '../pages/tickets'
import VacationPage from '../pages/vacation'
import PrivateRoute from './Private/PrivateRoute'
import ProtectedRoute from './protected/ProtectedRoute'
const MainRoute = () => {
  return (
    <Router>
      <Routes>
        <Route path='/' element={<Navigate to={'/login'} />} />
        <Route path='panel' element={<PrivateRoute />} >
          <Route path='/panel' element={<PanelPage />}  />
          <Route path='/panel/vacation' element={<VacationPage />}  />
          <Route path='/panel/tickets' element={<TicketsPage />}  />
          <Route path='/panel/tickets/create' element={<CreateTicketPage />}  />
        </Route>
        <Route path='/login' element={<ProtectedRoute><LoginPage /></ProtectedRoute>} />
      </Routes>
    </Router>
  )
}

export default MainRoute
