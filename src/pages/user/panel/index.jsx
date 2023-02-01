import React from 'react'
import MainLayout from '../../../layout'
import Dashboard from '../../../components/dashboard'
const PanelPage = () => {
  return (
    <MainLayout adminLayout={false}>
      <Dashboard />
    </MainLayout>
  )
}

export default PanelPage
