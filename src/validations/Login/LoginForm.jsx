import { withFormik } from "formik";
import InnerLoginForm from "../../components/forms/Login/InnerLoginForm";
import * as yup from 'yup'

const LoginFormValidationSchema =yup.object().shape({
    phone_number:yup.string().required('شماره همراه خود را وارد کنید').matches(/^09(1[0-9]|3[1-9]|2[1-9])-?[0-9]{3}-?[0-9]{4}$/,'شماره نامعتبر می باشد'),
    password:yup.string().required('رمز عبور وارد نشده ').matches(
        /^(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9])(?=.*[!@#\$%\^&\*])(?=.{8,})/,
        "رمز عبور می بایست مجموعا حداقل 8 حرف  و شامل :  یک حرف بزرگ - یک حرف کوچک - یک عدد و یک کاراکتر خاص شود"
      ),
}) 
const LoginForm = withFormik({
    mapPropsToValues:props => ({
        phone_number:"",
        password:""
    }),
    validationSchema:LoginFormValidationSchema,
    handleSubmit:(values,{props}) =>{
        console.log(values)
    }
})(InnerLoginForm)

export default LoginForm