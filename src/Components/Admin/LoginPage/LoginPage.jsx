import React from 'react';
import '../../../Components/Admin/LoginPage/LoginPage.css';


import { Formik, Form, Field, ErrorMessage } from 'formik';

function LoginPage() {
  const initialValues = {
    username: '',
    password: '',
  };

  const handleSubmit = (values, { setSubmitting }) => {
    console.log(values);
    setSubmitting(false);
    // Here you can perform your login logic using the form values
  };

  const validateForm = (values) => {
    const errors = {};

    if (!values.username) {
      errors.username = 'Username is required';
    }

    if (!values.password) {
      errors.password = 'Password is required';
    }

    return errors;
  };

  return (
   <> <div className="admin-login-page">
      <h1>Admin LogIn</h1>
      <Formik
        initialValues={initialValues}
        onSubmit={handleSubmit}
        validate={validateForm}
      >
        {({ isSubmitting }) => (
          <Form>
            <div className="admin-login-form">
              <div className='brand-name'>
                <h1>PHONE!X</h1>
              </div>
              <div className="form-group">
                <Field
                  type="text"
                  id="username"
                  name="username"
                  placeholder="Username..."
                />
                <ErrorMessage name="username" component="div" className="error" />
              </div>
              <div className="form-group">
                <Field
                  type="password"
                  id="password"
                  name="password"
                  placeholder="Password..."
                />
                <ErrorMessage name="password" component="div" className="error" />
              </div>
              <div className='login-btn'>
                <button type="submit" disabled={isSubmitting}>Log in</button>
              </div>
            </div>
     
          </Form>
        )}
      </Formik>
    
   
  
    </div>
    </>
  );
}

export default LoginPage;
