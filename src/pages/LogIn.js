import React from "react";
import apiClient from "../api/http-common";
import { useNavigate } from "react-router-dom";
import { Formik ,Field ,ErrorMessage } from 'formik';
import { toast, ToastContainer } from "react-toastify";
import './LogInForm.css'

const LogIn = () => {
    const navigate = useNavigate()
    
    const handleSubmit = async (values) => {
        try {
            const response = await apiClient.post("login", JSON.stringify({
              email: values.email,
              password: values.password
            }));
            console.log("login data", response);
            const message = response.data.message;
            toast.success(message, { autoClose: 3000, position: "top-right",  });
            // get the token from the response
            // const token = response.data.token;
            // console.log("token...", token);
            // // set the token in the local storage
            // localStorage.setItem("token", token);
            // // redirect to the home page
            // navigate("/");
        }
        catch (error) {
            if (!error.response) {
                toast.error("Network Error");
            } else if (error.response.status === 400) {
                toast.error(error.response.data.error);
            } else if (error.response.status === 401) {
                toast.error(error.response.data.error);
            } else {
                toast.error("Unknown Issue");
            }
        }
    }

  return (
    <div className="login_container">
      <div className="image-container"/>
      <div className="form-container">
      <div className="sign-up-container">
      <div className="sign-up-text-container">
          <h1>Welcome</h1>
        <div className="sign-up-text">
          <h2>The YENTs portal is your gateway to crypto</h2>
          <h2>With your YENT wallet you can buy crypto without the hussle of managing your private keys</h2>
          <h2>Sign up now to find out how</h2>
        </div>
      </div>
      <div className="sign-up-form-container">
        <div className="sign-up-form">
          <h1>Login</h1>
          <h3><span>Login</span></h3>
           <Formik initialValues={{ email: "", password: ""}} onSubmit={handleSubmit} validator={() => ({})}>
               {({isSubmitting, submitForm}) => (
                   <form>
                       <Field type="email" name="email" placeholder="Email" />
                       <ErrorMessage name="email" component="div" />
                       <Field type="password" name="password" placeholder="Password" />
                       <ErrorMessage name="password" component="div" />
                       <div className="terms-container">
                           <input type="checkbox" name="terms" className="checkbox"/>
                           <label htmlFor="terms">I agree to the <span>Terms of Service</span> and <span>Privacy Policy</span></label>
                       </div>
                       <button className="submit-button" onClick={submitForm} disabled={isSubmitting}>Submit</button>
                   </form>)}
           </Formik>
        </div>
      </div>
    </div>
      </div>
        <ToastContainer />
    </div>
  );
};

export default LogIn;

