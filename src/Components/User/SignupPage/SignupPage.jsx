import "./SignupPage.css";
import {Link} from "react-router-dom"
import { Formik, Form, Field, ErrorMessage } from 'formik';


const InitialValues={
username: "",  
email:"",  
password:"",  
confirmPassword:"" 
};
const ValidateForm= (values) =>{
    const error = {};
     if (!values.username || values.username.length <3 ) {ErrorMessage.username="Username must be at least 3 characters long"}
     else if (!/^\d{6}$/i.test(values.username)){ErrorMessage.username='please enter a valid username'}
     
     if (!values.email){ ErrorMessage.email="Required";}
     else if(!/\S+@\S+\.\S+/.test(values.email)) {ErrorMessage.email ="Email is not valid"}

     if (!values.password.length<8){ErrorMessage.password="must be at 8 charecters"}

    if(!values.confirmPassword){ErrorMessage.confirmPassword="required"}
    else if(values.password!==values.confirmPassword)
    {ErrorMessage.confirmPassword="doesn't match the password"}

    return ErrorMessage;

    }
  
    

function SignupPage() {

  
    const handleSubmit= (values,{setSubmitting})=>{
      console.log(values)
      setSubmitting(false);
    }

  

  return (
   <><div className='signup-page'>
      <h1>Sign Up</h1>
      <Formik
      initialValues={InitialValues}
      onSubmit={handleSubmit}
      validate={ValidateForm}>
        {({isSubmitting})}=>(

          <Form>
          
         <div className='signup-form'>
          <div className='brand-name'> 
          <h1>PHONE!X</h1>
          </div>
 
       
          <div className='form-group'>
            <input
              type='email'
              name='email'
              value={email}
              placeholder='Email'

            />
            
            <ErrorMessage name="email" component="div"/>
          </div>
          <div className='form-group'>
            <input
              type='text'
              name='username'
              value={username}
              placeholder='Username'
            />
            <ErrorMessage name="username" component="div"/>
          </div>
          <div className='form-group'>
            <input
              type='password'
              name='password'
              value={password}
              placeholder='Password'
            />
            <ErrorMessage name="password" component="div"/>
          </div>
          <div className='form-group'>
            <input
              type='password'
              name='confirmPassword'
              value={confirmPassword}
              placeholder='Confirm Password'
            />
            <ErrorMessage name="confirmPassword" component={PasswordMatch}/>
          </div>
          <div className='signup-btn'>
          <button type='submit'>Sign Up </button>
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
    )
  </Formik>
  </div>
  </>
);


export default SignupPage;
