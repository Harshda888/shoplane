import React, { useState } from "react";
import { useFormik } from "formik";
import * as Yup from "yup";
import axios from "axios";
import Endpoints from "../api/Endpoints";

const RegisterPage = () => {
  const [requestResponse, setRequestResponse] = useState({
    textMessage: "",
    alertClass: "",
  });
  const initialValues = {
    firstName: "",
    email: "",
    password: "",
    confirm_password: "",
  };

  const onSubmit = (values) => {
    axios
      .post(Endpoints.REGISTER_URL, values)
      .then(
        (response) => {
          setRequestResponse({
            textMessage: response.data.message,
            alertClass: "alert alert-success",
          });
        },
        (error) => {
          setRequestResponse({
            textMessage: error.response.data.message,
            alertClass: "alert alert-danger",
          });
        }
      )
      .catch((error) => console.log(error));
  };

  const validationSchema = Yup.object({
    firstName: Yup.string().required("first name is required")
    .min(2)
    .max(20),
    email: Yup.string()
      .required("email is required")
      .email("email must be a valid email"),
    password: Yup.string()
      .required("password is required")
      .min(6, "password must be at least 6 characters"),
      confirm_password: Yup.string()
      .required("password is required")
      .oneOf([Yup.ref('password'), null], "password must match")
  });

  const formik = useFormik({
    initialValues,
    onSubmit,
    validationSchema,
    validateOnMount: true,
  });
  return (
    <div className="container">
      <div className="row">
        <div className="col-md-3"></div>
        <div className="col-md-6">
          <div className="wrapper">
            <div class={requestResponse.alertClass} role="alert">
              {requestResponse.textMessage}
            </div>
            <h2>Register</h2>
            <hr />
            <form onSubmit={formik.handleSubmit}>


              <div className="form-group">
                <label htmlFor="">First Name</label> 
                <input
                  type="text"
                  className={
                    formik.touched.firstName && formik.errors.firstName
                      ? "form-control is-invalid"
                      : "form-control"
                  }
                  name="firstName"
                  value={formik.values.firstName}
                  onChange={formik.handleChange}
                  onBlur={formik.handleBlur}
                />
                {formik.touched.firstName && formik.errors.firstName ? (
                  <small className="text-danger">
                    {formik.errors.firstName}
                  </small>
                ) : null}
              </div>




              <div className="form-group">
                <label htmlFor="">Email</label>
                <input
                  type="text"
                  className={
                    formik.touched.email && formik.errors.email
                      ? "form-control is-invalid"
                      : "form-control"
                  }
                  name="email"
                  value={formik.values.email}
                  onChange={formik.handleChange}
                  onBlur={formik.handleBlur}
                />
                {formik.touched.email && formik.errors.email ? (
                  <small className="text-danger">{formik.errors.email}</small>
                ) : null}
              </div>



              <div className="form-group">
                <label htmlFor="">password</label>
                <input
                  type="text"
                  className={
                    formik.touched.password && formik.errors.password
                      ? "form-control is-invalid"
                      : "form-control"
                  }
                  name="password"
                  value={formik.values.password}
                  onChange={formik.handleChange}
                  onBlur={formik.handleBlur}
                />
                {formik.touched.password && formik.errors.password ? (
                  <small className="text-danger">{formik.errors.password}</small>
                ) : null}
              </div>




              <div className="form-group">
                <label htmlFor="">Confirm_Password</label>
                <input
                  type="confirm_password"
                  className={
                    formik.touched.confirm_password && formik.errors.confirm_password
                      ? "form-control is-invalid"
                      : "form-control"
                  }
                  name="confirm_password"
                  value={formik.values.confirm_password}
                  onChange={formik.handleChange}
                  onBlur={formik.handleBlur}
                />
                {formik.touched.confirm_password && formik.errors.confirm_password ? (
                  <small className="text-danger">
                    {formik.errors.confirm_password}
                  </small>
                ) : null}
              </div>

              <input
                type="submit"
                value="Register"
                className="btn btn-primary btn-block"
              />
            </form>
            <br />
            <p className="text-center">
              Already Registered <a href="/login">Click Here</a>
            </p>
          </div>
        </div>
        <div className="col-md-3"></div>
      </div>
    </div>
  );
};
export default RegisterPage;






{/* <div className="modal">
    <div className="modal-container">
        <h1 className="modal-left">Sign Up</h1>
    <form>
        <div className="input-block">
            <label htmlFor="name" className="input-label">
              Name
                </label>
                <input type="name" autoComplete="off" name="name" id="name" placeholder="Name"/>
                </div>
                
                <div className="input-block">
            <label htmlFor="email" className="input-label">
              Email
                </label>
                <input type="email" autoComplete="off" name="email" id="name" placeholder="email"/>
                </div>

                <div className="input-block">
            <label htmlFor="password" className="input-label">
              Password
                </label>
                <input type="password" autoComplete="off" name="password" id="password" placeholder="password"/>
                </div>
                

                <div className="input-block">
            <label htmlFor="confirm_password" className="input-label">
              Confirm Password
                </label>
                <input type="confirm_password" autoComplete="off" name="confirm_password" id="confirm_password" placeholder="confirm-password"/>
                </div>


              <div className="modal-buttons">
                <button className="input-button" type="submit">
                    Registration
                </button>
                </div>
                </form>   
           <p className="sign-up">
            Allready have an account? <a href="sign in">
                </a></p>    






                
        


    </div>
</div> */}