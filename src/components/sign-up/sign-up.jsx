import React, { useEffect, useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import "./sign-up.scss";
import { Login } from "../../redux/action/index";
import { useHistory } from "react-router-dom";
const SignUp = () => {
  
  const dispatch = useDispatch();
  const [inputTodo, setInputTodo] = useState("");
  const [inputTodoPassword, setInputTodoPassWord] = useState("");
  const [inputTodoEmail, setInputTodoEmail] = useState("");
  const handleInput = (e) => {
    setInputTodo(e.target.value);
  };
  const handleInputPassword = (e) => {
    setInputTodoPassWord(e.target.value);
  }
  const handleInputEmail = (e) => {
    setInputTodoEmail(e.target.value);
  }
  const history = useHistory();
  useEffect(() => {}, []);
  const addLogin = () => {
    if (inputTodo.trim().length > 1) {
      dispatch(Login(inputTodo));
      history.push("/");
    } else {
      alert("Login False 404 Not Found-Please re-enter");
    }
  };
  return (
    <div className="container">
      <h2 className="title-block">ĐĂNG KÍ THÀNH VIÊN</h2>
      <div className="section-wrap align-items-center justify-content-center">
        <h5 className="title-block">Login & Email</h5>
        <p className="text-user">User name: </p>
        <input
        className="input-login"
          onChange={handleInput}
          value={inputTodo}
          type="text"
          placeholder="  Enter your username.."
        />
       <p className="text-user">User password: </p>
        <input
        className="input-login"
        type="text"
        onChange={handleInputPassword}
        value={inputTodoPassword}
        placeholder="  Enter your password.."
        />
         <p className="text-user">User email: </p>
        <input
        className="input-login"
        type="text"
        onChange={handleInputEmail}
        value={inputTodoEmail}
        placeholder="  Enter your email.."
        />
        <button className="login-signup" onClick={addLogin}>Login</button>
      </div>
    </div>
  );
};
export default SignUp;
