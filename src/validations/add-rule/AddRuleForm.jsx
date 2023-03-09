import innerAddRuleForm from "Components/forms/add-rule/innerAddRuleForm";
import { withFormik } from "formik";
import * as yup  from 'yup'

const addRuleFormValidation = yup.object({
    description:yup.string().min(8,'حداقل شامل 8 حرف باشد')
})

const AddRuleForm = withFormik({
    mapPropsToValues:props=>({
        description:""
    }),
    validationSchema:addRuleFormValidation,
    handleSubmit:(values,{props})=>{
        console.log(values)
    }
})(innerAddRuleForm)

export default AddRuleForm;