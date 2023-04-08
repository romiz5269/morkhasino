import {  withFormik } from "formik";
import InnerAddUserForm from "Components/forms/add-user/InnerAddUserForm";
import * as yup from 'yup'
import dayjs from "dayjs";
import { CreateUser, UpdateUser } from "Services/management/slices/userSlice";
import store from "Services/management/store/store";

const AddUserValidation = yup.object().shape({
    fullname:yup.string().required('نام کامل کاربر را وارد کنید'),
    phone:yup.string().required('شماره تلفن الزامی می باشد').matches(/^09(1[0-9]|3[1-9]|2[1-9])-?[0-9]{3}-?[0-9]{4}$/,'شماره همراه نامعتبر'),
    password:yup.string().required('کلمه عبور الزامی است'),
    email:yup.string().required('ایمیل خود را وارد کنید').matches(/^[\w-\.]+@([\w-]+\.)+[\w-]{2,4}$/g,'فرمت ایمیل وارد شده معتبر نیست'),
    start_employment:yup.string().required('ذکر تاریخ شروع قرارداد کاربر الزامی است'),
    end_employment:yup.string().required('ذکر تاریخ پایان قرارداد کاربر الزامی است'),
    status : yup.number().required('وضعیت کاربر را مشخص کنید'),
    role : yup.number().required('نقش کاربر را مشخص کنید')
})

const AddUserForm = withFormik({
    mapPropsToValues: props => ({
        fullname:props.editMode ? props?.singleUser[0]?.fullname : '',
        work_field:props.editMode ? props?.singleUser[0]?.work_field.id : '',
        phone:props.editMode ? props?.singleUser[0]?.phone : '',
        email:props.editMode ? props?.singleUser[0]?.email : '',
        password:'',
        role:props.editMode ? props?.singleUser[0]?.role?.id : '',
        start_employment: props.editMode ? props?.singleUser[0]?.start_employment : new Date(),
        end_employment: props.editMode ? props?.singleUser[0].end_employment : new Date(),
        status :props.editMode ? props?.singleUser[0]?.status.id : ''

    }),
    validationSchema:AddUserValidation,
    handleSubmit :(values,formikHelpers) =>{
        if(values.role === ""){
            values.role = 3
        }
        // if(values.work_field === ""){
        //     values.work_field = "کارآموز"
        // }
        values.start_employment = dayjs(values.start_employment).format('YYYY-MM-DD')
        values.end_employment = dayjs(values.end_employment).format('YYYY-MM-DD')
        console.log(values)
        if(formikHelpers.props.editMode){
            values.work_field = formikHelpers.props.singleUser[0]?.work_field?.id
           formikHelpers.props.userId &&
           store.dispatch(UpdateUser({id:formikHelpers.props.userId,data:values}))
           
           formikHelpers.resetForm()
        }else{
            console.log(formikHelpers)
            store.dispatch(CreateUser(values))
            formikHelpers.resetForm()
        }
       
    },
    
})(InnerAddUserForm)

export default AddUserForm