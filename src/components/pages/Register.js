import React, {useEffect, useState} from "react";
import { useHistory } from "react-router";
import userService from "../../service/user.service";

const Register = () => {
    const history = useHistory();
    const initialValues = {email: "", firstname:"", lastname: "", password: "", passwordCheck: ""};
    const [formValues, setFormValues] = useState(initialValues);
    const [formErrors, setFormErrors] = useState({});
    const [isSubmit, setIsSubmit] = useState(false);

    const handleSubmit = (e) => {
        e.preventDefault();
        setFormErrors(validate(formValues));
        setIsSubmit(true);
    };

    const handleChange = (e) => {
        const {name, value} = e.target;
        setFormValues({ ...formValues, [name]:value});
    };

    const validate = (values) => {
        const errors = {};
        const regex = new RegExp('^[a-zA-Z0-9._:$!%-]+@[a-zA-Z0-9.-]+.[a-zA-Z]$');   
       
        if (!values.email) {
            errors.email = "Email is required!";
        } else if (!regex.test(values.email)) {
            errors.email = "This is not a valid email format!";
        }
        if (!values.firstname) {
            errors.firstname = "User name is required!";
        }
        if (!values.lastname) {
            errors.lastname = "User name is required!";
        }
        if (!values.password) {
            errors.password = "Password is required!";
        } else if (values.password.length < 4) {
            errors.password = "Password must be more than 4 characters!";
        }
        if (!values.passwordCheck) {
            errors.passwordCheck = "Please repeat your password!"
        } else if (values.passwordCheck !== values.password) {
            errors.passwordCheck = "Password do not match!"
        }
        return errors;
    };

    useEffect(() => {
        if(Object.keys(formErrors).length === 0 && isSubmit){
            userService.register(formValues.firstname, formValues.lastname, formValues.email, formValues.password).then(
                () => {
                    history.push("/");
                    window.location.reload();
                },
                (error) => {
                    setFormErrors({email:"Email is already in use!"});
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
                                    <h2>Sign Up</h2>
                                </div>
                                <div className="mb-3">
                                    <div className="login-form-grop">
                                        <label className="position-absolute">
                                            <i className="bi bi-person-fill"></i>
                                        </label>
                                        <input className="login-form-input"
                                        type="text"
                                        placeholder="Your First Name"
                                        name="firstname"
                                        value={formValues.firstname}
                                        onChange={handleChange}
                                        />
                                    </div>
                                    <p className="text-danger">{formErrors.firstname}</p>
                                </div>
                                <div className="mb-3">
                                    <div className="login-form-grop">
                                        <input className="login-form-input"
                                        type="text"
                                        placeholder="Your Last Name"
                                        name="lastname"
                                        value={formValues.lastname}
                                        onChange={handleChange}
                                        />
                                    </div>
                                    <p className="text-danger">{formErrors.lastname}</p>
                                </div>
                                <div className="mb-3">
                                    <div className="login-form-grop">
                                        <label className="position-absolute">
                                            <i className="bi bi-envelope-fill"></i>
                                        </label>
                                        <input className="login-form-input"
                                        type="text"
                                        placeholder="Your Email"
                                        name="email"
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
                                        type="password"
                                        placeholder="Password"
                                        name="password"
                                        value={formValues.password}
                                        onChange={handleChange}
                                        />
                                    </div>
                                    <p className="text-danger">{formErrors.password}</p>
                                </div>
                                <div className="mb-3">
                                    <div className="login-form-grop">
                                        <label className="position-absolute">
                                            <i className="bi bi-key"></i>
                                        </label>
                                        <input className="login-form-input"
                                        type="password"
                                        placeholder="Repeat your password"
                                        name="passwordCheck"
                                        value={formValues.passwordCheck}
                                        onChange={handleChange}
                                        />
                                    </div>
                                    <p className="text-danger">{formErrors.passwordCheck}</p>
                                </div>
                                <div className="mb-3">
                                    <div className="form-check">
                                        <input type="checkbox" className="form-check-input" />
                                        <label className="form-check-label">I agree all statements in terms of service</label>
                                    </div>
                                </div>
                                <div className="mb-3">
                                    <button className="btn btn-primary float-right">Register</button>
                                </div>
                            </form>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}
export default Register;
