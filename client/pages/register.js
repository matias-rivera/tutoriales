import { useState } from "react";
import Layout from "../components/Layout";
import axios from "axios";

const Register = () => {
    const [state, setState] = useState({
        name: "",
        email: "",
        password: "",
        error: "",
        success: "",
        buttonText: "Register",
    });

    const { name, email, password, success, error, buttonText } = state;

    const handleChange = (e) => {
        setState({
            ...state,
            [e.target.name]: e.target.value,
            error: "",
            success: "",
        });
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        axios
            .post(`http://localhost:8000/api/register`, {
                name,
                email,
                password,
            })
            .then((response) => console.log(response))
            .catch((err) => console.log(err));
    };

    const registerForm = () => (
        <form onSubmit={handleSubmit}>
            <div className="form-group">
                <input
                    type="text"
                    className="form-control"
                    placeholder="Type your name"
                    name="name"
                    value={name}
                    onChange={handleChange}
                />
            </div>
            <div className="form-group">
                <input
                    type="email"
                    className="form-control"
                    placeholder="Type your email"
                    name="email"
                    value={email}
                    onChange={handleChange}
                />
            </div>
            <div className="form-group">
                <input
                    type="password"
                    className="form-control"
                    autoComplete="new-password"
                    placeholder="Type your password"
                    name="password"
                    value={password}
                    onChange={handleChange}
                />
            </div>
            <div className="form-group">
                <button className="btn btn-outline-warning">
                    {buttonText}
                </button>
            </div>
        </form>
    );
    return (
        <Layout>
            {
                <div className="col-md-6 offset-md-3">
                    <h1>Register</h1> <br /> {registerForm()} <br />
                </div>
            }
        </Layout>
    );
};

export default Register;
