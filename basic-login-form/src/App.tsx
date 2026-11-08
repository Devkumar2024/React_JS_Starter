import React, { useState } from "react";
import type { User, LoginUser } from "./types/types";
import "./App.css";

function App() {
  const [isLogin, setIsLogin] = useState<boolean>(false);
  const [newUser, setNewuser] = useState<User>({
    name: "",
    age: 0,
    email: "",
    company: "",
    password: "",
  });
  const [loginUser, setLoginUser] = useState<LoginUser>({
    email: "",
    password: "",
  });

  function handleMode(e: React.MouseEvent<HTMLButtonElement>) {
    const { name } = e.currentTarget;
    if (name === "login") setIsLogin(true);
    else setIsLogin(false);

    // console.log(isLogin);
  }

  function handleSignUpSubmit(e: React.SubmitEvent<HTMLFormElement>) {
    e.preventDefault();

    console.log(newUser);
  }

  function handleLoginSubmit(e: React.SubmitEvent<HTMLFormElement>) {
    e.preventDefault();

    // console.log(newUser);
    console.log(loginUser);
  }

  function handleChange(e: React.ChangeEvent<HTMLInputElement>) {
    const { name, value } = e.currentTarget;
    if (isLogin) {
      setLoginUser((prev) => ({
        ...prev,
        [name]: value,
      }));
    } else {
      setNewuser((prev) => ({
        ...prev,
        [name]: name === "age" ? Number(value) : value,
      }));
    }
  }

  return (
    <div>
      <h5>React Login form</h5>
      <div className="mainContainer">
        <button name="login" onClick={handleMode}>
          Login
        </button>
        <button name="signup" onClick={handleMode}>
          Sign Up
        </button>

        {!isLogin ? (
          <div className="signupForm">
            <form onSubmit={handleSignUpSubmit}>
              <input type="text" name="name" value={newUser.name} placeholder="enter name" onChange={handleChange} />
              <input type="text" name="age" value={newUser.age} placeholder="enter age" onChange={handleChange} />
              <input
                type="text"
                name="company"
                value={newUser.company}
                placeholder="Company name"
                onChange={handleChange}
              />
              <input type="email" name="email" value={newUser.email} placeholder="email" onChange={handleChange} />
              <input
                type="password"
                name="password"
                value={newUser.password}
                placeholder="password"
                onChange={handleChange}
              />
              <button className="btn" type="submit">
                Submit info
              </button>
            </form>
          </div>
        ) : (
          <div className="loginForm">
            <form onSubmit={handleLoginSubmit}>
              <input type="email" name="email" value={loginUser.email} placeholder="email" onChange={handleChange} />
              <input
                type="password"
                name="password"
                value={loginUser.password}
                placeholder="password"
                onChange={handleChange}
              />
              <button className="btn" type="submit">
                Submit info
              </button>
            </form>
          </div>
        )}
      </div>
    </div>
  );
}

export default App;
