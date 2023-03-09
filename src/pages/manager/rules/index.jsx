import MainLayout from 'Layout'
import React from 'react'
import AddRuleForm from 'Validations/add-rule/AddRuleForm'

const ManagerRulesPage = () => {
  return (
    <MainLayout managerLayout={true}>
      <AddRuleForm />
    </MainLayout>
  )
}

export default ManagerRulesPage
