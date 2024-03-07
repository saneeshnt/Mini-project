import React from 'react';
import { Link } from 'react-router-dom';
import { Formik, Form, Field, ErrorMessage } from 'formik';
import '../../../Components/User/LoginPage/LoginPage.css'

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
   <> <div className="login-page">
      <h1>Log in</h1>
      <Formik
        initialValues={initialValues}
        onSubmit={handleSubmit}
        validate={validateForm}
      >
        {({ isSubmitting }) => (
          <Form>
            <div className="login-form">
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
            <div className='signup-p'>
        <p>If you don't have an phone!X account?</p>
      </div>
      <div className='signup-link'>
        <Link to="/signup">
          <h4>SignUp</h4>
        </Link>
      </div>
          </Form>
        )}
      </Formik>
    
   
  
    </div>
    </>
  );
}

export default LoginPage;
