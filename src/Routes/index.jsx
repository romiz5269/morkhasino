import React from 'react'
import { BrowserRouter as Router,Routes,Route } from 'react-router-dom'
import LoginPage from '../pages/login'
import PanelPage from '../pages/panel'
import PrivateRoute from './Private/PrivateRoute'
import ProtectedRoute from './protected/ProtectedRoute'
const MainRoute = () => {
  return (
    <Router>
      <Routes>
        <Route path='panel' element={<PrivateRoute />} >
          <Route path='/panel' element={<PanelPage />}  />
        </Route>
        <Route path='/login' element={<ProtectedRoute><LoginPage /></ProtectedRoute>} />
      </Routes>
    </Router>
  )
}

export default MainRoute
