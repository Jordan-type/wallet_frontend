import React from 'react'
import { useNavigate } from 'react-router-dom'
import { ErrorMessage, Field, Formik } from 'formik'
import { toast, ToastContainer } from 'react-toastify'
import apiClient from "../api/http-common";
import 'react-toastify/dist/ReactToastify.css'


const AccountActivation = () => { 
    const navigate = useNavigate()

    const handleSubmit = async (values) => {
        try {
            const response = await apiClient.post("account-activation", JSON.stringify({
                token: values.token
            }));
            console.log("signup data", response);
            toast.success(response.data.message);
            // get activation token from email
            const token = await apiClient.get("account-activation", {token: response.data.token});
            console.log("token...", token);
            // set the token in the local storage
            localStorage.setItem("token", token);
            // redirect to the home page
            navigate("/DashBoard");
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
    <div>
        AccountActivation 
    </div>
  )
}

export default AccountActivation