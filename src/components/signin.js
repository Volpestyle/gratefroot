import { useState } from "react";
import React from "react";
import "./signin.css";
import { registerUser, userPool } from "../utils/register-user";
import { useFormState } from "react-use-form-state";
import toast from "react-hot-toast";
import { signIn } from "../utils/signin-user";
import { Link } from "react-router-dom";
import { render } from "@testing-library/react";
import { confirmUser } from "../utils/confirm-user";

export const SignIn = (props) => {
  const [mode, setMode] = useState(0);
  const [formState, { text, email, password }] = useFormState();
  const [userData, setUserData] = useState({});

  const handleLogin = (e) => {
    e.preventDefault();
    signIn(formState.values.username, formState.values.password).then(() => {
        props.history.push('/')
    });
  };

  const renderLogin = () => {
    return (
      <React.Fragment>
        <h3 className="uk-card-title">Sign In</h3>
        <form onSubmit={handleLogin}>
          <label className="uk-form-label left" for="form-stacked-username">
            Username
          </label>
          <div className="uk-form-controls">
            <input
              {...text("username")}
              className="uk-input"
              id="form-stacked-text"
              type="text"
              placeholder="Username"
            />
          </div>
          <label className="uk-form-label left" for="form-stacked-text">
            Password
          </label>
          <div className="uk-form-controls">
            <input
              {...password("password")}
              className="uk-input"
              id="form-stacked-text"
              type="text"
              placeholder="Password"
            />
          </div>
          <button type="submit" className="uk-button uk-button-primary btn">
            Log In
          </button>
        </form>
        <button
          className="uk-button uk-button-default btn"
          onClick={() => setMode(1)}
        >
          Sign Up?
        </button>
      </React.Fragment>
    );
  };

  const handleSignUp = async (e) => {
    e.preventDefault();
    registerUser(
      formState.values.email,
      formState.values.username,
      formState.values.confirm_password
    )
      .then((result) => {
        console.log(result.user);
        setUserData({ Username: result.user.username, Pool: userPool });
        setMode(2);
        toast(
          "Great! Now please use the code sent to your email to verify your account."
        );
      })
      .catch((err) => {
        console.log(err);
        toast(err.message);
      });
  };

  const renderSignUp = () => {
    return (
      <React.Fragment>
        <h3 className="uk-card-title">Sign Up</h3>
        <form onSubmit={handleSignUp}>
          <label className="uk-form-label left" for="form-stacked-text">
            Email
          </label>
          <div className="uk-form-controls">
            <input
              {...email("email")}
              className="uk-input"
              id="form-stacked-text"
              type="text"
              placeholder="Email"
            />
          </div>
          <label className="uk-form-label left" for="form-stacked-text">
            Username
          </label>
          <div className="uk-form-controls">
            <input
              {...text("username")}
              className="uk-input"
              id="form-stacked-text"
              type="text"
              placeholder="Username"
            />
          </div>
          <label className="uk-form-label left" for="form-stacked-text">
            Password
          </label>
          <div className="uk-form-controls">
            <input
              {...password("password")}
              className="uk-input"
              id="form-stacked-text"
              type="text"
              placeholder="Password"
            />
          </div>
          <label className="uk-form-label left" for="form-stacked-text">
            Confirm Password
          </label>
          <div className="uk-form-controls">
            <input
              {...password("confirm_password")}
              className="uk-input"
              id="form-stacked-text"
              type="text"
              placeholder="Confirm Password"
            />
          </div>
          <button type="submit" className="uk-button uk-button-primary btn">
            Sign Up
          </button>
        </form>
        <button
          className="uk-button uk-button-default btn"
          onClick={() => setMode(0)}
        >
          Already have an account?
        </button>
      </React.Fragment>
    );
  };

  const handleConfirmEmail = (e) => {
    e.preventDefault();
    confirmUser(userData, formState.values.verification_code)
      .then((result) => {
        console.log(result);
        toast("Awesome. You're all set");
        setMode(0);
      })
      .catch((err) => {
        console.log(err);
        toast(err);
      });
  };

  const renderConfirmEmail = () => {
    return (
      <React.Fragment>
        <h3 className="uk-card-title">Confirm Email</h3>
        <form onSubmit={handleConfirmEmail}>
          <label className="uk-form-label left" for="form-stacked-text">
            Enter Verification Code
          </label>
          <div className="uk-form-controls">
            <input
              {...text("verification_code")}
              className="uk-input"
              id="form-stacked-text"
              type="text"
              placeholder="Confirm Password"
            />
          </div>
          <button type="submit" className="uk-button uk-button-primary btn">
            Enter
          </button>
        </form>
        <button
          className="uk-button uk-button-default btn"
          onClick={() => setMode(0)}
        >
          Login
        </button>
      </React.Fragment>
    );
  };

  const renderPage = () => {
    switch (mode) {
      case 0:
        return renderLogin();
      case 1:
        return renderSignUp();
      case 2:
        return renderConfirmEmail();
    }
  };

  return (
    <div className="uk-card uk-card-default uk-card-body login-container uk-align-center">
      {renderPage()}
    </div>
  );
};
