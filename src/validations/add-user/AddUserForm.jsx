import { withFormik } from "formik";
import InnerAddUserForm from "Components/forms/add-user/InnerAddUserForm";



const AddUserForm = withFormik({
    mapPropsToValues: props => ({
        fullname:'',
        field:'',
        phone_number:'',
        email:'',
        start_date:'',
        end_date:'',
        file:[]
    }),
    handleSubmit :(values,{props}) =>{
        console.log(values)
    }
})(InnerAddUserForm)

export default AddUserForm