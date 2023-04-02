import React, { useState } from "react";
import './Login.css';
import styled from "styled-components";
import Errors from './Errors';

function Login({ onLogin, signup }) {
    const [username, setUsername] = useState("");
    const [password, setPassword] = useState("");
    const [errors, setErrors] = useState([]);

    const FormField = styled.div`
        &:not(:last-child) {
        margin-bottom: 12px;
    }
`;

    function handleSubmit(e) {
        e.preventDefault();
        fetch("", {
        method: "POST",
        headers: {
            "Content-Type": "application/json",
        },
        body: JSON.stringify({ username, password }),
        }).then((r) => {
        if (r.ok) {
            r.json().then((user) => onLogin(user));
        }else {
            r.json().then((err) => setErrors(err.errors));
        }
        });
    }

    return (
        <div>
            <form onSubmit={handleSubmit} className="login-form">
                <h1>Petfinder</h1>
                <label htmlFor="username">Username:</label>
                <input
                    type="text"
                    id="username"
                    autoComplete="off"
                    placeholder=" Please enter your username..."
                    value={username}
                    onChange={(e) => setUsername(e.target.value)}
                />
                <label htmlFor="password">Password:</label>
                <input
                    type="password"
                    id="password"
                    autoComplete="current-password"
                    placeholder=" Please enter your password..."
                    value={password}
                    onChange={(e) => setPassword(e.target.value)}
                />
                <button type="submit">Login</button>
                <p>
                    Dont't Have an Account? Sign Up below
                </p>
                <FormField>
                    {errors.map((err) => (
                    <Errors key={err}>{err}</Errors>
                    ))}
                </FormField>
            </form>
            {signup}
        </div>  
    );
}

export default Login;