import { withFormik } from "formik";
import InnerLoginForm from "Components/forms/Login/InnerLoginForm";
import * as yup from 'yup'
import store from "Services/management/store/store";
import { UserLogin } from "Services/management/slices/userSlice";

const LoginFormValidationSchema =yup.object().shape({
    phone:yup.string().required('شماره همراه خود را وارد کنید').matches(/^09(1[0-9]|3[1-9]|2[1-9])-?[0-9]{3}-?[0-9]{4}$/,'شماره نامعتبر می باشد'),
    password:yup.string().required('رمز عبور وارد نشده ').matches(
        /^(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9])(?=.*[!@#\$%\^&\*])(?=.{8,})/,
        "رمز عبور می بایست مجموعا حداقل 8 حرف  و شامل :  یک حرف بزرگ - یک حرف کوچک - یک عدد و یک کاراکتر خاص شود"
      ),
}) 
const LoginForm = withFormik({
    mapPropsToValues:props => ({
        phone:"",
        password:""
    }),
    handleSubmit:(values,{props}) =>{
        store.dispatch(UserLogin(values))
        console.log('done')
    }
})(InnerLoginForm)

export default LoginForm