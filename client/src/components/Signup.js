import React, { useState } from 'react';
import './Signup.css';
import styled from "styled-components";
import Errors from './Errors';
import { useNavigate } from 'react-router-dom';

const Signupform = ({ onLogin }) => {
    const [user, setUser] = useState({ user_name: '', email: '', password: ''});
    const [errors, setErrors] = useState([]);
    const navigate = useNavigate();

    function handleChange(e) {
        const key = e.target.name;
        const value = e.target.value;
        setUser({ ...user, [key]: value });
    }

    function handleSubmit(e) {
        e.preventDefault();
        fetch("http://localhost:3000/signup", {
            method: "POST",
            headers: {
                "Content-Type": "application/json",
            },
            body: JSON.stringify({
                user_name: user.user_name,
                email: user.email,
                password: user.password
            }),
        })
            .then((r) => {
                if (r.ok) {
                    r.json().then((user) => onLogin(user));
                } else {
                    r.json().then((err) => setErrors(err.errors));
                }
            })
            .catch((err) => {
                console.error("Error:", err);
            });
    }

    return (
        <form onSubmit={handleSubmit} className="signup-form">
            <h1>Petfinder</h1>
            <h1>Signup Form</h1>
            <label htmlFor="user_name">user_name:</label>
            <input
                type="text"
                autoComplete="off"
                id="user_name"
                name="user_name"
                placeholder="Enter your user_name..."
                onChange={handleChange}
            />
            <label htmlFor="email">Email:</label>
            <input
                type="email"
                id="email"
                name="email"
                autoComplete="off"
                placeholder="Enter your email address..."
                onChange={handleChange}
            />
            <label htmlFor="password">Password:</label>
            <input
                type="password"
                id="password"
                name="password"
                placeholder="Enter your password..."
                autoComplete="off"
                onChange={handleChange}
            />
            <label htmlFor="password_confirmation">Confirm Password:</label>
            <input
                type="password"
                id="password_confirmation"
                name="password_confirmation"
                placeholder="Re-enter your password..."
                autoComplete="off"
                onChange={handleChange}
            />
            <button onSubmit={handleSubmit} type="submit">Sign Up</button>
            {/* {errors.length > 0 && (
                <Errors>{errors[0]}</Errors>
            )} */}
        </form>
    );
};

export default Signupform;
