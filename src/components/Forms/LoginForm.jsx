import {Formik} from "formik";
import * as Yup from 'yup'
import Input from "../Input/Input";

const SignupSchema = Yup.object().shape({
    username: Yup.string()
        .min(2, 'too short!')
        .max(16, 'too long!')
        .required('required'),
    email: Yup.string().email('invalid email').required('required'),
    password: Yup.string()
        .min(6, 'too short!')
        .max(16, 'too long!')
        .required('required'),
});
 const RegisterForm = (props) => {
     return(
         <Formik
             initialValues={{username: '', email: '', password: ''}}
             validationSchema={SignupSchema}
             onSubmit={(values, {setSubmitting}) => {
                 setTimeout(() => {
                     alert(JSON.stringify(values, null, 2));
                     setSubmitting(false);
                 }, 400);
             }}
         >
             {({
                   values,
                   errors,
                   touched,
                   handleChange,
                   handleBlur,
                   handleSubmit,
                   isSubmitting,
               }) => (
                 <form onSubmit={handleSubmit} className={"flex flex-col px-16 py-6 w-1/2 border mx-auto"}>
                     <Input
                         inputChange={handleChange}
                         inputBlur={handleBlur}
                         inputValue={values.username}
                         inputName={"username"}
                         inputPlaceholder={"how should we call you?"}
                         inputTouched={touched.username}
                         inputError={errors.username}
                     />
                     <Input
                         inputChange={handleChange}
                         inputBlur={handleBlur}
                         inputValue={values.email}
                         inputName={"email"}
                         inputTouched={touched.email}
                         inputError={errors.email}
                     />
                     <Input
                         inputChange={handleChange}
                         inputBlur={handleBlur}
                         inputValue={values.password}
                         inputName={"password"}
                         inputTouched={touched.password}
                         inputError={errors.password}
                     />
                     <button className={"mx-auto mt-6 px-4 py-2 border-2 w-1/2"} type="submit" disabled={isSubmitting}>
                         Submit
                     </button>
                 </form>
             )}
         </Formik>
     )
 }

 export default RegisterForm
