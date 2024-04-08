import React from "react";
import "../../../Components/User/SignupPage/SignupPage.css";
import { Link } from "react-router-dom";
import { useFormik } from "formik";
import { useNavigate } from "react-router-dom";
import { signup } from "../../../Services/UserApi";
import * as yup from "yup";

function SignupPage() {
  const navigate = useNavigate()
  const initialValues = {
    username: "",
    email: "",
    password: "",
    confirmPassword: ""
  };

  const validationSchema = yup.object().shape({
    username: yup.string().required("Username is required"),
    email: yup.string().email("Invalid Email").required("Email is Required"),
    password: yup
      .string()
      .min(6, "Password should be at least 6 characters long")
      .required("Please enter your Password"),
    confirmPassword: yup
      .string()
      .oneOf([yup.ref('password'), null], "Passwords must match")
      .required("Confirm Your Password")
  });

  const onSubmit = async (values) => {
    console.log(values);
    const { data } = await signup(values);
    navigate("/login")
  };

  const formik = useFormik({
    initialValues,
    validationSchema,
    onSubmit,
  });

  // const goTologin=()=>{
  //   navigate('/login')
  // }

  return (
    <>
      <div className='signup-page'>
        <h1>Sign Up</h1>
        <form onSubmit={formik.handleSubmit}>
          <div className='signup-form'>
            <div className='brand-name'>
              <h1>PHONE!X</h1>
            </div>

            <div className='form-group'>
              <input
                type="text"
                name="email"
                id="signupEmail"
                placeholder="Enter your email address"
                value={formik.values.email}
                onChange={formik.handleChange}
                onBlur={formik.handleBlur}
              />
              {formik.touched.email && formik.errors.email && (
                <p className="error-msg" style={{ color: 'red' }}>{formik.errors.email}</p>
              )}
            </div>
            <div className='form-group'>
              <input
                type="text"
                name="username"
                id="signupName"
                placeholder="Enter your username"
                value={formik.values.username}
                onChange={formik.handleChange}
                onBlur={formik.handleBlur}
              />
              {formik.touched.username && formik.errors.username && (
                <p className="error-msg" style={{ color: 'red' }}>{formik.errors.username}</p>
              )}

            </div>
            <div className='form-group'>
              <input
                type="password"
                name="password"
                id="signupPassword"
                placeholder="Enter your password"
                value={formik.values.password}
                onChange={formik.handleChange}
                onBlur={formik.handleBlur}
              />
              {formik.touched.password && formik.errors.password && (
                <p className="error-msg" style={{ color: 'red' }}>{formik.errors.password}</p>
              )}

            </div>
            <div className='form-group'>
              <input
                type="password"
                name="confirmPassword"
                id="signupConfirmPassword"
                placeholder="Confirm your password"
                value={formik.values.confirmPassword}
                onChange={formik.handleChange}
                onBlur={formik.handleBlur}
              />
              {formik.touched.confirmPassword && formik.errors.confirmPassword && (
                <p className="error-msg" style={{ color: 'red' }}>{formik.errors.confirmPassword}</p>
              )}

            </div>
            <div className='signup-btn'>
              <button type='submit' disabled={formik.isSubmitting}>Sign Up</button>
            </div>
            <div className='login-p'>
              <p>If you already have a phone!X account?</p>
            </div>
            <div className='login-link'>
              <Link to="/login">
                <h4>Login</h4>
              </Link>
            </div>
          </div>
        </form>
      </div>
    </>
  );
}

export default SignupPage;
