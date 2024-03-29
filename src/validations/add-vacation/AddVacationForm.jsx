import { withFormik } from 'formik'
import React from 'react'
import InnerAddVacation from 'Components/forms/add-vacation/InnerAddVacation'



const AddVacationForm = withFormik({
    mapPropsToValues:props => ({
        type:"",
        vacation:[
            {
                date:"",
                timestamp1:"",
                timestamp2:"",
                fullday:"",
                description:""
            }
        ],
        file:[]

    }),
    // validationSchema:LoginFormValidationSchema,
    handleSubmit:(values,{props}) =>{
        console.log(values)
    }
})(InnerAddVacation)

export default AddVacationForm
