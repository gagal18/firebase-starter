import {Formik} from "formik";
import * as Yup from 'yup'
import Input from "../Input/Input";
import { signInWithEmailAndPassword } from "firebase/auth";
import {auth} from "../../config/firebase";
import {useState} from "react";
import {useNavigate} from "react-router-dom";

const LoginSchema = Yup.object().shape({
    email: Yup.string()
        .min(2, 'too short!')
        .max(50, 'too long!')
        .required('required'),
    password: Yup.string()
        .min(6, 'too short!')
        .max(16, 'too long!')
        .required('required'),
});
 const LoginForm = (props) => {
     let navigate = useNavigate();
     const [loading, setLoading] = useState(false)
     const [error, setError] = useState(false)
     const handleLogin = async (email, password, reset) => {
         try {
             const res = await signInWithEmailAndPassword(auth, email, password)
             navigate('/profile')
             console.log(res)
         } catch (err) {
             console.log(err)
             setError(true)
         }

         reset();
         setLoading(false)


     }
     return(
         <Formik
             initialValues={{email: '',password: ''}}
             validationSchema={LoginSchema}
             onSubmit={(values, {setSubmitting, resetForm}) => {
                 setLoading(true)
                 console.log(loading)
                 handleLogin(values.email, values.password, resetForm)

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
                         {loading ? "submitting..." : "submit"}
                     </button>
                     {error ? <span className={"text-red-600 text-xs"}>Something went wrong, please try again!</span> : null}
                 </form>
             )}
         </Formik>
     )
 }

 export default LoginForm
