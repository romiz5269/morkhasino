import { withFormik } from "formik";
import InnerAddTicketForm from "../../components/forms/add-ticket/InnerAddTicketForm";





const AddTicketForm = withFormik({
    mapPropsToValues:props=>({
        title:'',
        type:'',
        prority:'',
        description:'',
        file:[]
    }),
    handleSubmit:(values,{props})=>{
        console.log(values)
    }
})(InnerAddTicketForm)

export default AddTicketForm