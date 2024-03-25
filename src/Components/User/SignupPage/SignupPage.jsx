import React from "react";
import "../../../Components/User/SignupPage/SignupPage.css";
import { Link } from "react-router-dom";
import { Formik, Form, Field, ErrorMessage } from 'formik';
import { signup } from "../../../Services/UserApi";
import * as yup from "yup"


function SignupPage(){
  const nav=useNav()
  const initialValues={
    name:"",
    email:"",
    password:"",
    confirmPassword:""
  }
  const validationSchema=yup.object().shape({
    name: yup.string().required("username is required"),
    email: yup.string().email("Invalid Email").required("Email is Required"),
    password : yup.string().min(6,"password should be at least 6 characters long")
                        .required("Please enter your Password"),
    confirmPassword : yup.string().oneOf([yup.ref('password'), null], "Passwords must match")
                        .required("Confirm Your Password")
  })
  const onSubmit=async (values)=>{
    console.log(values)
    const {data}=await signup(values)
  }
  const formik=useFormik({
    initialValues,
    validationSchema,
    onsubmit,
  })

  const goTologin=()=>{
    nav('/login')
  }

  


  return (
    <>
      <div className='signup-page'>
        <h1>Sign Up</h1>
       
          {({ isSubmitting }) => (
            <Form onSubmit={formik.handleSubmit}>

              <div className='signup-form'>
                <div className='brand-name'>
                  <h1>PHONE!X</h1>
                </div>


                <div className='form-group'>
                 <input type="text"
                 name="email"
                 id="signupEmail"
                 placeholder="enter your email address"
                 value={formik.values.email}
                 onChange={formik.handleChange}
                 onBlur={formik.handleBlur} />
                 {formik.touched.email&&formik.errors.email&&(
                  <p className="error-msg"
                  style={{color:'red'}}>{formik.errors.email}</p>

                 )}
                </div>
                <div className='form-group'>
                <input type="text"
                 name="name"
                 id="signupName"
                 placeholder="enter your username"
                 value={formik.values.name}
                 onChange={formik.handleChange}
                 onBlur={formik.handleBlur} />
                 {formik.touched.name&&formik.errors.name&&(
                  <p className="error-msg"
                  style={{color:'red'}}>{formik.errors.name}</p>
                  )}

                </div>
                <div className='form-group'>
                <input type="text"
                 name="password"
                 id="signupPassword"
                 placeholder="enter your password"
                 value={formik.values.password}
                 onChange={formik.handleChange}
                 onBlur={formik.handleBlur} />
                 {formik.touched.password&&formik.errors.password&&(
                  <p className="error-msg"
                  style={{color:'red'}}>{formik.errors.password}</p>
                 )}

                </div>
                <div className='form-group'>
                <input type="text"
                 name="email"
                 id="signupEmail"
                 placeholder="enter your email address"
                 value={formik.values.email}
                 onChange={formik.handleChange}
                 onBlur={formik.handleBlur} />
                 {formik.touched.email&&formik.errors.email&&(
                  <p className="error-msg"
                  style={{color:'red'}}>{formik.errors.email}</p>
                 )}

                </div>
                <div className='signup-btn'>
                  <button type='submit' disabled={isSubmitting}>Sign Up</button>
                </div>
                <div className='login-p'>
                  <p>If you already have an phone!X account?</p>
                </div>
                <div className='login-link'>
                  <Link to="/login">
                    <h4>Login</h4>
                  </Link>
                </div>
              </div>
            </Form>
          )}
        </Formik>
      </div>
    </>
  );
}

export default SignupPage;
