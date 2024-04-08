import React from 'react';
import '../../../Components/Admin/LoginPage/LoginPage.css';
import { useFormik } from 'formik';
import * as Yup from 'yup';
import { Link, useNavigate } from 'react-router-dom';
import { toast } from 'react-toastify';
import { login } from '../../../Services/AdminApi'


function LoginPage() {
  const navigate = useNavigate();

  const validationSchema = Yup.object().shape({
    email: Yup.string()
      .email("Invalid email address")
      .required("Email is required"),
    password: Yup.string().required("Password is required"),
  });

  const formik = useFormik({
    initialValues: {
      email: "",
      password: "",
    },
    validationSchema: validationSchema,
    onSubmit: async (values) => {
      try {
        console.log("On Submit !!!");
        const { data } = await login(values);
        console.log(data, "Admin Return Data !!!");
        if (data.created) {
          localStorage.setItem("jwt", data.token);
          toast.success("Login Success", { position: "top-right" });
          navigate("/admin/home");
        } else {
          toast.error(data.message, { position: "top-right" });
        }
      } catch (error) {
        console.log(error)
      }
    }
  });


  return (
    <> <div className="admin-login-page">
      <h1>Admin LogIn</h1>

      <form onSubmit={formik.handleSubmit}>
        <div className="admin-login-form">
          <div className='brand-name'>
            <h1>PHONE!X</h1>
          </div>
          <div className="form-group">
            <input
              type="email"
              id="email"
              name="email"
              placeholder="Email address"
              className="mail"
              value={formik.values.email}
              onChange={formik.handleChange}
            />
            {formik.errors.email && <div className="error">{formik.errors.email}</div>}
          </div>
          <div className="form-group">
            <input
              type="password"
              id="password"
              name="password"
              placeholder="Password"
              className="pswd"
              value={formik.values.password}
              onChange={formik.handleChange}
            />
            {formik.errors.password && <div className="error">{formik.errors.password}</div>}
          </div>
          <div className='login-btn'>
            <button type="submit">Log in</button>
          </div>
        </div>

      </form>





    </div>
    </>
  );
}

export default LoginPage;
