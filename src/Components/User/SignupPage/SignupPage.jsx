import React from "react";
import "../../../Components/User/SignupPage/SignupPage.css";
import { Link } from "react-router-dom";
import { Formik, Form, Field, ErrorMessage } from 'formik';
import { signup } from "../../../Services/UserApi";


const InitialValues = {
  username: "",
  email: "",
  password: "",
  confirmPassword: ""
};

const ValidateForm = (values) => {
  const errors = {};

  if (!values.email) {  errors.email = "Required";}
  if (!/\S+@\S+\.\S+/.test(values.email)) {
    errors.email = "Email is not valid";
  }
  if(!values.username){errors.username="Username required"}
  else if(values.username.length<5){errors.username="Must be at least 5 characters long.";}

 
 
  if(!values.password){errors.password="password required"}
 else if (!(values.password.length >= 8)) {
    errors.password = "must be at least 8 characters";
  }

 
   if (values.password !== values.confirmPassword) {
    errors.confirmPassword = "doesn't match the password";
  }

  return errors;
};



const SignupPage=()=> {

  const handleSubmit = async(values) => {
    console.log(values);
     const {data} = await signup(values );
  };


  return (
    <>
      <div className='signup-page'>
        <h1>Sign Up</h1>
        <Formik
          initialValues={InitialValues}
          onSubmit={handleSubmit}
          validate={ValidateForm}
        >
          {({ isSubmitting }) => (
            <Form>

              <div className='signup-form'>
                <div className='brand-name'>
                  <h1>PHONE!X</h1>
                </div>


                <div className='form-group'>
                  <Field
                    type='email'
                    name='email'
                    placeholder='Email'
                  />
                  <ErrorMessage name="email" component="div" />
                </div>
                <div className='form-group'>
                  <Field
                    type='text'
                    name='username'
                    placeholder='Username'
                  />
                  <ErrorMessage name="username" component="div" />
                </div>
                <div className='form-group'>
                  <Field
                    type='password'
                    name='password'
                    placeholder='Password'
                  />
                  <ErrorMessage name="password" component="div" />
                </div>
                <div className='form-group'>
                  <Field
                    type='password'
                    name='confirmPassword'
                    placeholder='Confirm Password'
                  />
                  <ErrorMessage name="confirmPassword" component="div" />
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
