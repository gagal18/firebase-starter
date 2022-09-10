import {Formik} from "formik";
import * as Yup from 'yup'
import Input from "../Input/Input";
import {createUserWithEmailAndPassword} from "firebase/auth";
import {auth, db} from "../../config/firebase";
import {useState} from "react";
import {doc, setDoc} from "firebase/firestore";
import { useNavigate } from 'react-router-dom';

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
    let navigate = useNavigate();

    const [loading, setLoading] = useState(false)
    const [error, setError] = useState(false)
    const handleRegister = async (email, password, username, reset) => {
        try {
            const res = await createUserWithEmailAndPassword(auth, email, password)
            console.log(res)
            await setDoc(doc(db, "users", res.user.uid), {
                username,
                email,
                uid: res.user.uid
            });
            navigate('/profile')
        } catch (err) {
            console.log(err)
            setError(true)
        }

        reset();
        setLoading(false)


    }
    return (
        <Formik
            initialValues={{username: '', email: '', password: ''}}
            validationSchema={SignupSchema}
            onSubmit={(values, {setSubmitting, resetForm}) => {
                setLoading(true)
                console.log(loading)

                handleRegister(values.email, values.password, values.username, resetForm)

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
                        {loading ? "submitting..." : "submit"}
                    </button>
                    {error ?
                        <span className={"text-red-600 text-xs"}>Something went wrong, please try again!</span> : null}
                </form>
            )}
        </Formik>
    )
}

export default RegisterForm
