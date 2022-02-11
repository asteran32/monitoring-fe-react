import React, { useState, useEffect } from "react";
import { useHistory } from "react-router";
import userService from "../../service/user.service";

const Login = () => {
    const history = useHistory();
    const initialValues = {email: "", password: ""};
    const [formValues, setFormValues] = useState(initialValues);
    const [formErrors, setFormErrors] = useState({});
    const [isSubmit, setIsSubmit] = useState(false);
    
    const Register = () => {
        history.push("/register");
    };

    const handleChange = (e) => {
        const {name, value} = e.target;
        setFormValues({ ...formValues, [name]: value});
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        setFormErrors(validate(formValues));
        setIsSubmit(true);
    };

    const validate = (values) => {
        const errors = {};
        const regex = new RegExp('^[a-zA-Z0-9._:$!%-]+@[a-zA-Z0-9.-]+.[a-zA-Z]$');

        if (!values.email) {
            errors.email = "Email is required!";
        } else if (!regex.test(values.email)) {
            errors.email = "This is not a valid email format!";
        }
        if (!values.password) {
            errors.password = "Password is required!";
        }
        return errors;
    };

    useEffect(() => {
        if(Object.keys(formErrors).length === 0 && isSubmit){
            userService.login(formValues.email, formValues.password).then(
                () => {
                    history.push("/overview");
                    window.location.reload();
                },
                (error) => {
                    setFormErrors({password: "Sorry, the user does not exist or the password is incorrect!"});
                }
            )
        } else {
            setIsSubmit(false);
        } 
    },[formErrors]);

    return(
        <div className="row justify-content-md-center mt-5">
            <div className="col-md-4 col-sm-12">
                <div className="card border-left-primary shadow h-100 py-2">
                    <div className="card-body">
                        <div className="row no-gutters align-items-center p-3">
                            <form onSubmit={handleSubmit}>
                                <div className="mb-4">
                                    <h2>Sign In</h2>
                                </div>
                                <div className="mb-3">
                                    <div className="login-form-grop">
                                        <label className="position-absolute">
                                            <i className="bi bi-person-fill"></i>
                                        </label>
                                        <input className="login-form-input" 
                                        type="text"
                                        name="email"
                                        placeholder="Your Email"
                                        value={formValues.email}
                                        onChange={handleChange}
                                        />
                                    </div>
                                    <p className="text-danger">{formErrors.email}</p>
                                </div>
                                <div className="mb-3">
                                    <div className="login-form-grop">
                                        <label className="position-absolute">
                                            <i className="bi bi-key-fill"></i>
                                        </label>
                                        <input className="login-form-input"
                                        name="password"
                                        type="password"
                                        placeholder="Password"
                                        value={formValues.password}
                                        onChange={handleChange}
                                        />
                                    </div>
                                    <p className="text-danger">{formErrors.password}</p>
                                </div>
                                <div className="mb-3">
                                    <div className="form-check">
                                        <input type="checkbox" className="form-check-input" />
                                        <label className="form-check-label">Remember me</label>
                                        <button className="btn btn-primary float-right">Sign In</button>
                                    </div>
                                </div>
                                <div className="mb-2">
                                    <a> New around here ?</a>
                                    <button className="btn btn-link" onClick={Register}>Register</button>
                                </div>
                            </form>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}
export default Login;
