import React from "react";
import apiClient from "../api/http-common";
import { useNavigate } from "react-router-dom";
import { ErrorMessage, Field, Formik } from "formik";
import { toast, ToastContainer } from "react-toastify";
import DashBoard from "./DashBoard";
import "./SignUpForm.css";

const SignUp = () => {

  const navigate = useNavigate();

  const handleSubmit = async (values) => {
    
    try {
      const response = await apiClient.post("signup", JSON.stringify({ 
        firstName: values.firstname, 
        lastName: values.lastname, 
        email: values.email, 
        username: values.username,
        phoneNumber: values.phonenumber,
        password: values.password, 
        repeatPassword: values.repeatPassword 
      }));
  
      console.log("signup data", response);
  

        toast.success(response.data.message);
        // get activation token from email
        
        // const token = await apiClient.get("account-activation", {token: response.data.token});
        // console.log("token...", token);
        // // set the token in the local storage
        // localStorage.setItem("token", token);
        // redirect to the home page
        // navigate("/DashBoard");

    }
    catch (error) {
      if (!error.response) {
        toast.error("Network Error "+error);
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
      <div className="image-container" />
      <div className="form-container">
        <div className="sign-up-container">
          <div className="sign-up-text-container">
            <h1>Welcome</h1>
            <div className="sign-up-text">
              <h2>The YENTs portal is your gateway to crypto</h2>
              <h2>
                With your YENT wallet you can buy crypto without the hussle of managing your private keys
              </h2>
              <h2>Sign up now to find out how</h2>
            </div>
          </div>
          <div className="sign-up-form-container">
            <div className="sign-up-form">
              <h1>Sign up</h1>
              <h3>
                Register for an account or if you don't have one or{" "}
                <span>Sign in</span>
              </h3>
              <Formik
                initialValues={{
                  firstname: "",
                  lastname: "",
                  email: "",
                  username: "",
                  phonenumber: "",
                  password: "",
                  repeatPassword: "",
                }}
                onSubmit={handleSubmit}
              >
                {({ isSubmitting, submitForm }) => (
                  <form>
                    <Field type="text" name="firstname" placeholder="Firstname" />
                    <ErrorMessage name="firstname" component="div" />

                    <Field type="text" name="lastname" placeholder="Lastname" />
                    <ErrorMessage name="lastname" component="div" />

                    <Field type="email" name="email" placeholder="Email" />
                    <ErrorMessage name="email" component="div" />

                    <Field type="text" name="username" placeholder="Usernme" />
                    <ErrorMessage name="username" component="div" />
                    <Field type="number" name="phoneNumber" placeholder="Phone Number" />

                    <ErrorMessage name="phoneNumber" component="div" />
                    <Field type="password" name="password" placeholder="Create Password" />

                    <ErrorMessage name="password" component="div" />
                    <Field type="password" name="repeatPassword" placeholder="Repeat Password"/>
                    <ErrorMessage name="password" component="div" />

                    <div className="terms-container">
                      <input type="checkbox" name="terms" className="checkbox" />
                      <label htmlFor="terms">
                        I agree to the <span>Terms of Service</span> and{" "} <span>Privacy Policy</span>
                      </label>
                    </div>
                    <button  className="submit-button" onClick={submitForm} disabled={isSubmitting}>Submit </button>
                  </form>
                )}
              </Formik>
            </div>
          </div>
        </div>
      </div>
      <ToastContainer />
    </div>
  );
};

export default SignUp;
